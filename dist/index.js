"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const st = require("stacktrace-js");
const logger_1 = require("./logger");
const get_caller_1 = require("./get-caller");
const terminal_1 = require("./output/terminal");
const utils_1 = require("./utils");
const loggers = {};
const logOutputters = {};
logOutputters.StdoutOutputter = terminal_1.createTerminalOutputter((s) => process.stdout.write(s));
if (process.env.LIGNUM_FILE && process.env.LIGNUM_FILE !== '') {
    logOutputters.FileOutputter = terminal_1.createTerminalOutputter((s) => fs.appendFileSync(process.env.LIGNUM_FILE, s));
}
const lignumPath = utils_1.getLignumPath();
exports.getLogger = (opts = { name: null, root: null }) => {
    const traces = utils_1.normalizeTraces(st.getSync());
    const callerRoot = get_caller_1.getCallerRoot(traces, lignumPath);
    const name = opts.name || callerRoot.name || 'app';
    const root = opts.root || callerRoot.root;
    if (root in loggers) {
        return loggers[root];
    }
    const outputters = Object.keys(logOutputters).map(key => {
        const outputter = logOutputters[key];
        const envName = `LIGNUM_${key.replace('Outputter', '').toUpperCase()}`;
        const def = process.env[envName];
        return new outputter({ def });
    });
    loggers[root] = new logger_1.Logger(name, root, lignumPath, outputters);
    return loggers[root];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBd0I7QUFFeEIsb0NBQW1DO0FBRW5DLHFDQUFpQztBQUNqQyw2Q0FBNEM7QUFDNUMsZ0RBQTJEO0FBQzNELG1DQUF3RDtBQUV4RCxNQUFNLE9BQU8sR0FBZ0MsRUFBRSxDQUFBO0FBQy9DLE1BQU0sYUFBYSxHQUFRLEVBQUUsQ0FBQTtBQUU3QixhQUFhLENBQUMsZUFBZSxHQUFHLGtDQUF1QixDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBRS9GLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEtBQUssRUFBRSxFQUFFO0lBQzdELGFBQWEsQ0FBQyxhQUFhLEdBQUcsa0NBQXVCLENBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtDQUNwSDtBQUVELE1BQU0sVUFBVSxHQUFHLHFCQUFhLEVBQUUsQ0FBQTtBQUNyQixRQUFBLFNBQVMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7SUFDN0QsTUFBTSxNQUFNLEdBQUcsdUJBQWUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUM1QyxNQUFNLFVBQVUsR0FBRywwQkFBYSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUNwRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFBO0lBQ2xELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQTtJQUV6QyxJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7UUFDbkIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDckI7SUFFRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0RCxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEMsTUFBTSxPQUFPLEdBQUcsVUFBVSxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFBO1FBQ3RFLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFaEMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7SUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDOUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDdEIsQ0FBQyxDQUFBIn0=