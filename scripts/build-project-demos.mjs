import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const portfolioRoot = path.join(scriptDir, '..')
const projectsRoot = path.join(portfolioRoot, 'PROJECTS')
const demosRoot = path.join(portfolioRoot, 'public', 'demos')

/** @type {{ dir: string; slug: string }[]} */
const demoProjects = [
  { dir: 'Hush app website✅', slug: 'hush' },
  { dir: 'Luxary cars website ✅', slug: 'luxury-cars' },
  { dir: 'Maison cleo boutique website✅', slug: 'maison-cleo' },
  { dir: 'Music producer website ✅', slug: 'music-producer' },
  { dir: 'Product designer portfolio website✅', slug: 'product-designer' },
  { dir: 'SteakHouse restaurant website ✅', slug: 'steakhouse' },
]

function copyDist(src, dest) {
  fs.rmSync(dest, { recursive: true, force: true })
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.cpSync(src, dest, { recursive: true })
}

fs.mkdirSync(demosRoot, { recursive: true })

for (const { dir, slug } of demoProjects) {
  const projectPath = path.join(projectsRoot, dir)
  const distPath = path.join(projectPath, 'dist')
  const base = `/demos/${slug}/`

  if (!fs.existsSync(projectPath)) {
    console.warn(`Skipping missing project folder: ${dir}`)
    continue
  }

  console.log(`\n→ Building ${dir} (base: ${base})`)
  execSync(`npm run build -- --base=${base}`, {
    cwd: projectPath,
    stdio: 'inherit',
    env: { ...process.env, CI: 'true' },
  })

  if (!fs.existsSync(distPath)) {
    throw new Error(`Build did not produce dist for ${dir}`)
  }

  copyDist(distPath, path.join(demosRoot, slug))
  console.log(`✓ Copied to public/demos/${slug}`)
}

console.log('\nAll project demos are ready under public/demos/')
