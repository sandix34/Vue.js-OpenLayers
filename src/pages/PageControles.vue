<template>
  <div>
    <div class="description">
      <p>
        La liste des contrôles actuellement disponibles dans OpenLayers <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html">ici</a> dans les sous-classes.
      </p><br>
      <p>
        L'exemple suivant permet d'afficher tous les contôles disponibles. <br>
        👉 <span class="warning">Shift+Drag </span> pour faire pivoter et zoomer la carte autour de son centre. Le bouton permettant la réinitialisation apparaîtra en haut à droite. 
      </p>
    </div>
    <div id="map"></div>
    <CodeHlControles/>    
  </div>
</template>

<script>
// highliting code
import CodeHlControles from '@/components/highlightCode/CodeHlControles'

// classes required to display the map
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

// utility method for projection
import { fromLonLat } from "ol/proj"

// Allows the user to zoom and rotate the map by clicking and dragging on the map
// --> https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom.html 
import {defaults as defaultInteractions, DragRotateAndZoom} from 'ol/interaction';

import {
  defaults,
  OverviewMap,
  MousePosition,
  FullScreen,
  Rotate,
  ZoomSlider,
  ZoomToExtent,
  ScaleLine
} from "ol/control.js"

export default {
  components: {
    CodeHlControles
  },
  methods: {
    initMap() {
      // Data sources OpenStreetMap layer
      const openStreetMapLayer = new OSM()

      // declare the map
      new Map({
        target: "map",
        layers: [new TileLayer({ source: openStreetMapLayer })],
        view: new View({
          center: fromLonLat([2.3439, 48.8579]),
          zoom: 5
        }),
        interactions: defaultInteractions().extend([
          new DragRotateAndZoom()
        ]),
        controls: defaults({
          attribution: true,
          zoom: true
        }).extend([
          new FullScreen(),
          new MousePosition(),
          new OverviewMap(),
          new Rotate(),
          new ScaleLine(),
          new ZoomSlider(),
          new ZoomToExtent()
        ])
      });
    }
  },
  mounted() {
    this.initMap();
  }
}
</script>