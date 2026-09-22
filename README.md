# OpenCode Skills

Curated, reusable skills for [OpenCode](https://opencode.ai). Each skill is
self-contained, trigger-focused, and designed to be loaded from a local clone
or a shared skills directory.

## Included Skills

| Skill | Purpose |
| --- | --- |
| `github-project` | Plan, implement, validate, and publish professional GitHub repositories. |
| `linux-desktop` | Safely customize Linux desktop environments, especially Hyprland and Omarchy. |
| `diagnose-crash` | Investigate Linux crashes from core dumps and produce actionable reports. |

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

The validator checks directory names, required frontmatter, descriptions, and
the expected `SKILL.md` layout.

## Contributing

New skills should have a narrow purpose, explicit trigger language, safe
defaults, and verification guidance. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT. See [LICENSE](LICENSE).
