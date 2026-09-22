---
name: omarchy-topbar
description: Use when creating, customizing, debugging, or validating the Omarchy topbar, Quickshell bar widgets, QML panels, icons, shell.json layouts, or remote monitoring modules.
license: MIT
compatibility: Omarchy with Quickshell and a user configuration under ~/.config/omarchy.
---

# Omarchy Topbar

Build polished, reliable Omarchy topbar customizations without modifying
packaged Omarchy files.

## Architecture

- The topbar layout is configured in `~/.config/omarchy/shell.json`.
- User-owned plugins live under `~/.config/omarchy/plugins/<plugin-id>/`.
- A third-party bar plugin needs a `manifest.json` with `kinds: ["bar-widget"]`
  and an `entryPoints.barWidget` QML entry point.
- A panel widget can extend `Panel` and use `KeyboardPanel` for a popup.
- Simple custom modules can use `type: "command"` or `type: "qml"` in the
  bar layout, but use a plugin for interactive panels and persistent logic.
- Never edit `/usr/share/omarchy` or the packaged shell under `$OMARCHY_PATH`.

## Workflow

1. Read the current `shell.json`, active theme, plugin manifest, and a nearby
   first-party widget before changing anything.
2. Preserve existing layout entries and add the smallest useful module.
3. Use a namespaced plugin id such as `example.monitor` and keep all files in
   the user plugin directory.
4. Give every widget explicit `implicitWidth` and `implicitHeight`; a missing
   dimension makes the module load with zero size and appear to be absent.
5. Use `BarIconButton` for the bar button. For an image logo, set
   `iconComponent` rather than placing an image over an empty button, because
   the button uses visual-content detection to determine whether the slot is
   present.
6. Match the theme through `bar.foreground`, `bar.background`, and the bar's
   font family. Prefer symbolic monochrome SVGs or a theme-aware effect over
   hard-coded colors.
7. Make polling bounded and non-blocking. A remote status widget should use
   timeouts, keep the last known state, and show an explicit offline state.
8. Reload the shell, open the panel through its IPC target, inspect logs, and
   verify the rendered UI on the real desktop.

## Remote Monitoring

For SSH-backed modules:

- Use `BatchMode=yes`, a short `ConnectTimeout`, and strict host-key checking.
- Select an existing SSH key explicitly or rely on a configured host alias;
  never embed passwords, private keys, or tokens in QML or scripts.
- Run read-only commands only unless the user explicitly requests controls.
- Return a stable, parseable format such as JSON or validated key-value lines.
- Sanitize container names, image names, and status strings before displaying
  them in QML.
- Handle unreachable hosts without blocking or crashing the shell.

Useful read-only Raspberry Pi data includes hostname, OS, uptime, temperature,
load, CPU count, memory, root disk usage, active Docker count, and each active
container's name, image, and status.

## Icon Guidance

For a real SVG logo, keep the asset local to the plugin and ensure it is a
valid decodable SVG. Test the asset independently if the icon is invisible.
For theme consistency, use the same optical canvas and slot size as nearby
widgets. A filled logo can look brighter than line icons even with the same
foreground color; adjust geometry or opacity only after confirming the actual
theme color is shared.

## Verification

Run focused checks after edits:

```bash
jq empty ~/.config/omarchy/shell.json
omarchy plugin validate ~/.config/omarchy/plugins/<plugin-id>
omarchy restart shell
omarchy shell shell ping
journalctl --user --since "10 seconds ago" --no-pager
```

For a missing widget, inspect these first:

- The id exists exactly once in `bar.layout`.
- The plugin is discovered and enabled with `omarchy plugin list --json`.
- The root item has non-zero implicit dimensions.
- The icon asset is non-empty and decodes successfully.
- QML logs do not report loader, image, or component errors.
