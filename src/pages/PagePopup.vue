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
import Stamen from 'ol/source/Stamen'

// Provides a source of features for vector layers.
import VectorSource from 'ol/source/Vector'
// Vector data that is rendered client-side.
import VectorLayer from 'ol/layer/Vector'
// Feature format for reading and writing data in the KML format
import KML from 'ol/format/KML';

import {fromLonLat} from 'ol/proj'

export default {  
  methods: {
    initMap () {

      // Stamen Terrain 
      const StamenTerrain = new TileLayer({
        source: new Stamen({
          layer: 'terrain',
        })
      })

      // Vector data source in KML format
      const vectorKML = new VectorLayer({
        source: new VectorSource({
          // url: '../assets/data/capitales.gpx'--> the local file does not work and I have not yet found the solution
          url: 'https://raw.githubusercontent.com/sandix34/Vuejs-OpenLayers/master/src/assets/data/alpes-mountains.kml',
          format: new KML()
        })
      })

      // Declare the map
      const map = new Map({ 
        layers: [StamenTerrain, vectorKML],
        target: 'map',
        view: new View({
          center: fromLonLat([9.657000, 46.887619]),
          zoom: 6
        })
      })
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