import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';
import {
  isIOS
} from 'tns-core-modules/platform';
import * as Settings from 'tns-core-modules/application-settings';
import {
  PreviousNextView
} from 'nativescript-iqkeyboardmanager';
import {
  MapboxView
} from 'nativescript-mapbox';
import App from './App';

if (isIOS) {
  const iqKeyboard = IQKeyboardManager.sharedManager();
  iqKeyboard.shouldResignOnTouchOutside = true;
}

Vue.config.silent = global.TNS_ENV === 'production';

if (!Vue.config.silent) {
  Vue.use(VueDevtools, {
    host: 'iphone-x-de-quentin.local'
  });
}

Vue.mixin({
  methods: {
    // eslint-disable-next-line no-console
    log: console.log.bind(console),
    get: (key, defaultValue) => {
      const raw = Settings.getString(key, defaultValue);
      return raw !== defaultValue ? JSON.parse(raw) : raw;
    },
    set: (key, value) => Settings.setString(key, JSON.stringify(value)),
    remove: key => Settings.remove(key)
  }
});

Vue.registerElement('PreviousNextView', () => PreviousNextView);
Vue.registerElement('Mapbox', () => MapboxView);

new Vue({
  render: h => h('frame', [h(App)])
}).$start();
