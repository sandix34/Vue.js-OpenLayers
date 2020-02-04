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
          import {fromLonLat} from 'ol/proj'; 
          // Layer source for tile data from WMS servers.
          import TileWMS from 'ol/source/TileWMS';

          export default {
            methods: {
              initMap() {
                // OpenStreetMap layer
                const osm = new TileLayer({
                    source: new OSM(),
                })

                // WMS Layer régional natural parks
                const wmsLayerNaturalParks = new TileLayer({
                  source: new TileWMS({
                    url: "http://ws.carmencarto.fr/WMS/119/fxx_inpn?",
                    params: {
                      LAYERS: 'Parcs_naturels_regionaux',
                      FORMAT: 'image/png'
                    }
                  }),
                })

                // WMS Layer National parks
                const wmsLayerNationalParks = new TileLayer({
                  source: new TileWMS({
                    url: "http://ws.carmencarto.fr/WMS/119/fxx_inpn?",
                    params: {
                      LAYERS: 'Parcs_nationaux',
                      FORMAT: 'image/png'
                    }
                  }),
                })

                // declare the map 
                const map = new Map({
                  layers: [
                    osm, 
                    wmsLayerNaturalParks,
                    wmsLayerNationalParks
                  ],
                  target: 'map',
                  view: new View({
                    center: fromLonLat([2.213749, 46.227638]),
                    zoom: 6
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