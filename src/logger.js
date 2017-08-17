const WebSocket = require('ws')
const st = require('stacktrace-js')
const putConsole = require('./put-console')

const isNode = typeof process === 'object' && typeof process.versions === 'object' && !!process.versions.node

class Logger {
    constructor(opts) {
        this.name = opts.name
        this.root = opts.root

        const traces = st.getSync()
        if (isNode) {
            const path = require('path')
            const fs = require('fs')
            let i = 0
            while (path.dirname(traces[i].fileName) === __dirname) {
                i++
            }
            const callerPath = path.dirname(traces[i].fileName).split('/').filter(s => s !== '')
            while (callerPath.length > 0) {
                try {
                    const fn = path.join('/', ...callerPath, 'package.json')
                    const {name} = JSON.parse(fs.readFileSync(fn))
                    this.name = name
                    this.root = path.dirname(fn)
                    break
                } catch (e) {
                    callerPath.pop()
                }
            }
        }
        this.setLevel(opts.level || 'info')
        this.isVerboseLevel = this.level >= this._getLogLevel('verbose')

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
            flush(log => putConsole(log, this.isVerboseLevel))
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

    setLevel(level) {
        this.level = this._getLogLevel(level)
        this.isVerboseLevel = this.level >= this._getLogLevel('verbose')
    }

    _getLogLevel(level) {
        const result = ['error', 'warn', 'info', 'verbose', 'debug'].indexOf(level)
        if (result === -1) {
            return 2
        } else {
            return result
        }
    }

    _putLog(type, args) {
        if (this._getLogLevel(type) > this.level) {
            return
        }

        const log = {name: this.name, at: new Date(), root: this.root, type, args, stack: st.getSync()}
        switch (this.state) {
            case 'standalone': {
                putConsole(log, this.isVerboseLevel)
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

module.exports = Logger
