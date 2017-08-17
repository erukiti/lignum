const process = require('process')
const path = require('path')
const os = require('os')

const isNode = typeof process === 'object' && typeof process.versions === 'object' && !!process.versions.node


const putConsole = (log, isVerboseLevel = false) => {
    if (!isNode) {
        console.log(log.name, log.type, log.args)
        return
    }

    let source = ''
    if (isVerboseLevel) {
        let i = 0
        while (i < log.stack.length) {
            const {fileName, lineNumber, columnNumber} = log.stack[i]
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

    const message = log.args.map(obj => {
        if (obj === undefined) {
            return 'undefined'
        } else if (obj === null) {
            return 'null'
        } else if (typeof obj === 'object') {
            return JSON.stringify(obj)
        } else {
            return obj.toString()
        }
    }).join(' ')

    const at = typeof log.at === 'object' ? log.at.toLocaleTimeString() : log.at

    let startColor = ''
    switch (log.type) {
        case 'info':
            startColor = '\x1b[36m'
            break
        case 'verbose':
            startColor = '\x1b[32m'
            break
        case 'debug':
            startColor = '\x1b[35m'
            break

        case 'warn':
            startColor = '\x1b[33m'
            break

        case 'error':
            startColor = '\x1b[31m'
            break
    }

    const length = isVerboseLevel ? 7 : 5
     
    const logType = `${log.type}      `.substr(0, length)
    const logName = isVerboseLevel ? `\x1b[m${log.name}.` : ''

    process.stdout.write(`${logName}${startColor}${logType}\x1b[m \x1b[32m[${at}]\x1b[m ${source}${message}\n`)
}

module.exports = putConsole
