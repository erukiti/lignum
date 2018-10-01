import * as st from 'stacktrace-js'

import { ConsoleOutputter } from './output/console'
import { Logger } from './logger'
import { getCallerRoot } from './get-caller'
import { createTerminalOutputter } from './output/terminal'
import { normalizeTraces, getLignumPath } from './utils'

const isProduction = process.env.NODE_ENV === 'production'
const lignumPath = getLignumPath()

// export let getLogger
const loggers: { [props: string]: Logger } = {}


// if (isProduction) {
export const getLogger = (opts = { name: 'app', root : null} ) => {
  const traces = normalizeTraces(st.getSync())
  const callerRoot = getCallerRoot(traces, lignumPath)
  const name = opts.name || callerRoot.name
  const root = opts.root || callerRoot.root

  if (root in loggers) {
    return loggers[root]
  }

  const logOutputters = { ConsoleOutputter }

  const outputters = Object.keys(logOutputters).map(key => {
    const outputter = logOutputters[key]
    const envName = `LIGNUM_${key.replace('Outputter', '').toUpperCase()}`
    const def = process.env[envName]

    return new outputter({ def })
  })

  loggers[root] = new Logger(name, root, lignumPath, outputters)
  return loggers[root]
}
