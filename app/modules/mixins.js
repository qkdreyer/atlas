import Vue from 'vue';
import * as Settings from 'tns-core-modules/application-settings';

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
