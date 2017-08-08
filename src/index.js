const Logger = require('./logger')

let isDisabled = false

const loggers = {}
const getLogger = (name, opts = {}) => {
    if (!loggers[name]) {
        loggers[name] = new Logger({name, isDisabled})
        loggers[name].log('Logging start')
    }
    return loggers[name]
}

const setDisable = () => isDisabled = true

module.exports = {getLogger, setDisable}

