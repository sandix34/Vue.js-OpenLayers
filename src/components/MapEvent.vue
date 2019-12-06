<template>
  <div id='map'></div>
</template>

<script>
// classes required to display the map
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

export default {
  methods: {
    initMap () {

      // Data sources OpenStreetMap layer
      const openStreetMapLayer = new OSM()

      // declare the map 
      const map = new Map({
        target: 'map',
        layers: [new TileLayer({source: openStreetMapLayer })],
        view: new View({
          center:[0, 0],
          zoom: 0
        })
      })

      // "on" method linked to the map object
      map.on('moveend', evt => {
          const zoom = map.getView().getZoom()
          console.log(evt, zoom)
      })
    }
  },
  mounted() {
    this.initMap()
  }
}

</script>

<style scoped>
@import '~ol/ol.css';

#map {
  height: 80vh;
  width: 80%;
  margin: auto;
}    
</style>