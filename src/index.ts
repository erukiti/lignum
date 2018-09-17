import * as st from 'stacktrace-js'

import { Logger } from './logger'
import { getCallerRoot } from './get-caller'
import { ConsoleOutputter } from './console'
import { createTerminalOutputter } from './terminal'

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

export const getLogger = (opts = { name: null, root: null }) => {
  const traces = st.getSync()
  const callerRoot = getCallerRoot(traces, __dirname)
  const name = opts.name || callerRoot.name
  const root = opts.root || callerRoot.root

  if (root in loggers) {
    return loggers[root]
  }

  const outputters = Object.keys(logOutputters).map(key => {
    const outputter = logOutputters[key]
    const def = process.env[`LIGNUM_${key.replace('Outputter', '').toUpperCase()}`]

    return new outputter({ def })
  })

  loggers[root] = new Logger(name, root, outputters)
  return loggers[root]
}
