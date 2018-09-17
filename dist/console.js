"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
class ConsoleOutputter extends types_1.LogOutputter {
    _output(log) {
        const getLocation = trace => `${trace.fileName}:${trace.lineNumber}:${trace.columnNumber}`;
        console.log(log.type, ...log.args, getLocation(log.stack[0]));
        // console.log('stack trace\n', ...log.stack.map(trace => getLocation(trace) + '\n'))
    }
}
exports.ConsoleOutputter = ConsoleOutputter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXlEO0FBRXpELE1BQWEsZ0JBQWlCLFNBQVEsb0JBQVk7SUFDaEQsT0FBTyxDQUFDLEdBQVE7UUFDZCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUMxRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUM3RCxxRkFBcUY7SUFDdkYsQ0FBQztDQUNGO0FBTkQsNENBTUMifQ==