<template>
  <div v-highlight class="map-code">
    <pre class="language-html">
      <code>
        <span>&lt;<span>template</span>&gt;</span>
          <span class="hl-tag">&lt;<span>div id='map'</span>&gt;</span><span>&lt;</span><span>/div&gt;</span>
          <span class="hl-tag">&lt;<span>div id='marker' title='Marker'</span>&gt;</span><span>&lt;</span><span>/div&gt;</span>
        <span>&lt;<span>/template</span>&gt;</span>
      </code>

    <pre class="language-javascript">
      <code>
        <span>&lt;<span>script</span>&gt;</span>
        
        // classes required to display the map
        import 'ol/ol.css'
        import Map from 'ol/Map'
        import View from 'ol/View'
        import TileLayer from 'ol/layer/Tile'
        import BingMaps from 'ol/source/BingMaps'

        // An element to be displayed over the map and attached to a single map location
        import Overlay from 'ol/Overlay'

        import {fromLonLat} from 'ol/proj'

        export default {  
          methods: {
            initMap () {

              // Bing Aerial With Labels
              const BingAerialWithLabels = new TileLayer({
                source: new BingMaps({
                  key: process.env.VUE_APP_API_KEY_BING_MAPS,
                  imagerySet: 'AerialWithLabels'
                })
              })

              // Declare the map
              const map = new Map({ 
                layers: [BingAerialWithLabels],
                target: 'map',
                view: new View({
                  center: [0, 0],
                  zoom: 2
                })
              })

              // Marker's Statement
              const marker = new Overlay({
                position: fromLonLat([37.352013, -3.065653]),
                positioning: 'center-center',
                element: document.getElementById('marker'),
                stopEvent: false
              });
              // Add to Map object
              map.addOverlay(marker) 
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

        #marker {
          width: 20px;
          height: 20px;
          border: 1px solid #088;
          border-radius: 10px;
          background-color: red;
        }
        <span>&lt;<span>/style</span>&gt;</span>  
      </code>
    </pre>
    </pre>
  </div>
</template>