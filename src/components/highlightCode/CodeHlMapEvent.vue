<template>
  <div v-highlight class="map-code">
    <pre class="language-html">
      <code>
        <span>&lt;<span>template</span>&gt;</span>
          <span class="hl-tag">&#123;&#123;</span>moveEndZoom<span>&#125;&#125;</span>
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

        export default {
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