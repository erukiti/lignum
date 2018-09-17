"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
exports.normalizeTraces = (traces, lignumPath) => {
    return traces
        .map(trace => {
        const fileName = trace.fileName.replace(/^webpack:[\/\\]+/, path.sep).replace(/\?$/, '');
        return Object.assign({}, trace, { fileName });
    })
        .filter(trace => !lignumPath || trace.fileName.substr(0, lignumPath.length) !== lignumPath);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNEI7QUFHZixRQUFBLGVBQWUsR0FBRyxDQUFDLE1BQXlCLEVBQUUsVUFBbUIsRUFBRSxFQUFFO0lBQ2hGLE9BQU8sTUFBTTtTQUNWLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNYLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3hGLHlCQUFZLEtBQUssSUFBRSxRQUFRLElBQUU7SUFDL0IsQ0FBQyxDQUFDO1NBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQTtBQUMvRixDQUFDLENBQUEifQ==