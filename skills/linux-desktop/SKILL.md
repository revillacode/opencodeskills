---
name: linux-desktop
description: Use when customizing a Linux desktop, window manager, terminal, status bar, Hyprland, Omarchy, themes, keybindings, monitors, or user-facing system behavior.
license: MIT
compatibility: Linux systems; inspect the active desktop stack before editing configuration.
---

# Linux Desktop Customization

Make reversible, user-scoped desktop changes while preserving the system's
existing visual language.

## Workflow

1. Identify the desktop, compositor, bar, shell, and configuration scope in
   use before editing.
2. Read the active configuration and packaged defaults before assuming a
   schema or reload command.
3. Prefer user configuration under `~/.config` over packaged files under
   `/usr/share` or `/etc`.
4. Preserve unrelated settings and make the smallest correct change.
5. Validate syntax, reload the affected component, and inspect the running UI.
6. Explain any restart, logout, or package installation required.

## Omarchy

Use Omarchy's documented commands for bar, plugin, theme, refresh, and restart
operations. Never edit `/usr/share/omarchy`; updates overwrite it. For custom
bar widgets, use a user plugin under `~/.config/omarchy/plugins/` and declare a
valid manifest. Keep remote monitoring commands read-only and use SSH keys or
other non-interactive authentication without embedding credentials.

## Safety

Do not run destructive reset, reboot, shutdown, package removal, or privileged
commands without explicit user intent. Back up user configuration before a
reset and never overwrite changes that were not made by the current task.
