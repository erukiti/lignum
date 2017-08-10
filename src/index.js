const Logger = require('./logger')

let logger = null

const getLogger = (opts = {}) => {
    if (!logger) {
        logger = new Logger(opts)
        logger.verbose('logging start')
    }
    return logger
}

module.exports = {getLogger}
