import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import Bar from  "chart.js";
import vuetify from './plugins/vuetify';
import './plugins';

Vue.config.productionTip = false;

const EventBus = new Vue();
export default EventBus;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
