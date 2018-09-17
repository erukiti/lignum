"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const st = require("stacktrace-js");
const utils_1 = require("./utils");
class Logger {
    constructor(name, root, lignumRoot, loggers) {
        this.loggers = loggers;
        this.name = name;
        this.root = root;
        this.lignumRoot = lignumRoot;
    }
    _putLog(type, args) {
        const log = {
            name: this.name,
            at: new Date(),
            root: this.root,
            type,
            args,
            stack: utils_1.normalizeTraces(st.getSync(), this.lignumRoot)
        };
        this.loggers.forEach(logger => logger.output(log));
    }
    info(...args) {
        this._putLog('info', args);
    }
    log(...args) {
        this._putLog('verbose', args);
    }
    verbose(...args) {
        this._putLog('verbose', args);
    }
    debug(...args) {
        this._putLog('debug', args);
    }
    error(...args) {
        this._putLog('error', args);
    }
    warn(...args) {
        this._putLog('warn', args);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9DQUFtQztBQUduQyxtQ0FBeUM7QUFFekMsTUFBYSxNQUFNO0lBTWpCLFlBQVksSUFBWSxFQUFFLElBQVksRUFBRSxVQUFrQixFQUFFLE9BQXVCO1FBQ2pGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO0lBQzlCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUk7UUFDaEIsTUFBTSxHQUFHLEdBQVE7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJO1lBQ0osSUFBSTtZQUNKLEtBQUssRUFBRSx1QkFBZSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3RELENBQUE7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUNwRCxDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSTtRQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBRyxJQUFJO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUNELE9BQU8sQ0FBQyxHQUFHLElBQUk7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBQ0QsS0FBSyxDQUFDLEdBQUcsSUFBSTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBRyxJQUFJO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFHLElBQUk7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM1QixDQUFDO0NBQ0Y7QUE5Q0Qsd0JBOENDIn0=