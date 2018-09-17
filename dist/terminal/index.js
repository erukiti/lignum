"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const put_terminal_1 = require("./put-terminal");
exports.createTerminalOutputter = (write) => {
    return class extends types_1.LogOutputter {
        _output(log) {
            put_terminal_1.putTerminal(log, write);
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVybWluYWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBMEQ7QUFDMUQsaURBQTRDO0FBRS9CLFFBQUEsdUJBQXVCLEdBQUcsQ0FBQyxLQUEwQixFQUFFLEVBQUU7SUFDcEUsT0FBTyxLQUFNLFNBQVEsb0JBQVk7UUFDL0IsT0FBTyxDQUFDLEdBQVE7WUFDZCwwQkFBVyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUN6QixDQUFDO0tBQ0YsQ0FBQTtBQUNILENBQUMsQ0FBQSJ9