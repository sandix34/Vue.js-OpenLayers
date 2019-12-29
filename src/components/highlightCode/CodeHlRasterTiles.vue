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

        // layers that are handled together
        import LayerGroup from 'ol/layer/Group'

        export default {
          data() {
            return {
              key: process.env.VUE_APP_API_KEY_OSM,
              tiles: {
                osm: {title: 'OSMStandard'},
                ocm: {title: 'OpenCycleMap'},
                osmT: {title: 'Transport'},
                osmL:{title: 'Landscape'},
                osmO: {title: 'Outdoors'},
                osmTD: {title: 'Transport Dark'},
                osmSM: {title: 'Spinal Map'},
                osmP: {title: 'Pioneer'},
                osmMA: {title: 'Mobile Atlas'},
                osmN: {title: 'Neighbourhood'}  
              }
            }
          },
          methods: {
            initMap () {

              const apiKey = this.key

              // openstreet Map Standard
              const openstreetMapStandard = new TileLayer({
                title: this.tiles.osm.title,        
                source: new OSM(),    
                visible: true
              })

              // OpenCycleMap
              const OpenCycleMap = new TileLayer({
                title: this.tiles.ocm.title,        
                source: new OSM({
                  url: `https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=${apiKey}`
                }),    
                visible: false
              })

              // Transport
              const OSMTransport = new TileLayer({
                title: this.tiles.osmT.title,        
                source: new OSM({
                  url: `https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=${apiKey}`
                }),    
                visible: false
              })

              // Landscape
              const OSMLandscape = new TileLayer({
                title: this.tiles.osmL.title,        
                source: new OSM({
                  url: `https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=${apiKey}`
                }),    
                visible: false
              })

              // Outdoors
              const OSMOutdoors = new TileLayer({
                title: this.tiles.osmO.title,        
                source: new OSM({
                  url: `https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=${apiKey}`
                }),    
                visible: false
              })

              // Transport Dark
              const OSMTransportDark = new TileLayer({
                title: this.tiles.osmTD.title,        
                source: new OSM({
                  url: `https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=${apiKey}`
                }),    
                visible: false
              })

              // Spinal Map
              const OSMSpinalMap = new TileLayer({
                title: this.tiles.osmSM.title,        
                source: new OSM({
                  url: `https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=${apiKey}`
                }),    
                visible: false
              })

              // Pioneer
              const OSMPioneer = new TileLayer({
                title: this.tiles.osmP.title,        
                source: new OSM({
                  url: `https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=${apiKey}`
                }),    
                visible: false
              })

              // Mobile Atlas
              const OSMMobileAtlas = new TileLayer({
                title: this.tiles.osmMA.title,        
                source: new OSM({
                  url: `https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=${apiKey}`
                }),    
                visible: false
              })

              // Neighbourhood
              const OSMNeighbourhood = new TileLayer({
                title: this.tiles.osmN.title,        
                source: new OSM({
                  url: `https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=${apiKey}`
                }),    
                visible: false
              })

              // declare the map 
              const map = new Map({
                target: 'map',
                view: new View({
                  center: fromLonLat([2.213749, 46.227638]),
                  zoom: 7
                })
              })

              // Layer Group
              const layerGroup = new LayerGroup({
                layers:[
                  openstreetMapStandard, 
                  OpenCycleMap,
                  OSMTransport,
                  OSMLandscape,
                  OSMOutdoors,
                  OSMTransportDark,
                  OSMSpinalMap,
                  OSMPioneer,
                  OSMMobileAtlas,
                  OSMNeighbourhood
                ]
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