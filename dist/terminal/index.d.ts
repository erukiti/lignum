import { Log, LogOutputOpt } from '../types';
export declare const createTerminalOutputter: (write: (s: string) => void) => {
    new (opt?: LogOutputOpt): {
        _output(log: Log): void;
        _types: {
            [props: string]: boolean;
        };
        output(log: Log): void;
    };
};
