import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueGtag from "vue-gtag";

import "@/assets/css/tailwind.css";

import {
  faRedditAlien,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import { faLink } from "@fortawesome/free-solid-svg-icons";

import { faEnvelope, faCopyright } from "@fortawesome/free-regular-svg-icons";

library.add(
  faRedditAlien,
  faTwitter,
  faInstagram,
  faLink,
  faEnvelope,
  faCopyright
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(
  VueGtag,
  {
    config: { id: "UA-140024933-2" }
  },
  router
);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
