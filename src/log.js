class Log {
    constructor(name, root, type, args, stack) {
        this.name = name
        this.root = root
        this.type = type
        this.at = new Date()
        this.args = args
        this.stack = stack

        this.source = ''
        let i = 0
        while (i < stack.length) {
            const {fileName, lineNumber, columnNumber} = stack[i]
            if (fileName.indexOf(root) === 0) {
                const relative = fileName.substr(root.length + 1)
                if (relative.indexOf('node_modules/') !== 0) {
                    this.source = [relative, lineNumber, columnNumber, ' '].join(':')
                    break
                }
            }
            i++
        }


    }
}

module.exports = Log
