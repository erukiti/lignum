import * as st from 'stacktrace-js'

export interface Log {
  name: string
  at: Date
  root: string
  type: string
  args: any
  stack: st.StackFrame[]
}

export interface LogOutputOpt {
  def?: string
  [props: string]: any
}

type LogTypeEnablers = {
  info: boolean,
  verbose: boolean,
  debug: boolean,
  error: boolean,
  warn: boolean
}

export abstract class LogOutputter {
  public _types: LogTypeEnablers = {
    info: true,
    verbose: false,
    debug: false,
    error: true,
    warn: true
  }

  constructor(opt: LogOutputOpt = {}) {
    const def = opt.def
    if (typeof def === 'string' && def) {
      this._types = { info: false, verbose: false, debug: false, error: false, warn: false }
      def.split(',').forEach(type => (this._types[type] = true))
    }
  }

  public output(log: Log): void {
    const type = log.type.split('.')[0]
    if (this._types[type]) {
      this._output(log)
    }
  }

  protected abstract _output(log: Log): void
}
