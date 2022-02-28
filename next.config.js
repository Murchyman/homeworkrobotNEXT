const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  env: {
    secret: '0f241464-125a-4deb-859d-085ef97e3a33',
    NEXT_PUBLIC_GA_ID: 'G-Y8Q14P4XVM',
    RECAPTCHA_SECRET: '6LfUZZoeAAAAAOeUAJqhjsx5eTZk-vR_4RKBXBaz',
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: '6LfUZZoeAAAAAFbFGgUIG6n4VdcQXJo3SdnUELL0',
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})
