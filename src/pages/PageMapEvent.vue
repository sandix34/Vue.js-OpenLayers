<template>
<div>
  {{zoom}}
  <div id='map'></div>
  <CodeHlMapEvent/>
</div>
</template>

<script>
// highliting code
import CodeHlMapEvent from '@/components/highlightCode/CodeHlMapEvent'

// classes required to display the map
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

export default {
  components: {
    CodeHlMapEvent,
  },data() {
    return {
      zoom: null
    }
  },
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
        this.zoom = map.getView().getZoom().toFixed(0)
        console.log(this.zoom)
      })
    }
  },
  mounted() {
    this.initMap()
  }
}
</script>