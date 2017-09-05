const putConsole = (log, callback = msg => process.stdout.write(msg)) => {
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
        case 'log':
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

    const logType = `${log.type}    `.substr(0, 5)
    // FIXME: log.name

    callback(`${startColor}${logType}\x1b[m \x1b[32m[${at}]\x1b[m ${log.source}${message}\n`)
}

module.exports = putConsole
