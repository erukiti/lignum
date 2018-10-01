import { Log, LogOutputOpt, LogOutputter } from '../types'

const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgRed: '\x1b[30;41m',
  bgGreen: '\x1b[30;42m',
  bgYellow: '\x1b[30;43m',
  bgBlue: '\x1b[30;44m',
  bgMagenta: '\x1b[30;45m',
  bgCyan: '\x1b[30;46m',
  bgWhite: '\x1b[30;47m',
  normal: '\x1b[0m'
}

export const anyToString = (obj: any) => {
  if (obj === undefined) {
    return `${colors.bgBlue}undefined${colors.normal}`
  } else if (obj === null) {
    return `${colors.bgBlue}null${colors.normal}`
  } else if (typeof obj === 'object') {
    try {
      let name = ''
      if ('constructor' in obj) {
        name = `[${obj.constructor.name}] `
      } else if ('name' in obj) {
        name = `[${obj.name}] `
      }
      return `${name}${JSON.stringify(obj)}`
    } catch(e) {
      return Object.keys(obj)
    }
  } else {
    return obj.toString()
  }
}


const putTerminal = (log: Log, write: (s: string) => void) => {
  const isVerboseLevel = true
  let source = ''
  if (isVerboseLevel) {
    let i = 0
    while (i < log.stack.length) {
      const { fileName, lineNumber, columnNumber } = log.stack[i]
      if (fileName.indexOf(log.root) === 0) {
        const relative = fileName.substr(log.root.length + 1)
        if (relative.indexOf('node_modules/') !== 0) {
          source = [relative, lineNumber, columnNumber, ' '].join(':')
          break
        }
      }
      i++
    }
  }

  const message = log.args
    .map(obj => anyToString(obj))
    .map(s => s.length > 300 ? `[${s.length}]${s.substr(0, 300)}...` : s)
    .join(' ')

  const at = typeof log.at === 'object' ? log.at.toLocaleTimeString() : log.at

  const logColors = {
    info: colors.cyan,
    verbose: colors.bgGreen,
    debug: colors.bgYellow,
    warn: colors.cyan,
    error: colors.red
  }
  const startColor = logColors[log.type.split('.')[0]]
  const length = isVerboseLevel ? 7 : 5

  const logType = `${log.type}      `.substr(0, length)
  const logName = isVerboseLevel ? `\x1b[m${log.name}.` : ''

  write(`${logName}${startColor}${logType}${colors.normal} ${colors.green}[${at}]${colors.normal} ${source}${message}\n`)
}

export const createTerminalOutputter = (write: (s: string) => void) => {
  return class extends LogOutputter {
    _output(log: Log) {
      putTerminal(log, write)
    }
  }
}
