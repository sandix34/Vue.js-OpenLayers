<template>
  <div>
    <div class="description">
      <p>
        Il est possible d'utiliser des sources de données externes comme les fichiers de données. OpenLayers prend en charge de nombreux formats de données vectorielles. 
      </p><br>
      <img class="diagram" src="../assets/image/mapvectorlayer.png" alt="diagram">
      <p>
        Dans l'exemple suivant on utilise un fichier geojson et gpx pour afficher les pays et les capitales du monde. Pour afficher ces données géographique il suffit d'indiquer l'<span class="option">URL</span> du fichier dans l'option source du <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html">VectorLayer</a> ainsi que le <span class="option">format</span> de données, ici <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_format_GeoJSON-GeoJSON.html">GeoJSON </a> et <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_format_GPX-GPX.html">GPX </a>
      </p>
    </div>
    <div id='map'></div>
    <CodeHlVectorFile/>
  </div>
</template>

<script>
// highliting code
import CodeHlVectorFile from '@/components/highlightCode/CodeHlVectorFile'

// classes required to display the map
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

// Feature format for reading and writing data in the GPX format.
import GPX from 'ol/format/GPX'

// Feature format for reading and writing data in the GeoJSON format.
import GeoJSON from 'ol/format/GeoJSON'

// Provides a source of features for vector layers.
import VectorSource from 'ol/source/Vector'

// Vector data that is rendered client-side.
import VectorLayer from 'ol/layer/Vector'

export default {
  components: {
    CodeHlVectorFile
  },
  methods: {
    initMap () {
      // Openstreet Map Standard
      const openStreetMapLayer = new TileLayer({
          source: new OSM(),
      })

      //Vector data source in GeoJSON format
      const vectorGeoJSON = new VectorLayer({
        source: new VectorSource({
          url: '../data/pays.geojson',
          format: new GeoJSON()
        })
      })

      // Vector data source in GPX format
      const vectorGPX = new VectorLayer({
        source: new VectorSource({
          url: '../data/capitales.gpx',
          format: new GPX()
        })
      })

      // declare the map 
      const map = new Map({
        layers: [openStreetMapLayer, vectorGPX, vectorGeoJSON],
        target: 'map',
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