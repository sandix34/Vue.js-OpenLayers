<template>
<div>
  <div class="description">
    <p>
      Il est possible de spécifier la projection dans la vue qui par défaut, est l'EPSG:3857 ainsi que l'EPSG:4326.
    <p><br>
    <img class="diagram" src="../assets/image/mapview.png" alt="diagram">
    <p>
      Le code suivant introduit le centrage de la carte avec une transformation de la projection des coordonnées géographiques avec la méthode <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.fromLonLat">fromLonLat</a>.
    </p>
  </div>
  <div id='map'></div>
  <CodeHlChangeView/>
</div>
</template>

<script>
// highliting code
import CodeHlChangeView from '@/components/highlightCode/CodeHlChangeView'

// classes required to display the map
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

// utility method for projection
import {fromLonLat} from 'ol/proj'; 

export default {
  components: {
    CodeHlChangeView,
  },
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
