import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Vuex from "vuex";
import store from './stores/index';

loadFonts()

let app = createApp(App)

app
  .use(router)
  .use(vuetify)
  //.use(Vuex)
  .use(store)

app.mount('#app')

app.config.globalProperties.$store = store