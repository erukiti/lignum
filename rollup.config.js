const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

const nodeBuiltInModules = ['assert', 'buffer', 'child_process', 'cluster',
  'console', 'constants', 'crypto', 'dgram', 'dns', 'domain', 'events',
  'fs', 'http', 'https', 'module', 'net', 'os', 'path', 'process', 'punycode',
  'querystring', 'readline', 'repl', 'stream', 'string_decoder', 'timers',
  'tls', 'tty', 'url', 'util', 'v8', 'vm', 'zlib']

const {dependencies, devDependencies} = require('./package.json')

const external = nodeBuiltInModules.concat(
    Object.keys(dependencies || {}), 
    Object.keys(devDependencies || {})
)

module.exports = {
    entry: 'src/index.js',
    dest: 'dist/bundle.js',
    sourceMap: 'inline',
    format: 'cjs',
    external,
    plugins: [
        commonjs(),
        resolve({jsnext: true, main: true}),
    ]
}
