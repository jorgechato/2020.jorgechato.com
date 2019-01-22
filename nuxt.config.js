const pkg = require('./package');
const buildConfig = require('./config/build');

module.exports = {
  srcDir: './src',

  /*
  ** Build configuration
  */
  build: buildConfig,

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    {src: "~assets/styles/base.scss", lang: 'scss'}
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~plugins/strings.js",
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-XXXXX-X',
    }],
    ['nuxt-fontawesome', {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faHeart',
              'faCheck',
            ]
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: [
              'faCheckSquare',
              'faSquare',
            ]
          },
          {
            set: '@fortawesome/fontawesome-free-brands',
            icons: [
              'faYoutube',
              'faSpotify',
              'faItunes',
              'faInstagram',
            ]
          }
        ]
      }],
  ],
}
