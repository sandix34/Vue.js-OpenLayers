<template>
  <div class="content">
    <div class="description">
      <p>
        Il est possible de consommer les données de tuile des services <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://developers.arcgis.com/rest/services-reference/get-started-with-the-services-directory.htm">ArcGis Rest</a>. Les services de carte et d'image sont pris en charge.
      </p><br>
      <img class="diagram" src="../assets/image/maparcgis.png" alt="diagram">
      <p>
        L'exemple suivant utilise 
        <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer">un exemple de service hébergé par ESRI, alimenté par ArcGIS Server</a>, sur la densité de la population mondiale.
      </p><br>
    </div>
    <div id='map'></div>
    <CodeHlTileArcGIS/>
  </div>
</template>

<script>
  // highliting code
  import CodeHlTileArcGIS from '@/components/highlightCode/CodeHlTileArcGIS'

  // classes required to display the map
  import Map from 'ol/Map'
  import View from 'ol/View'
  import TileLayer from 'ol/layer/Tile'
  // Layer source for tile data from ArcGIS Rest services
  import TileArcGISRest from 'ol/source/TileArcGISRest';


  export default {
    components: {
      CodeHlTileArcGIS,
    },
    methods: {
      initMap() {

        // tile ArcGIS REST API Layer
        const tileArcGISLayer = new TileLayer({
          source: new TileArcGISRest({
            url: "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer"
          }),
        })

        // declare the map 
        const map = new Map({
          target: 'map',
          view: new View({
            center: [0, 0],
            zoom: 0
          })
        })
        map.addLayer(tileArcGISLayer);
      }
    },
    mounted() {
      this.initMap()
    }
  }
</script>