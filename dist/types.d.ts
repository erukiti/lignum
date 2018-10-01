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
declare type LogTypeEnablers = {
    info: boolean;
    verbose: boolean;
    debug: boolean;
    error: boolean;
    warn: boolean;
};
export declare abstract class LogOutputter {
    _types: LogTypeEnablers;
    constructor(opt?: LogOutputOpt);
    output(log: Log): void;
    protected abstract _output(log: Log): void;
}
export {};
