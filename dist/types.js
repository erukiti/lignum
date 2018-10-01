"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogOutputter {
    constructor(opt = {}) {
        this._types = {
            info: true,
            verbose: false,
            debug: false,
            error: true,
            warn: true
        };
        const def = opt.def;
        if (typeof def === 'string' && def) {
            this._types = { info: false, verbose: false, debug: false, error: false, warn: false };
            def.split(',').forEach(type => (this._types[type] = true));
        }
    }
    output(log) {
        const type = log.type.split('.')[0];
        if (this._types[type]) {
            this._output(log);
        }
    }
}
exports.LogOutputter = LogOutputter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUF3QkEsTUFBc0IsWUFBWTtJQVNoQyxZQUFZLE1BQW9CLEVBQUU7UUFSM0IsV0FBTSxHQUFvQjtZQUMvQixJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxLQUFLO1lBQ2QsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsSUFBSTtZQUNYLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQTtRQUdDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUE7UUFDbkIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksR0FBRyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQTtZQUN0RixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFBO1NBQzNEO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFRO1FBQ3BCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25DLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2xCO0lBQ0gsQ0FBQztDQUdGO0FBekJELG9DQXlCQyJ9