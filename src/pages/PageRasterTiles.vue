<template>
<div>
  <div id='map'></div>
</div>
</template>

<script>

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
      title: {
        osm: 'OSMStandard',
        ocm: 'OpenCycleMap',
        osmT: 'Transport',
        osmL:'Landscape',
        osmO: 'Outdoors',
        osmTD: 'Transport Dark',
        osmSM: 'Spinal Map',
        osmP: 'Pioneer',
        osmMA: 'Mobile Atlas',
        osmN: 'Neighbourhood'
      }
    }
  },
  methods: {
    initMap () {

      const apiKey = this.key

      // openstreet Map Standard
      const openstreetMapStandard = new TileLayer({
        title: this.title.osm,        
        source: new OSM(),    
        visible: true
      })

      // OpenCycleMap
      const OpenCycleMap = new TileLayer({
        title: this.title.ocm,        
        source: new OSM({
          url: `https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=${apiKey}`
        }),    
        visible: false
      })

      // Transport
      const OSMTransport = new TileLayer({
        title: this.title.osmT,        
        source: new OSM({
          url: `https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=${apiKey}`
        }),    
        visible: false
      })

      // Landscape
      const OSMLandscape = new TileLayer({
        title: this.title.osmL,        
        source: new OSM({
          url: `https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=${apiKey}`
        }),    
        visible: false
      })

      // Outdoors
      const OSMOutdoors = new TileLayer({
        title: this.title.osmO,        
        source: new OSM({
          url: `https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=${apiKey}`
        }),    
        visible: false
      })

      // Transport Dark
      const OSMTransportDark = new TileLayer({
        title: this.title.osmTD,        
        source: new OSM({
          url: `https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=${apiKey}`
        }),    
        visible: false
      })

      // Spinal Map
      const OSMSpinalMap = new TileLayer({
        title: this.title.osmSM,        
        source: new OSM({
          url: `https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=${apiKey}`
        }),    
        visible: false
      })

      // Pioneer
      const OSMPioneer = new TileLayer({
        title: this.title.osmP,        
        source: new OSM({
          url: `https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=${apiKey}`
        }),    
        visible: false
      })

      // Mobile Atlas
      const OSMMobileAtlas = new TileLayer({
        title: this.title.osmMA,        
        source: new OSM({
          url: `https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=${apiKey}`
        }),    
        visible: false
      })

      // Neighbourhood
      const OSMNeighbourhood = new TileLayer({
        title: this.title.osmN,        
        source: new OSM({
          url: `https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=${apiKey}`
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
</script>

<style scoped>
@import '~ol/ol.css';
#map {
  height: 80vh;
  width: 70%;
  margin: auto;
}
</style>
