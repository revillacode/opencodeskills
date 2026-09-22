---
name: github-project
description: Use when creating, reviewing, maintaining, or publishing a GitHub repository, project, issue, pull request, release, workflow, or package.
license: MIT
compatibility: Requires git and the GitHub CLI for remote operations.
---

# GitHub Project Workflow

Build repositories as maintainable products, not just folders of code.

## Workflow

1. Inspect the current directory, git state, recent commits, and repository
   metadata before changing anything.
2. Define the smallest useful scope and record assumptions.
3. Create a clear README, license, contribution guidance, security policy, and
   automated validation appropriate to the project.
4. Keep secrets, local paths, machine-specific configuration, and generated
   artifacts out of commits.
5. Run focused tests and linters before publishing.
6. Inspect `git status`, `git diff`, and the commits included in the change.
7. Use `gh` for GitHub operations. Confirm authentication before attempting to
   create repositories, issues, pull requests, or releases.

## Repository Standards

- Use a descriptive kebab-case repository name.
- Prefer a small, coherent first release over speculative abstractions.
- Pin action major versions and grant workflows the minimum permissions.
- Document installation, usage, development, testing, and license terms.
- Make CI reproduce the local validation command.

## Safety

Never commit API keys, SSH private keys, `.env` files, access tokens, or
personal machine paths. Stop before a remote write when GitHub authentication
is missing or the owner, visibility, or repository name is ambiguous.
