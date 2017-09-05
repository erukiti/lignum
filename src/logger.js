const st = require('stacktrace-js')

const putConsole = require('./put-console')
const createPutWs = require('./put-ws')
const Log = require('./log')

const reWsurl = /^ws:\/\/([^:]+):([a-z]+)/

class Logger {
    constructor(opts) {
        this.name = opts.name
        this.root = opts.root
        this.putFunc = []
        this.isNode = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string'

        const url = process.env.LIGNUM_WS || opts.ws
        if (url) {
            const matched = reWsurl.exec(url)
            if (matched) {
                cosnole.log(matched)
                this.putFunc.push(createPutWs(url))
            } else {
                console.error('WebSocket URL is wrong')
            }
        }

        if (!this.isNode) {
            this.putFunc.push(log => {
                console.log(log.name, log.type, log.args)
            })
        } else {
            this._findRoot()
            if (process.env.LIGNUM_FILE) {
                const fs = require('fs')
                this.putFunc.push(log => {
                    putConsole(log, msg => {
                        fs.appendFileSync(process.env.LIGNUM_FILE, msg)
                    })
                })
            } else {
                // FIXME: もっと細かく制御
                this.putFunc.push(log => putConsole(log))
            }
        }

        this.setLevel(opts.level || 'info')
    }

    _findRoot() {
        const traces = st.getSync()
        const path = require('path')
        const fs = require('fs')
        let i = 0

        while (path.dirname(traces[i].fileName) === __dirname) {
            i++
        }
        const paths = path.dirname(traces[i].fileName).split('/').filter(s => s !== '')
        // FIXME: global の時にこまりそう
        while (paths.indexOf('node_modules') !== -1) {
            paths.pop()
        }

        while (paths.length > 0) {
            try {
                const fn = path.join('/', ...paths, 'package.json')
                // console.log(fn)
                const {name} = JSON.parse(fs.readFileSync(fn).toString())
                this.name = name
                this.root = path.dirname(fn)
                // console.log(name, this.root)
                break
            } catch (e) {
                paths.pop()
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

    put(type, ...args) {
        if (this._getLogLevel(type) > this.level) {
            return
        }

        const log = new Log(this.name, this.root, type, args, st.getSync())
        this.putFunc.forEach(putFunc => putFunc(log))
    }

    info(...args) {
        this.put('info', ...args)
    }

    log(...args) {
        this.put('log', ...args)
    }
    verbose(...args) {
        this.put('log', ...args)
    }
    debug(...args) {
        this.put('debug', ...args)
    }

    error(...args) {
        this.put('error', ...args)
    }

    warn(...args) {
        this.put('warn', ...args)
    }
}

module.exports = Logger
