<template>
  <div v-highlight class="map-code">
    <pre class="language-html">
      <code>
        <span>&lt;<span>template</span>&gt;</span>
          <span class="hl-tag">&lt;<span>div id='map'</span>&gt;</span><span>&lt;</span><span>/div&gt;</span>
        <span>&lt;<span>/template</span>&gt;</span>
      </code>

    <pre class="language-javascript">
      <code>
        <span>&lt;<span>script</span>&gt;</span>
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
          methods: {
            initMap () {
              // Openstreet Map Standard
              const openStreetMapLayer = new TileLayer({
                  source: new OSM(),
              })

              //Vector data source in GeoJSON format
              const vectorGeoJSON = new VectorLayer({
                source: new VectorSource({
                  // url:'../assets/data/pays.geojson'--> the local file does not work and I have not yet found the solution
                  url: 'https://raw.githubusercontent.com/sandix34/Vuejs-OpenLayers/master/src/assets/data/pays.geojson',
                  format: new GeoJSON()
                })
              })

              // Vector data source in GPX format
              const vectorGPX = new VectorLayer({
                source: new VectorSource({
                  // url: '../assets/data/capitales.gpx'--> the local file does not work and I have not yet found the solution
                  url: 'https://raw.githubusercontent.com/sandix34/Vuejs-OpenLayers/master/src/assets/data/capitales.gpx',
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
        <span>&lt;<span>/script</span>&gt;</span>
      </code>
    </pre>

    <pre class="language-css">
      <code>
        <span>&lt;<span>style scoped</span>&gt;</span>
        @import '~ol/ol.css';

        #map {
          height: 80vh;
          width: 80%;
          margin: auto;
        }
        <span>&lt;<span>/style</span>&gt;</span>  
      </code>
    </pre>
    </pre>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.hl-tag {
  padding-left: 5px;
}
</style>