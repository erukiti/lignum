import { LogOutputter } from './types';
export declare class Logger {
    name: string;
    root: string;
    loggers: LogOutputter[];
    constructor(name: string, root: string, loggers: LogOutputter[]);
    _putLog(type: any, args: any): void;
    info(...args: any[]): void;
    log(...args: any[]): void;
    verbose(...args: any[]): void;
    debug(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
}
