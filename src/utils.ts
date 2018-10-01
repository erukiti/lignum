import * as path from 'path'
import * as st from 'stacktrace-js'

export const normalizeTraces = (traces: st.StackFrame[], lignumPath?: string) => {
  return traces
    .map(trace => {
      const fileName = trace.fileName.replace(/^webpack:[\/\\]+/, path.sep).replace(/\?$/, '')
      return { ...trace, fileName }
    })
    .filter(trace => !lignumPath || trace.fileName.substr(0, lignumPath.length) !== lignumPath)
}

export const getLignumPath = () => {
  const lignumPath = path.dirname(require.resolve('../package.json'))

  if (!path.isAbsolute(lignumPath)) {
    return path.dirname(normalizeTraces(st.getSync())[0].fileName)
  } else {
    return lignumPath
  }
}
