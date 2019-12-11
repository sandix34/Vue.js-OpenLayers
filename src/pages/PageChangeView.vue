<template>
  <div id='map'></div>
</template>

<script>
// classes required to display the map
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

// utility method for projection
import {fromLonLat} from 'ol/proj'; 

export default {
  methods: {
    initMap () {

      // Data sources OpenStreetMap layer
      const openStreetMapLayer = new OSM()
      // longitude/latitude somewhere in France
      const LonLat = [3.4667, 43.3167]
      // Transforms a coordinate from longitude/latitude to a different projection
      const WebMercator = fromLonLat(LonLat)

      // declare the map 
      new Map({
      target: 'map',
      layers: [new TileLayer({source: openStreetMapLayer })],
      view: new View({
        center: WebMercator,
        zoom: 10
        })
      })
    }
  },
  mounted() {
    this.initMap()
  }
}
</script>
