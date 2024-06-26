import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/global.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueHighlightJS from "vue3-highlightjs";
import "highlight.js/styles/atom-one-dark.css";


// Add the icons to the library
library.add(faCheck, faTimes)
const app = createApp(App);
app.use(VueHighlightJS);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount("#app");
