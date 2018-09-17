"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
class ConsoleOutputter extends types_1.LogOutputter {
    _output(log) {
        console.log(log.name, log.type, log.args);
    }
}
exports.ConsoleOutputter = ConsoleOutputter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXlEO0FBRXpELE1BQWEsZ0JBQWlCLFNBQVEsb0JBQVk7SUFDaEQsT0FBTyxDQUFDLEdBQVE7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0MsQ0FBQztDQUNGO0FBSkQsNENBSUMifQ==