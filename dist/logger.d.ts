import { LogOutputter } from './types';
export declare class Logger {
    name: string;
    root: string;
    lignumRoot: string;
    logOutputters: LogOutputter[];
    constructor(name: string, root: string, lignumRoot: string, logOutputters: LogOutputter[]);
    _putLog(type: string, args: any): void;
    info(...args: any[]): void;
    success(...args: any[]): void;
    start(...args: any[]): void;
    log(...args: any[]): void;
    verbose(...args: any[]): void;
    debug(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
}
