"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
class ConsoleOutputter extends types_1.LogOutputter {
    _output(log) {
        const getLocation = trace => `${trace.fileName}:${trace.lineNumber}:${trace.columnNumber}`;
        console.log(log.type, ...log.args, getLocation(log.stack[0]));
        // console.log('stack trace\n', ...log.stack.map(trace => getLocation(trace) + '\n'))
    }
}
exports.ConsoleOutputter = ConsoleOutputter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vdXRwdXQvY29uc29sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9DQUEwRDtBQUUxRCxNQUFhLGdCQUFpQixTQUFRLG9CQUFZO0lBQ2hELE9BQU8sQ0FBQyxHQUFRO1FBQ2QsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDN0QscUZBQXFGO0lBQ3ZGLENBQUM7Q0FDRjtBQU5ELDRDQU1DIn0=