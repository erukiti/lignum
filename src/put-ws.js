const WebSocket = require('ws')


const createPutWs = (url) => {
    let logs = []
    let putFunc = log => logs.push(log)

    const ws = new WebSocket(ws, {handshakeTimeout: 2000})
    ws.on('open', () => {
        putFunc = log => this.ws.send(JSON.stringify(log))
        logs.forEach(log => putFunc(log))
        logs = []
    })
    ws.on('error', err => {
        console.error(err)
        putFunc = log => console.log(logs)
        logs.forEach(log => putFunc(log))
        logs = []
    })

    const put = log => {
        putFunc(log)
    }

    return put
}
