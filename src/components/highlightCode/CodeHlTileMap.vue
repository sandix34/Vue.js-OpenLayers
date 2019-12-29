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
              key: process.env.VUE_APP_API_KEY_BING_MAPS,
              sources: {
                osm: {title: 'OSMStandard'},
                bing: {title: 'BingAerial'},
                bingA: {title: 'BingAerialWithLabels'},
                stamenT: {title: 'StamenToner'},
                stamenW: {title: 'StamenWatercolor'},
                stamenTer: {title: 'StamenTerrain'} 
              }
            }
          },
          methods: {
            initMap () {
              // Openstreet Map Standard
              const openstreetMapStandard = new TileLayer({
                title: this.sources.osm.title, 
                source: new OSM(),    
                visible: false
              })

              // Bing Aerial 
              const cleBingMaps = 'votre clé';
              const BingAerial = new TileLayer({
                title: this.sources.bing.title,
                preload: Infinity,
                source: new BingMaps({
                  key: this.key,
                  imagerySet: 'Aerial'
                }),
                visible: true
              })

              // Bing Aerial With Labels
              const BingAerialWithLabels = new TileLayer({
                title: this.sources.bingA.title,
                preload: Infinity,
                source: new BingMaps({
                  key: this.key,
                  imagerySet: 'AerialWithLabels'
                }),
                visible: false
              })

              // Stamen Toner 
              const StamenToner = new TileLayer({
                title: this.sources.stamenT.title,
                preload: Infinity,
                source: new Stamen({
                  layer: 'toner',
                }),
                visible: false
              })

              // Stamen Watercolor 
              const StamenWatercolor = new TileLayer({
                title: this.sources.stamenW.title,
                preload: Infinity,
                source: new Stamen({
                  layer: 'watercolor',
                }),
                visible: false
              })

              // Stamen Terrain 
              const StamenTerrain = new TileLayer({
                title: this.sources.stamenTer.title,
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