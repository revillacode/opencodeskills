# Contributing

## Skill Design

- Keep changes focused on the Omarchy topbar skill.
- Use a lowercase, hyphen-separated directory name.
- Put the instructions in `skills/omarchy-topbar/SKILL.md`.
- Start frontmatter descriptions with concrete trigger terms.
- State safety boundaries and verification steps explicitly.
- Prefer commands and examples that work on a clean Linux system.
- Do not include credentials, tokens, private hostnames, or personal paths.

## Pull Requests

1. Explain the problem the skill solves.
2. Include the trigger phrases that should activate it.
3. Run `npm test`.
4. Keep unrelated changes out of the pull request.

## Review Standard

Reviewers check that topbar guidance is narrowly scoped, operationally safe,
discoverable by its description, and useful without hidden context.
