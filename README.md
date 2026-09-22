# OpenCode Skills

A curated, extensible collection of reusable skills for
[OpenCode](https://opencode.ai). Each skill is isolated in its own directory so
new capabilities can be added without changing existing skills.

## Included Skills

| Skill | Purpose |
| --- | --- |
| `omarchy-topbar` | Create, customize, debug, and validate Omarchy topbar widgets and panels. |

Add future skills under `skills/<skill-name>/SKILL.md`. The directory name must
be lowercase kebab-case and match the `name` field in the skill frontmatter.

## Install

Clone this repository and add its `skills` directory to an OpenCode project
configuration:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "skills": {
    "paths": ["/absolute/path/to/opencodeskills/skills"]
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
defaults, and verification guidance.

## License

MIT. See [LICENSE](LICENSE).
