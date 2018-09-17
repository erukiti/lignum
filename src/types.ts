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

export abstract class LogOutputter {
  public _types: { [props: string]: boolean } = {
    info: true,
    verbose: false,
    debug: false,
    error: true,
    warn: true
  }

  constructor(opt: LogOutputOpt = {}) {
    const def = opt.def
    if (typeof def === 'string' && def) {
      this._types = {}
      def.split(',').forEach(type => (this._types[type] = true))
    }
  }

  public output(log: Log): void {
    if (this._types[log.type]) {
      this._output(log)
    }
  }

  protected abstract _output(log: Log): void
}
