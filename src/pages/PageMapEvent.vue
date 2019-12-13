<template>
<div>
  <div class="description">
    <h4>
      De nombreuses méthodes sont liées à la classe <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html">Map </a> et elles peuvent être déclenchées à partir d'actions appelées "Fires". Les plus utilisées sont <span class="option">on(type, listener, opt_this)</span>, <span class="option">once(type, listener, opt_this)</span> qui contiennent une fonction afin d'obtenir des informations de la classe "parent".
    </h4><br>
    <p>
      Il y a 5 types de déclencheurs:
    </p><br>
    <ul>
      <li>
      <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_events_Event-Event.html">Event </a> : un évènement quelconque par le fire change.
      </li><br>
      <li>
      <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html">ObjectEvent  </a> : Les évènements liés a un objet de la classe Map.
      </li><br>
      <li>
      <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html">MapBrowserEvent  </a> : Les évènements liés au navigateur web (click, dblclick, pointerdrag, pointermove, singleclick).
      </li>
      <li>
        <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_MapEvent-MapEvent.html">MapEvent </a> : Les évènement liés à la carte (moveend, movestart, postrender).
      </li>
      <li>
        <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_render_Event-RenderEvent.html">RenderEvent  </a> : Les évènements liés à un rendu du document (postcompose, precompose).
      </li>
    </ul><br>
    <p>
      Dans cet exemple, un écouteur est enregistré pour l' <span class="option">moveend</span>  événement de la carte.  Chaque fois que cet écouteur est appelé, il met à jour l' entrée suivante 👉 <span class="zoom">{{moveEndZoom}}</span> avec le niveau de zoom à la fin du défilement de la carte. 
    </p>
  </div>
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
  },
  data() {
    return {
      moveEndZoom: null
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
        this.moveEndZoom = map.getView().getZoom().toFixed(0)
        // console.log(this.moveEndZoom)
      })
    }
  },
  mounted() {
    this.initMap()
  }
}
</script>

<style scoped>
.zoom {
  font-size: 1.5em;
  background-color: #d4edda;
  padding: 0.1em 0.3em 0.1em 0.3em;
  border-radius: 5px;
}
</style>