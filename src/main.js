import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify';
import Http from './plugins/http'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

var toastrConfigs = {
  position: 'bottom right',
  showDuration: 2000,
  timeOut: 3000,
  progressBar: true
}
Vue.use(CxltToastr, toastrConfigs);
Vue.config.productionTip = false;
Vue.prototype.$http = Http
Vue.prototype.$http.interceptors.request.use(config => {
  const token = store.state.token;
  if (token) {
    config.headers.Authorization = `JWT ${token}`
  }
  return config
}, err => {
  return Promise.reject(err)
});
Vue.prototype.$http.interceptors.response.use(response => {
  return response
}, err => {
  if (err.response.status) {
    localStorage.clear();
    store.state.token = null
    store.state.user = null
    router.push({name: 'index'})
  } else {
    return err
  }
});
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
