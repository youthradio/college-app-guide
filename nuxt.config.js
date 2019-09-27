import dotenv from 'dotenv'
import SOCIALDATA from './social.config'
dotenv.config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  router: {
    base: SOCIALDATA.baseURL
  },
  head: {
    title: SOCIALDATA.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: SOCIALDATA.description },
      { property: 'og:title', content: SOCIALDATA.title },
      { property: 'og:site_name', content: SOCIALDATA.title },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: SOCIALDATA.url },
      { property: 'og:image', content: SOCIALDATA.featureImage },
      { property: 'og:description', content: SOCIALDATA.description },
      { property: 'og:image:alt', content: SOCIALDATA.description },
      { property: 'fb:app_id', content: SOCIALDATA.fbAppID },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: SOCIALDATA.twitterHandler },
      { name: 'twitter:site', content: SOCIALDATA.twitterHandler },
      { name: 'twitter:title', content: SOCIALDATA.title },
      { name: 'twitter:description', content: SOCIALDATA.description },
      { name: 'twitter:image', content: SOCIALDATA.featureImage },
      { name: 'twitter:image:alt', content: SOCIALDATA.description },
      { itemprop: 'description', conten: SOCIALDATA.description },
      { itemprop: 'image', conten: SOCIALDATA.featureImage }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://yr.media/statics/yr-media-typography/yr-typography.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~plugins/vue-observable.js',
      ssr: false
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '~/modules/getdata',
    '@nuxtjs/google-gtag'
  ],
  'google-gtag': {
    id: 'UA-6029148-3',
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false // might be necessary to avoid duplicated page track on page reload
    },
    debug: false, // enable to track in dev mode
    disableAutoPageTrack: false // disable if you don't want to track each page route with router.afterEach(...).
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
  // server: {
  //   https: {
  //     key: readFileSync(`${process.env.SSLKEY}`),
  //     cert: readFileSync(`${process.env.SSLCRT}`)
  //   }
  // }
}
