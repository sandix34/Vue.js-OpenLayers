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

        // layers that are handled together
        import LayerGroup from 'ol/layer/Group'

        // Layer source
        import OSM from 'ol/source/OSM'
        import BingMaps from 'ol/source/BingMaps'
        import Stamen from 'ol/source/Stamen'

        export default {
          data() {
            return {
              title: {
                osm: 'OSMStandard',
                bing: 'BingAerial',
                bingA: 'BingAerialWithLabels',
                stamenT:'StamenToner',
                stamenW: 'StamenWatercolor',
                stamenTer: 'StamenTerrain'
              }
            }
          },
          methods: {
            initMap () {

              // Openstreet Map Standard
              const openstreetMapStandard = new TileLayer({
                title: this.title.osm,        
                source: new OSM(),    
                visible: true
              })

              // Bing Aerial 
              const cleBingMaps = 'votre clé';
              const BingAerial = new TileLayer({
                title: this.title.bing,
                preload: Infinity,
                source: new BingMaps({
                  key: "Your Bingmaps API Key Here",
                  imagerySet: 'Aerial'
                }),
                visible: false
              })

              // Bing Aerial With Labels
              const BingAerialWithLabels = new TileLayer({
                title: this.title.bingA,
                preload: Infinity,
                source: new BingMaps({
                  key: "Your Bingmaps API Key Here",
                  imagerySet: 'AerialWithLabels'
                }),
                visible: false
              })

              // Stamen Toner 
              const StamenToner = new TileLayer({
                title: this.title.stamenT,
                preload: Infinity,
                source: new Stamen({
                  layer: 'toner',
                }),
                visible: false
              })

              // Stamen Watercolor 
              const StamenWatercolor = new TileLayer({
                title: this.title.stamenW,
                preload: Infinity,
                source: new Stamen({
                  layer: 'watercolor',
                }),
                visible: false
              })

              // Stamen Terrain 
              const StamenTerrain = new TileLayer({
                title: this.title.stamenTer,
                preload: Infinity,
                source: new Stamen({
                  layer: 'terrain',
                }),
                visible: false
              })

              // declare the map 
              const map = new Map({
                target: 'map',
                view: new View({
                  center: [0, 0],
                  zoom: 3
                })
              })

              // Layer Group
              const layerGroup = new LayerGroup({
                layers:[
                  openstreetMapStandard, 
                  BingAerial, 
                  BingAerialWithLabels, 
                  StamenToner, 
                  StamenWatercolor, 
                  StamenTerrain]
              })

              map.addLayer(layerGroup)
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

<script>
export default {}
</script>

<style scoped>
.hl-tag {
  padding-left: 5px;
}
</style>