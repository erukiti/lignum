const WebSocket = require('ws')
const st = require('stacktrace-js')

class Logger {
    constructor(opts) {
        this.name = opts.name
        this.logs = []
        this.isDisabled = opts.isDisabled
        this.isWsOpened = false
        this.state = 'init'

        this.isNode = typeof process === 'object'

        const flush = callback => {
            this.logs.forEach(callback)
            this.logs = []
        }

        const flushConsole = () => {
            this.state = 'standalone'
            this.ws = null
            flush(log => this._putLogConsole(log))
        }

        if (!this.isDisabled) {
            try {
                this.ws = new WebSocket('ws://localhost:9999/')
                this.ws.on('open', () => {
                    this.state = 'opened'
                    flush(log => this.ws.send(JSON.stringify(log)))
                })
                this.ws.on('error', () => {
                    flushConsole()
                })
            } catch (e) {
                flushConsole()
            }
        }
    }

    _putLogConsole(log) {
        const source = log.stack.size > 0 ? `${log.stack[0].fileName}:${log.stack[0].lineNumber}` : ''
        if (!this.isNode) {
            console.log(this.name, type, source, message)
            return
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
        process.stdout.write(`${log.name}.${log.type} \x1b[32m[${log.at.toLocaleTimeString()}]\x1b[m ${source}: ${message}\n`)
    }

    _putLog(type, args) {
        const log = {name: this.name, at: new Date(), type, args, stack: st.getSync()}
        switch (this.state) {
            case 'standalone': {
                this._putLogConsole(log)
                break
            }
            case 'opened': {
                this.ws.send(JSON.stringify(log))
                break
            }
            case 'init': {
                this.logs.push(log)
                break
            }
        }
    }

    log(...args) {
        this._putLog('log', args)
    }

    info(...args) {
        this._putLog('info', args)
    }

    debug(...args) {
        this._putLog('debug', args)
    }

    error(...args) {
        this._putLog('error', args)
    }

    warn(...args) {
        this._pugLog('warn', args)
    }
}

module.exports = Logger
