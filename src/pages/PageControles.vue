<template>
  <div>
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