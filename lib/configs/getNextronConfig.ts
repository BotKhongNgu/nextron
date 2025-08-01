import fs from 'fs'
import path from 'path'

const cwd = process.cwd()

export const getNextronConfig = () => {
  if (fs.existsSync(path.join(cwd, 'nextron.config.js')))
    return require(path.join(cwd, 'nextron.config.js'))
  if (fs.existsSync(path.join(cwd, 'nextron.config.ts')))
    return require(path.join(cwd, 'nextron.config.ts'))
  return {}
}
