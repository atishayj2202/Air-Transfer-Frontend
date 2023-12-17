import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAzwCjZ1VUy_T6OInrwAZiVBBRRmCN0NHs",
  authDomain: "airtransfer-395716.firebaseapp.com",
  projectId: "airtransfer-395716",
  storageBucket: "airtransfer-395716.appspot.com",
  messagingSenderId: "802386757908",
  appId: "1:802386757908:web:d56007160db49e54651a01",
  measurementId: "G-BZ9LL2XVGH",
};

initializeApp(firebaseConfig);
createApp(App).use(router).mount("#app");
