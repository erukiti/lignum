"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const st = require("stacktrace-js");
const console_1 = require("./output/console");
const logger_1 = require("./logger");
const get_caller_1 = require("./get-caller");
const utils_1 = require("./utils");
const isProduction = process.env.NODE_ENV === 'production';
const lignumPath = utils_1.getLignumPath();
// export let getLogger
const loggers = {};
// if (isProduction) {
exports.getLogger = (opts = { name: 'app', root: null }) => {
    const traces = utils_1.normalizeTraces(st.getSync());
    const callerRoot = get_caller_1.getCallerRoot(traces, lignumPath);
    const name = opts.name || callerRoot.name;
    const root = opts.root || callerRoot.root;
    if (root in loggers) {
        return loggers[root];
    }
    const logOutputters = { ConsoleOutputter: console_1.ConsoleOutputter };
    const outputters = Object.keys(logOutputters).map(key => {
        const outputter = logOutputters[key];
        const envName = `LIGNUM_${key.replace('Outputter', '').toUpperCase()}`;
        const def = process.env[envName];
        return new outputter({ def });
    });
    loggers[root] = new logger_1.Logger(name, root, lignumPath, outputters);
    return loggers[root];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQW1DO0FBRW5DLDhDQUFtRDtBQUNuRCxxQ0FBaUM7QUFDakMsNkNBQTRDO0FBRTVDLG1DQUF3RDtBQUV4RCxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUE7QUFDMUQsTUFBTSxVQUFVLEdBQUcscUJBQWEsRUFBRSxDQUFBO0FBRWxDLHVCQUF1QjtBQUN2QixNQUFNLE9BQU8sR0FBZ0MsRUFBRSxDQUFBO0FBRy9DLHNCQUFzQjtBQUNULFFBQUEsU0FBUyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFDLEVBQUcsRUFBRTtJQUMvRCxNQUFNLE1BQU0sR0FBRyx1QkFBZSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQzVDLE1BQU0sVUFBVSxHQUFHLDBCQUFhLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ3BELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQTtJQUN6QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUE7SUFFekMsSUFBSSxJQUFJLElBQUksT0FBTyxFQUFFO1FBQ25CLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ3JCO0lBRUQsTUFBTSxhQUFhLEdBQUcsRUFBRSxnQkFBZ0IsRUFBaEIsMEJBQWdCLEVBQUUsQ0FBQTtJQUUxQyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0RCxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEMsTUFBTSxPQUFPLEdBQUcsVUFBVSxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFBO1FBQ3RFLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFaEMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7SUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDOUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDdEIsQ0FBQyxDQUFBIn0=