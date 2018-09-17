import { Log, LogOutputOpt, LogOutputter } from './types'

export class ConsoleOutputter extends LogOutputter {
  _output(log: Log) {
    const getLocation = trace => `${trace.fileName}:${trace.lineNumber}:${trace.columnNumber}`
    console.log(log.type, ...log.args, getLocation(log.stack[0]))
    // console.log('stack trace\n', ...log.stack.map(trace => getLocation(trace) + '\n'))
  }
}
