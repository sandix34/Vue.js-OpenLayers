<template>
<div>
  <div id='map'></div>
    <div style="display: none;">
    <div id="marker" title="Marker"></div>
  </div>
</div>
</template>

<script>

// classes required to display the map
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import BingMaps from 'ol/source/BingMaps'

// An element to be displayed over the map and attached to a single map location
import Overlay from 'ol/Overlay'

import {fromLonLat} from 'ol/proj'

export default {  
  methods: {
    initMap () {

      // Bing Aerial With Labels
      const BingAerialWithLabels = new TileLayer({
        source: new BingMaps({
          key: process.env.VUE_APP_API_KEY_BING_MAPS,
          imagerySet: 'AerialWithLabels'
        })
      })

      // Declare the map
      const map = new Map({ 
        layers: [BingAerialWithLabels],
        target: 'map',
        view: new View({
          center: [0, 0],
          zoom: 2
        })
      })

      // Marker's Statement
      const marker = new Overlay({
        position: fromLonLat([37.352013, -3.065653]),
        positioning: 'center-center',
        element: document.getElementById('marker'),
        stopEvent: false
      });
      // Add to Map object
      map.addOverlay(marker) 
    }
  },
  mounted() {
    this.initMap()
  }
}

</script>

<style scoped>
#map {
  height: 80vh;
  width: 80%;
  margin: auto;
}

#marker {
  width: 20px;
  height: 20px;
  border: 1px solid #088;
  border-radius: 10px;
  background-color: red;
}
</style>