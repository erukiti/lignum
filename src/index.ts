import * as fs from 'fs'

import * as st from 'stacktrace-js'

import { Logger } from './logger'
import { getCallerRoot } from './get-caller'
import { createTerminalOutputter } from './output/terminal'
import { normalizeTraces, getLignumPath } from './utils'

const loggers: { [props: string]: Logger } = {}
const logOutputters: any = {}

logOutputters.StdoutOutputter = createTerminalOutputter((s: string) => process.stdout.write(s))

if (process.env.LIGNUM_FILE && process.env.LIGNUM_FILE !== '') {
  logOutputters.FileOutputter = createTerminalOutputter((s: string) => fs.appendFileSync(process.env.LIGNUM_FILE, s))
}

const lignumPath = getLignumPath()
export const getLogger = (opts = { name: null, root: null }) => {
  const traces = normalizeTraces(st.getSync())
  const callerRoot = getCallerRoot(traces, lignumPath)
  const name = opts.name || callerRoot.name || 'app'
  const root = opts.root || callerRoot.root

  if (root in loggers) {
    return loggers[root]
  }

  const outputters = Object.keys(logOutputters).map(key => {
    const outputter = logOutputters[key]
    const envName = `LIGNUM_${key.replace('Outputter', '').toUpperCase()}`
    const def = process.env[envName]

    return new outputter({ def })
  })

  loggers[root] = new Logger(name, root, lignumPath, outputters)
  return loggers[root]
}
