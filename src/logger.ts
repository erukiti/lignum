import * as st from 'stacktrace-js'

import { Log, LogOutputter } from './types'
import { normalizeTraces } from './utils'

export class Logger {
  name: string
  root: string
  lignumRoot: string
  loggers: LogOutputter[]

  constructor(name: string, root: string, lignumRoot: string, loggers: LogOutputter[]) {
    this.loggers = loggers
    this.name = name
    this.root = root
    this.lignumRoot = lignumRoot
  }

  _putLog(type, args) {
    const log: Log = {
      name: this.name,
      at: new Date(),
      root: this.root,
      type,
      args,
      stack: normalizeTraces(st.getSync(), this.lignumRoot)
    }
    this.loggers.forEach(logger => logger.output(log))
  }

  info(...args) {
    this._putLog('info', args)
  }

  log(...args) {
    this._putLog('verbose', args)
  }
  verbose(...args) {
    this._putLog('verbose', args)
  }
  debug(...args) {
    this._putLog('debug', args)
  }

  error(...args) {
    this._putLog('error', args)
  }

  warn(...args) {
    this._putLog('warn', args)
  }
}
