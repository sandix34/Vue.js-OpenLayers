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
        import 'ol/ol.css'
        import Map from 'ol/Map'
        import View from 'ol/View'
        import TileLayer from 'ol/layer/Tile'
        import BingMaps from 'ol/source/BingMaps'

        // An element to be displayed over the map and attached to a single map location
        import Overlay from 'ol/Overlay'

        import {fromLonLat} from 'ol/proj'

        export default {
          data () {
            return {
              mountains: [
                {
                  name: 'everest',
                  coordinate: [86.9253141, 27.9879017],
                },
                {
                  name: 'kilimanjaro',
                  coordinate: [37.352013, -3.065653]
                },
                {
                  name: 'aconcagua',
                  coordinate: [-70.010868, -32.653179]
                },
                {
                  name: 'denali',
                  coordinate: [-151.0060501, 63.0693461]
                },
                {
                  name: 'elbrus',
                  coordinate: [42.4392, 45.355]
                },
                {
                  name: 'kosciusko',
                  coordinate: [148.257998968, -36.453586519]
                }
              ]
            }
          },  
          methods: {
            createOverlay (position, name) {
              const newElement = document.createElement('div')
              newElement.setAttribute('id', `${name}`)
              newElement.classList.add('mount')

                return new Overlay({
                    element: newElement,
                    position: fromLonLat(position),
                    positioning: 'center-center'
                })
            },
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

              // list of mountains
              const mountains = this.mountains

              // create overlays for each mountain
              mountains.forEach((mount) => {
                const name = mount.name
                const position = mount.coordinate
                const overlayMount = this.createOverlay(position, name)
                
                map.addOverlay(overlayMount)
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
        <span>&lt;<span>style</span>&gt;</span>
        /* ⚠️ do not use <span>&lt;<span>style scoped</span>&gt;</span> otherwise overlays will not be displayed */

        @import '~ol/ol.css';

        #map {
          height: 80vh;
          width: 80%;
          margin: auto;
        }

        .mount {
          width: 15px;
          height: 15px;
          border: 1px solid #088;
          border-radius: 10px;
          background-color: red;
        }

        #everest {
          background-color:yellow;
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