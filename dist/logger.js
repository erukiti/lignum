"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const st = require("stacktrace-js");
const utils_1 = require("./utils");
class Logger {
    constructor(name, root, lignumRoot, logOutputters) {
        this.logOutputters = logOutputters;
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
        this.logOutputters.forEach(logger => logger.output(log));
    }
    info(...args) {
        this._putLog('info', args);
    }
    success(...args) {
        this._putLog('info', args);
    }
    start(...args) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9DQUFtQztBQUduQyxtQ0FBeUM7QUFFekMsTUFBYSxNQUFNO0lBTWpCLFlBQVksSUFBWSxFQUFFLElBQVksRUFBRSxVQUFrQixFQUFFLGFBQTZCO1FBQ3ZGLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO0lBQzlCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBWSxFQUFFLElBQUk7UUFDeEIsTUFBTSxHQUFHLEdBQVE7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJO1lBQ0osSUFBSTtZQUNKLEtBQUssRUFBRSx1QkFBZSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3RELENBQUE7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSTtRQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBRyxJQUFJO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFHLElBQUk7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQUcsSUFBSTtRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBRyxJQUFJO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUNELEtBQUssQ0FBQyxHQUFHLElBQUk7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQUcsSUFBSTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDNUIsQ0FBQztDQUNGO0FBdkRELHdCQXVEQyJ9