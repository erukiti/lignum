"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const st = require("stacktrace-js");
const logger_1 = require("./logger");
const get_caller_1 = require("./get-caller");
const console_1 = require("./console");
const terminal_1 = require("./terminal");
const loggers = {};
const logOutputters = {};
if (process && process.stdout && process.stdout.write) {
    logOutputters.StdoutOutputter = terminal_1.createTerminalOutputter((s) => process.stdout.write(s));
}
else {
    logOutputters.ConsoleOutputter = console_1.ConsoleOutputter;
}
if (process.env.LIGNUM_FILE && process.env.LIGNUM_FILE !== '') {
    const fs = eval("require('fs')");
    logOutputters.FileOutputter = terminal_1.createTerminalOutputter((s) => fs.appendFileSync(process.env.LIGNUM_FILE, s));
}
exports.getLogger = (opts = { name: null, root: null }) => {
    const traces = st.getSync();
    const callerRoot = get_caller_1.getCallerRoot(traces, __dirname);
    const name = opts.name || callerRoot.name;
    const root = opts.root || callerRoot.root;
    if (root in loggers) {
        return loggers[root];
    }
    const outputters = Object.keys(logOutputters).map(key => {
        const outputter = logOutputters[key];
        const def = process.env[`LIGNUM_${key.replace('Outputter', '').toUpperCase()}`];
        return new outputter({ def });
    });
    loggers[root] = new logger_1.Logger(name, root, outputters);
    return loggers[root];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBbUM7QUFFbkMscUNBQWlDO0FBQ2pDLDZDQUE0QztBQUM1Qyx1Q0FBNEM7QUFDNUMseUNBQW9EO0FBRXBELE1BQU0sT0FBTyxHQUFnQyxFQUFFLENBQUE7QUFDL0MsTUFBTSxhQUFhLEdBQVEsRUFBRSxDQUFBO0FBRTdCLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDckQsYUFBYSxDQUFDLGVBQWUsR0FBRyxrQ0FBdUIsQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtDQUNoRztLQUFNO0lBQ0wsYUFBYSxDQUFDLGdCQUFnQixHQUFHLDBCQUFnQixDQUFBO0NBQ2xEO0FBRUQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsS0FBSyxFQUFFLEVBQUU7SUFDN0QsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQ2hDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsa0NBQXVCLENBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtDQUNwSDtBQUVZLFFBQUEsU0FBUyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtJQUM3RCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDM0IsTUFBTSxVQUFVLEdBQUcsMEJBQWEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDbkQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFBO0lBQ3pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQTtJQUV6QyxJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7UUFDbkIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDckI7SUFFRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0RCxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUUvRSxPQUFPLElBQUksU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTtJQUMvQixDQUFDLENBQUMsQ0FBQTtJQUVGLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ2xELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3RCLENBQUMsQ0FBQSJ9