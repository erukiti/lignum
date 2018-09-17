import * as path from 'path'

const isNode = typeof process === 'object' && typeof process.versions === 'object' && !!process.versions.node

const getCaller = (traces, lignumPath) => {
  return traces.find(trace => trace.fileName.substr(0, lignumPath.length) !== lignumPath)
}

export const getPackageJson = dirname => {
  const paths = path.resolve(dirname).split(path.sep)
  while (paths.length > 0) {
    try {
      const fileName = path.join('/', ...paths, 'package.json')
      const packageInfo = eval('require(fileName)')
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
    root: dirname,
    name: null,
    packageInfo: {}
  }
}

export const getCallerRoot = (traces, lignumPath) => {
  const trace = getCaller(traces, lignumPath)
  if (isNode) {
    return getPackageJson(path.dirname(trace.fileName))
  } else {
    return {
      root: path.dirname(trace.fileName),
      name: null,
      packageInfo: {
        name: null
      }
    }
  }
}
