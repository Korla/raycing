import Vue from 'vue';
import view from './vues/services/view.js';
import VueRouter from 'vue-router';
import svgMenu from './vues/svgMenu.vue'
import attachFastClick from 'fastclick';

Vue.config.debug = true;
Vue.use(VueRouter);

window.addEventListener('load', () => {
  attachFastClick.attach(document.body);
}, false);

var App = Vue.extend({
  data: () => {
    return {
      svgMenu: {
        menu: 'medium',
        smallButtons: false,
        showTitle: false
      }
    }
  },
  components: {
    svgMenu
  }
});

var router = new VueRouter();

router.map({
  '/': { component: require('./vues/main.vue') },
  '/free': { component: require('./vues/free.vue') },
  '/puzzle': { component: require('./vues/free.vue') },
  '/editor/key/:key': { component: require('./vues/editor.vue') },
  '/editor/size/:size': { component: require('./vues/editor.vue') },
  '/play/:key/:playerCount': { component: require('./vues/play.vue') },
  '/settings': { component: require('./vues/settings.vue') },
});

router.start(App, 'body');
