import * as st from 'stacktrace-js';
export interface Log {
    name: string;
    at: Date;
    root: string;
    type: string;
    args: any;
    stack: st.StackFrame[];
}
export interface LogOutputOpt {
    def?: string;
    [props: string]: any;
}
export declare abstract class LogOutputter {
    _types: {
        [props: string]: boolean;
    };
    constructor(opt?: LogOutputOpt);
    output(log: Log): void;
    protected abstract _output(log: Log): void;
}
