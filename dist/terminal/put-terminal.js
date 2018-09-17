"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putTerminal = (log, write) => {
    const isVerboseLevel = true;
    let source = '';
    if (isVerboseLevel) {
        let i = 0;
        while (i < log.stack.length) {
            const { fileName, lineNumber, columnNumber } = log.stack[i];
            if (fileName.indexOf(log.root) === 0) {
                const relative = fileName.substr(log.root.length + 1);
                if (relative.indexOf('node_modules/') !== 0) {
                    source = [relative, lineNumber, columnNumber, ' '].join(':');
                    break;
                }
            }
            i++;
        }
    }
    const message = log.args
        .map(obj => {
        if (obj === undefined) {
            return 'undefined';
        }
        else if (obj === null) {
            return 'null';
        }
        else if (typeof obj === 'object') {
            return JSON.stringify(obj);
        }
        else {
            return obj.toString();
        }
    })
        .join(' ');
    const at = typeof log.at === 'object' ? log.at.toLocaleTimeString() : log.at;
    let startColor = '';
    switch (log.type) {
        case 'info':
            startColor = '\x1b[36m';
            break;
        case 'verbose':
            startColor = '\x1b[32m';
            break;
        case 'debug':
            startColor = '\x1b[35m';
            break;
        case 'warn':
            startColor = '\x1b[33m';
            break;
        case 'error':
            startColor = '\x1b[31m';
            break;
    }
    const length = isVerboseLevel ? 7 : 5;
    const logType = `${log.type}      `.substr(0, length);
    const logName = isVerboseLevel ? `\x1b[m${log.name}.` : '';
    write(`${logName}${startColor}${logType}\x1b[m \x1b[32m[${at}]\x1b[m ${source}${message}\n`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHV0LXRlcm1pbmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlcm1pbmFsL3B1dC10ZXJtaW5hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVhLFFBQUEsV0FBVyxHQUFHLENBQUMsR0FBUSxFQUFFLEtBQTBCLEVBQUUsRUFBRTtJQUNsRSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUE7SUFDM0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBO0lBQ2YsSUFBSSxjQUFjLEVBQUU7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1QsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDM0IsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUMzRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDckQsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDM0MsTUFBTSxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUM1RCxNQUFLO2lCQUNOO2FBQ0Y7WUFDRCxDQUFDLEVBQUUsQ0FBQTtTQUNKO0tBQ0Y7SUFFRCxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSTtTQUNyQixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDVCxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDckIsT0FBTyxXQUFXLENBQUE7U0FDbkI7YUFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDdkIsT0FBTyxNQUFNLENBQUE7U0FDZDthQUFNLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUMzQjthQUFNO1lBQ0wsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUE7U0FDdEI7SUFDSCxDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFFWixNQUFNLEVBQUUsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUE7SUFFNUUsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFBO0lBQ25CLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRTtRQUNoQixLQUFLLE1BQU07WUFDVCxVQUFVLEdBQUcsVUFBVSxDQUFBO1lBQ3ZCLE1BQUs7UUFDUCxLQUFLLFNBQVM7WUFDWixVQUFVLEdBQUcsVUFBVSxDQUFBO1lBQ3ZCLE1BQUs7UUFDUCxLQUFLLE9BQU87WUFDVixVQUFVLEdBQUcsVUFBVSxDQUFBO1lBQ3ZCLE1BQUs7UUFFUCxLQUFLLE1BQU07WUFDVCxVQUFVLEdBQUcsVUFBVSxDQUFBO1lBQ3ZCLE1BQUs7UUFFUCxLQUFLLE9BQU87WUFDVixVQUFVLEdBQUcsVUFBVSxDQUFBO1lBQ3ZCLE1BQUs7S0FDUjtJQUVELE1BQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFckMsTUFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNyRCxNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7SUFFMUQsS0FBSyxDQUFDLEdBQUcsT0FBTyxHQUFHLFVBQVUsR0FBRyxPQUFPLG1CQUFtQixFQUFFLFdBQVcsTUFBTSxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUE7QUFDOUYsQ0FBQyxDQUFBIn0=