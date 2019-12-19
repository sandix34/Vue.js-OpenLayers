<template>
  <div>
    <div class="description">
      <h4>
        La classe <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html">Map</a> est le composant principal d'OpenLayers.
      </h4><br>
      <p>
        Pour qu'une carte soit rendue, 3 options sont nécessaires:
      </p><br>
      <ul>
        <li>
        Une<span class="capitalize"> vue</span> : l'option <span class="option">view</span> permet de définir l'étendue géographique et le centre de la carte, les niveaux de zoom et la projection de la carte. Elle est définie par la classe <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_View-View.html">View</a>.
        </li><br>
        <li>
        Une ou plusieurs<span class="capitalize"> couches</span> : l'option <span class="option">layers</span> contient les couches SIG dans un tableau, ici, on utilise la couche <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_source_OSM-OSM.html">OpenStreetMap</a> à titre d'exemple.
        </li><br>
        <li>
        Un<span class="capitalize"> conteneur cible</span> : qui permet de choisir l'emplacement de la carte dans le document avec l'option <span class="option"> target</span>.
        </li>
      </ul>
    </div>
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
