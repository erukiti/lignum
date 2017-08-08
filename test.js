const {getLogger} = require('./src/')


logger = getLogger('test', {ws: true})
logger.log('hoge')

setTimeout(() => {
    logger.log('fuga')
}, 2000)
