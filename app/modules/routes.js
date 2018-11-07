import Vue from 'vue';
import LoginView from '@/views/auth/login-view';
import Tabs from '@/views/layout/tabs';
import HomeTabView from '@/views/home/home-tab-view';
import SettingsTabView from '@/views/settings/settings-tab-view';

Vue.set(Vue.prototype, '$routes', {
  Tabs,
  LoginView,
  HomeTabView,
  SettingsTabView,
});
