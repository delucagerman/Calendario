import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLb1dloiFeAItdWEUfDk_PLcMhg2BGefw",
  authDomain: "vue-calendario-71371.firebaseapp.com",
  databaseURL: "https://vue-calendario-71371.firebaseio.com",
  projectId: "vue-calendario-71371",
  storageBucket: "vue-calendario-71371.appspot.com",
  messagingSenderId: "326020880079",
  appId: "1:326020880079:web:b822d21108ba956ad809ba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
