<template>
  <div>
    <div id='map'></div>
    <CodeHlFirstMap/>
  </div>
</template>

<script>
// highliting code
import CodeHlFirstMap from '@/components/highlightCode/CodeHlFirstMap'

// classes required to display the map
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

export default {
  components: {
    CodeHlFirstMap,
  },
  methods: {
    initMap () {
      // declare the map 
      new Map({
      target: 'map',
      layers: [
        new TileLayer({source: new OSM()})
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
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
@import '~ol/ol.css';

#map {
  height: 80vh;
  width: 80%;
  margin: auto;
}    
</style>
