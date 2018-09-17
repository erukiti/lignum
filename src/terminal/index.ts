import { Log, LogOutputOpt, LogOutputter } from '../types'
import { putTerminal } from './put-terminal'

export const createTerminalOutputter = (write: (s: string) => void) => {
  return class extends LogOutputter {
    _output(log: Log) {
      putTerminal(log, write)
    }
  }
}
