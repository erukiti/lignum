import { Log, LogOutputOpt } from '../types';
export declare const anyToString: (obj: any) => any;
export declare const createTerminalOutputter: (write: (s: string) => void) => {
    new (opt?: LogOutputOpt): {
        _output(log: Log): void;
        _types: {
            info: boolean;
            verbose: boolean;
            debug: boolean;
            error: boolean;
            warn: boolean;
        };
        output(log: Log): void;
    };
};
