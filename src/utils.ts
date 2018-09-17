import * as path from 'path'
import * as st from 'stacktrace-js'

export const normalizeTraces = (traces: typeof st.getSync, lignumPath?: string) => {
  return traces
    .map(trace => {
      const fileName = trace.fileName.replace(/^webpack:[\/\\]+/, path.sep).replace(/\?$/, '')
      return { ...trace, fileName }
    })
    .filter(trace => !lignumPath || trace.fileName.substr(0, lignumPath.length) !== lignumPath)
}
