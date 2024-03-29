<template>
<div>
  <div class="description">
  <p>
    Pour utiliser des projections différentes de celles par defaut (EPSG:3857 ainsi que EPSG:4326), il est indispensable de charger la bibliothèque JavaScript <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="http://proj4js.org/">Proj4js</a>.
  <p><br>
  <p>Voir les systèmes de coodonnées dans le monde 👉 <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://epsg.io/">epsg.io</a></p><br>
  <img class="diagram" src="../assets/image/mapview.png" alt="diagram">
  <p>
    Cet exemple utilise la projection Lambert 93 (EPSG:2154).
  </p>
  </div>
  <div id='map'></div>
  <CodeHlProjections/>
</div>
</template>

<script>
// highliting code
import CodeHlProjections from '@/components/highlightCode/CodeHlProjections'

// classes required to display the map
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

// Proj4js library to use different projections ----> http://proj4js.org/
import proj4 from 'proj4';

// utility method for projection ----> https://openlayers.org/en/latest/apidoc/module-ol_proj.html
import {transform} from 'ol/proj'
import {get as getProjection} from 'ol/proj'

import {register} from 'ol/proj/proj4'// https://openlayers.org/en/latest/apidoc/module-ol_proj_proj4.html


export default {
  components: {
    CodeHlProjections,
  },
  methods: {
    initMap () {

      // Data sources OpenStreetMap layer
      const openStreetMapLayer = new OSM()

      //déclare the projection in EPSG:2154 (Lambert 93)
      proj4.defs("EPSG:2154","+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs")

      // Make projections defined in proj4 (with proj4.defs()) available in OpenLayers.
      register(proj4)

      // Fetches a Projection object for the code specified
      const projection = getProjection('EPSG:2154')

      // declare the map 
      new Map({
      target: 'map',
      layers: [new TileLayer({source: openStreetMapLayer })],
      view: new View({
        projection: projection,
        // Transforms a coordinate from source projection to destination projection.
        center: transform([2, 45], 'EPSG:4326', 'EPSG:2154'),
		    zoom: 3
        })
      })
    }
  },
  mounted() {
    this.initMap()
  }
}
</script>