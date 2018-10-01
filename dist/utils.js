"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const st = require("stacktrace-js");
exports.normalizeTraces = (traces, lignumPath) => {
    return traces
        .map(trace => {
        const fileName = trace.fileName.replace(/^webpack:[\/\\]+/, path.sep).replace(/\?$/, '');
        return Object.assign({}, trace, { fileName });
    })
        .filter(trace => !lignumPath || trace.fileName.substr(0, lignumPath.length) !== lignumPath);
};
exports.getLignumPath = () => {
    const lignumPath = path.dirname(require.resolve('../package.json'));
    if (!path.isAbsolute(lignumPath)) {
        return path.dirname(exports.normalizeTraces(st.getSync())[0].fileName);
    }
    else {
        return lignumPath;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNEI7QUFDNUIsb0NBQW1DO0FBRXRCLFFBQUEsZUFBZSxHQUFHLENBQUMsTUFBdUIsRUFBRSxVQUFtQixFQUFFLEVBQUU7SUFDOUUsT0FBTyxNQUFNO1NBQ1YsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ1gsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDeEYseUJBQVksS0FBSyxJQUFFLFFBQVEsSUFBRTtJQUMvQixDQUFDLENBQUM7U0FDRCxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFBO0FBQy9GLENBQUMsQ0FBQTtBQUVZLFFBQUEsYUFBYSxHQUFHLEdBQUcsRUFBRTtJQUNoQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO0lBRW5FLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBZSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0tBQy9EO1NBQU07UUFDTCxPQUFPLFVBQVUsQ0FBQTtLQUNsQjtBQUNILENBQUMsQ0FBQSJ9