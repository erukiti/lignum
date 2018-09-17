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
            this._types = {};
            def.split(',').forEach(type => (this._types[type] = true));
        }
    }
    output(log) {
        if (this._types[log.type]) {
            this._output(log);
        }
    }
}
exports.LogOutputter = LogOutputter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFnQkEsTUFBc0IsWUFBWTtJQVNoQyxZQUFZLE1BQW9CLEVBQUU7UUFSM0IsV0FBTSxHQUFpQztZQUM1QyxJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxLQUFLO1lBQ2QsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsSUFBSTtZQUNYLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQTtRQUdDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUE7UUFDbkIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksR0FBRyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1lBQ2hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUE7U0FDM0Q7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVE7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2xCO0lBQ0gsQ0FBQztDQUdGO0FBeEJELG9DQXdCQyJ9