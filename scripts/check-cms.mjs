/**
 * What can be checked without a deploy: that the CMS config is valid, that
 * every path it points at exists, and — the one that actually loses data —
 * that every frontmatter key in the repo is a field the CMS declares. Decap
 * writes back only the fields in its config, so an undeclared key is silently
 * dropped the first time Dr. Lebrun saves that entry.
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { load as parseYaml } from 'js-yaml'

const cfg = parseYaml(readFileSync('public/admin/config.yml', 'utf8'))
const problems = []
const notes = []

notes.push(`backend: ${cfg.backend.name} on branch "${cfg.backend.branch}"`)
notes.push(`media_folder: ${cfg.media_folder} -> public_folder: ${cfg.public_folder}`)
if (!existsSync(cfg.media_folder)) problems.push(`media_folder missing: ${cfg.media_folder}`)

const fieldNames = (fields) => new Set((fields ?? []).map((f) => f.name))

const frontmatter = (path) => {
  const text = readFileSync(path, 'utf8')
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)
  return m ? parseYaml(m[1]) ?? {} : {}
}

for (const collection of cfg.collections) {
  if (collection.folder) {
    if (!existsSync(collection.folder)) {
      problems.push(`collection "${collection.name}": folder missing — ${collection.folder}`)
      continue
    }
    const declared = fieldNames(collection.fields)
    const entries = readdirSync(collection.folder).filter((f) => f.endsWith('.md'))
    notes.push(`collection "${collection.name}": ${entries.length} entries, fields [${[...declared].join(', ')}]`)
    for (const entry of entries) {
      const data = frontmatter(join(collection.folder, entry))
      for (const key of Object.keys(data)) {
        if (!declared.has(key)) problems.push(`"${collection.name}"/${entry}: frontmatter key "${key}" is not a CMS field — saving in the CMS would drop it`)
      }
      if (collection.filter && data[collection.filter.field] !== collection.filter.value) {
        problems.push(`"${collection.name}"/${entry}: ${collection.filter.field}="${data[collection.filter.field]}" does not match the collection filter "${collection.filter.value}" — it will not be listed in the CMS`)
      }
    }
  }

  for (const file of collection.files ?? []) {
    if (!existsSync(file.file)) {
      problems.push(`file entry "${file.name}": missing — ${file.file}`)
      continue
    }
    const declared = fieldNames(file.fields)
    const data = frontmatter(file.file)
    for (const key of Object.keys(data)) {
      if (!declared.has(key)) problems.push(`file entry "${file.name}" (${file.file}): frontmatter key "${key}" is not a CMS field — saving in the CMS would drop it`)
    }

    // Nested list widgets — the team roster — lose undeclared keys the same way.
    for (const field of file.fields ?? []) {
      const rows = data[field.name]
      if (!field.fields || !Array.isArray(rows)) continue
      const nested = fieldNames(field.fields)
      for (const row of rows) {
        for (const key of Object.keys(row ?? {})) {
          if (!nested.has(key)) problems.push(`file entry "${file.name}": ${field.name}[].${key} is not a CMS field — saving in the CMS would drop it`)
        }
      }
    }
  }
}

// Media referenced from content must resolve under public/.
const referenced = new Set()
const walk = (dir) => {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, item.name)
    if (item.isDirectory()) walk(path)
    else if (item.name.endsWith('.md')) {
      const text = readFileSync(path, 'utf8')
      // Markdown links stop at the closing paren; a frontmatter value runs to
      // the end of the line and may contain spaces.
      for (const m of text.matchAll(/\]\((\/img\/[^)]+)\)/g)) referenced.add(m[1].trim())
      for (const m of text.matchAll(/^\s*[\w-]+:\s*['"]?(\/img\/[^'"\n]+?)['"]?\s*$/gm)) referenced.add(m[1].trim())
    }
  }
}
walk('src/content')
const missingMedia = [...referenced].filter((ref) => !existsSync(join('public', decodeURIComponent(ref))))
notes.push(`media referenced from content: ${referenced.size} paths`)
for (const ref of missingMedia) problems.push(`content references a missing file: ${ref}`)

console.log(notes.map((n) => '  · ' + n).join('\n'))
console.log(problems.length ? `\n${problems.length} PROBLEM(S):\n` + problems.map((p) => '  ✗ ' + p).join('\n') : '\n✓ CMS config is consistent with the repo: every path resolves and every frontmatter key is a declared field')
