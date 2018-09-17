import * as path from 'path'

const isNode = typeof process === 'object' && typeof process.versions === 'object' && !!process.versions.node

const getCaller = (dirname, traces) => {
  return traces.find(trace => path.dirname(trace.fileName) !== dirname)
}

export const getPackageJson = (dirname, fs) => {
  const paths = path.resolve(dirname).split(path.sep)
  while (paths.length > 0) {
    try {
      const fileName = path.join('/', ...paths, 'package.json')
      const packageInfo = JSON.parse(fs.readFileSync(fileName).toString())
      return {
        root: path.dirname(fileName),
        name: packageInfo.name,
        packageInfo
      }
    } catch (e) {
      paths.pop()
    }
  }
  return {
    root: null,
    name: null,
    packageInfo: {}
  }
}

export const getCallerRoot = (traces, dirname) => {
  const fs = isNode ? eval("require('fs')") : { readFileSyc: (s: string) => '{}' }
  const trace = getCaller(dirname, traces)
  return getPackageJson(path.dirname(trace.fileName), fs)
}
