import Vue from 'nativescript-vue';
import App from '@/App';

// const importAll = (ctx) => ctx.keys().forEach(ctx);
// const context = require.context('.', false, /\/(modules|plugins)\/\w+\.js$/);
// importAll(context);

const importAll = (ctx) => ctx.keys().forEach(ctx);
const modules = require.context('@/modules/', false, /\.js$/);
const plugins = require.context('@/plugins/', false, /\.js$/);
importAll(modules);
importAll(plugins);

new Vue({
  render: h => h('frame', [h(App)])
}).$start();
