const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")
const path = require("path")

require("dotenv").config()

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      },
    ],
    // your other plugins here
  ],
  {
    webpack(config) {
      config.resolve.alias.images = path.join(__dirname, "images")
      return config
    },
  }
)
