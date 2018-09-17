"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const isNode = typeof process === 'object' && typeof process.versions === 'object' && !!process.versions.node;
const getCaller = (traces, lignumPath) => {
    return traces.find(trace => trace.fileName.substr(0, lignumPath.length) !== lignumPath);
};
exports.getPackageJson = dirname => {
    const paths = path.resolve(dirname).split(path.sep);
    while (paths.length > 0) {
        try {
            const fileName = path.join('/', ...paths, 'package.json');
            const packageInfo = eval('require(fileName)');
            return {
                root: path.dirname(fileName),
                name: packageInfo.name,
                packageInfo
            };
        }
        catch (e) {
            paths.pop();
        }
    }
    return {
        root: dirname,
        name: null,
        packageInfo: {}
    };
};
exports.getCallerRoot = (traces, lignumPath) => {
    const trace = getCaller(traces, lignumPath);
    if (isNode) {
        return exports.getPackageJson(path.dirname(trace.fileName));
    }
    else {
        return {
            root: path.dirname(trace.fileName),
            name: null,
            packageInfo: {
                name: null
            }
        };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNhbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXQtY2FsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTRCO0FBRTVCLE1BQU0sTUFBTSxHQUFHLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQTtBQUU3RyxNQUFNLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBRTtJQUN2QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFBO0FBQ3pGLENBQUMsQ0FBQTtBQUVZLFFBQUEsY0FBYyxHQUFHLE9BQU8sQ0FBQyxFQUFFO0lBQ3RDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNuRCxPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZCLElBQUk7WUFDRixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQTtZQUN6RCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtZQUM3QyxPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDNUIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO2dCQUN0QixXQUFXO2FBQ1osQ0FBQTtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUE7U0FDWjtLQUNGO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLElBQUk7UUFDVixXQUFXLEVBQUUsRUFBRTtLQUNoQixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxhQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUU7SUFDbEQsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUMzQyxJQUFJLE1BQU0sRUFBRTtRQUNWLE9BQU8sc0JBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0tBQ3BEO1NBQU07UUFDTCxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNsQyxJQUFJLEVBQUUsSUFBSTtZQUNWLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUUsSUFBSTthQUNYO1NBQ0YsQ0FBQTtLQUNGO0FBQ0gsQ0FBQyxDQUFBIn0=