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

          // utility method for projection
          import { fromLonLat } from 'ol/proj'

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
          } from 'ol/control.js'

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
export default {};
</script>

<style scoped>
.hl-tag {
  padding-left: 5px;
}
</style>