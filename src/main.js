import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios) //追記


Vue.config.productionTip = false;

new Vue({
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
