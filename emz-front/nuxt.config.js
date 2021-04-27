
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Emz',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'The amazing Nuxt application that teaches me all the cool features of Nuxt'
      },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://nuxtjs.org'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'My amazing Nuxt application'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'The amazing Nuxt application that teaches me all the cool features of Nuxt'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://nuxtjs.org/nuxt-card.png'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://nuxtjs.org'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'My amazing Nuxt application'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'The amazing Nuxt application that teaches me all the cool features of Nuxt'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://nuxtjs.org/nuxt-card.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://nuxtjs.org/nuxt-card.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'NuxtJS'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://nuxtjs.org/examples`
      }
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
    { src: '~/plugins/validation.js', mode: 'client' },
    '~/plugins/axios'
   
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/auth-next'
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ],
    postcss: {
      plugins: {
        // Disable `postcss-url`
        'postcss-url': false,
        // Add some plugins
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {}
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    port: 8888 // default: 3000
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  /*
   ** Runtime Config
   */

  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.API_SERVER_URL
    }
  },
  toast: {
    position: 'top-right',
    duration: 3000,
  },
  auth: {
    // Options
    strategies: {
      local: {
        endpoints: {
          login: { url: '/clients/login', method: 'post', propertyName: 'data.token' },
          user: { url: '/clients/profile', method: 'get', propertyName: 'data.user'},
          logout: false
        },
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        }
      },
    },
    
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/user/dashboard'
    }
  }
}
