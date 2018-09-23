import * as path from 'path'

import * as st from 'stacktrace-js'

import { Logger } from './logger'
import { getCallerRoot } from './get-caller'
import { ConsoleOutputter } from './console'
import { createTerminalOutputter } from './terminal'
import { normalizeTraces } from './utils'

const loggers: { [props: string]: Logger } = {}
const logOutputters: any = {}

if (process && process.stdout && process.stdout.write) {
  logOutputters.StdoutOutputter = createTerminalOutputter((s: string) => process.stdout.write(s))
} else {
  logOutputters.ConsoleOutputter = ConsoleOutputter
}

if (process.env.LIGNUM_FILE && process.env.LIGNUM_FILE !== '') {
  const fs = eval("require('fs')")
  logOutputters.FileOutputter = createTerminalOutputter((s: string) => fs.appendFileSync(process.env.LIGNUM_FILE, s))
}

let lignumPath = path.dirname(require.resolve('../package.json'))

if (!path.isAbsolute(lignumPath)) {
  lignumPath = path.dirname(normalizeTraces(st.getSync())[0].fileName)
}

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
