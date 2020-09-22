import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios' /*啟用axios */
import VueAxios from 'vue-axios' /*啟用axios */

import 'bootstrap' 

/*地圖相關*/
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from "vue2-leaflet";
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component("l-popup", LPopup);
Vue.component("l-icon", LIcon);

// 設定預設 icon
import { Icon } from "leaflet";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

//MarkerCluster相關
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

Vue.component('v-marker-cluster', Vue2LeafletMarkerCluster)


Vue.use(VueAxios, axios) /*啟用axios */


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
