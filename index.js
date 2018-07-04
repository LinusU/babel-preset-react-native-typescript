const upstream = require('babel-preset-react-native')

const flow = require('@babel/plugin-transform-flow-strip-types')
const typescript = require('@babel/plugin-transform-typescript')

function patch (result) {
  const plugins = result.plugins.map((plugin) => {
    const mod = Array.isArray(plugin) ? plugin[0] : plugin

    return (mod === flow ? [typescript] : plugin)
  })

  return Object.assign(result, { plugins })
}

module.exports = (...args) => {
  return patch(upstream(...args))
}

module.exports.getPreset = (...args) => {
  return patch(upstream.getPreset(...args))
}
