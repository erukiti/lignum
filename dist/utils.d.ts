import * as st from 'stacktrace-js';
export declare const normalizeTraces: (traces: st.StackFrame[], lignumPath?: string) => {
    fileName: string;
    constructor(functionName: string, args: any, fileName: string, lineNumber: number, columnNumber: number): st.StackFrame;
    functionName: string;
    args: any;
    lineNumber: number;
    columnNumber: number;
    source: string;
    isEval: boolean;
    isNative: boolean;
    toString(): string;
}[];
export declare const getLignumPath: () => string;
