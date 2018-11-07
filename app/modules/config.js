import Vue from 'vue';
import VueDevtools from 'nativescript-vue-devtools';

Vue.config.silent = global.TNS_ENV === 'production';

if (!Vue.config.silent) {
  Vue.use(VueDevtools, {
    host: '10.34.1.12'
  });
}
