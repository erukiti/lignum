import { Log, LogOutputOpt, LogOutputter } from './types'

export class ConsoleOutputter extends LogOutputter {
  _output(log: Log) {
    console.log(log.name, log.type, log.args)
  }
}
