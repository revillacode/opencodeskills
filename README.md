# Omarchy Topbar Skill

An OpenCode skill for building and maintaining professional Omarchy topbar
customizations. It is focused on Quickshell widgets, user plugins, icons,
popups, remote status modules, and safe visual validation.

## Included Skill

| Skill | Purpose |
| --- | --- |
| `omarchy-topbar` | Create, customize, debug, and validate Omarchy topbar widgets and panels. |

## Install

Clone this repository and add its `skills` directory to an OpenCode project
configuration:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "skills": {
    "paths": ["/absolute/path/to/opencode-skills/skills"]
  }
}
```

OpenCode loads every `SKILL.md` below the configured path recursively. Restart
OpenCode after changing skill configuration or skill files.

## Quality Checks

```bash
npm test
```

The validator checks the skill directory name, required frontmatter,
description, and expected `SKILL.md` layout.

## Contributing

New skills should have a narrow purpose, explicit trigger language, safe
defaults, and verification guidance. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT. See [LICENSE](LICENSE).
