import { readdir, readFile } from "node:fs/promises"
import { join, relative } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(fileURLToPath(new URL("..", import.meta.url)), "skills")
const errors = []

const validName = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

const directories = (await readdir(root, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort()

if (directories.length === 0) errors.push("skills/: no skill directories found")

for (const name of directories) {
  if (!validName.test(name)) errors.push(`${name}: invalid skill directory name`)

  const path = join(root, name, "SKILL.md")
  let content
  try {
    content = await readFile(path, "utf8")
  } catch {
    errors.push(`${name}: missing SKILL.md`)
    continue
  }

  if (!content.startsWith("---\n")) {
    errors.push(`${name}/SKILL.md: missing frontmatter`)
    continue
  }

  const end = content.indexOf("\n---", 4)
  if (end === -1) {
    errors.push(`${name}/SKILL.md: unterminated frontmatter`)
    continue
  }

  const frontmatter = content.slice(4, end).split("\n")
  const fields = new Map(frontmatter.map((line) => {
    const separator = line.indexOf(":")
    return separator === -1 ? [line, ""] : [line.slice(0, separator), line.slice(separator + 1).trim()]
  }))

  if (fields.get("name") !== name) errors.push(`${name}/SKILL.md: name must match directory`)
  const description = fields.get("description") || ""
  if (description.length < 40) errors.push(`${name}/SKILL.md: description is too short`)
  if (!content.slice(end + 4).trim()) errors.push(`${name}/SKILL.md: body is empty`)
}

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"))
  process.exit(1)
}

console.log(`Validated ${directories.length} skill(s): ${directories.map((name) => relative(root, join(root, name))).join(", ")}`)
