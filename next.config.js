const config = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader'
    })
    return config
  }
}
 
const withYAML = require('next-yaml')
module.exports = withYAML(config)
