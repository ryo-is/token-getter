import Vue from "vue"
import vuetify from "./plugins/vuetify"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./registerServiceWorker"

import Amplify from "aws-amplify"
import awsExports from "./aws_exports"
Amplify.configure(awsExports)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h: any): any => h(App)
}).$mount("#app")
