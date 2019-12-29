<template>
<div>
  <div class="description">
    <p>Les cartes rasters sont des fichiers images géoréférencés.</p><br>
    <p>👉 <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://wiki.openstreetmap.org/wiki/Tile_servers">ici</a> La liste des serveurs de tuiles raster en ligne basés sur les données d'OpenStreetMap. Une clé API sera parfois nécéssaire. </p><br>
    <p>👉 <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://www.thunderforest.com/">ici</a> Pour demander une clé API </p>
  </div>
  <div class="content">
    <div class="sidebar">
      <h2>Tuiles raster OSM</h2>
      <div class="tiles" v-for="tile in tiles" :key="tile.title">
        <input type="radio" name='baseLayerRadioButton' :value='tile.title'>
        <label :for="tile.title">{{tile.title}}</label>
      </div>
      <br>
    </div>
    <div id='map'></div>
  </div>
  <CodeHlRasterTiles/>
</div>
</template>

<script>

// highliting code
import CodeHlRasterTiles from '@/components/highlightCode/CodeHlRasterTiles'

// classes required to display the map
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

// utility method for projection
import {fromLonLat} from 'ol/proj'; 

// layers that are handled together
import LayerGroup from 'ol/layer/Group'

export default {
  components: {
    CodeHlRasterTiles
  },
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

      // Layer Switcher Logic for BaseLayers
      const baseLayerElements = document.querySelectorAll('.tiles > input[type=radio]')
      
      for(let baseLayerElement of baseLayerElements){   
        baseLayerElement.addEventListener('change', () => {
          let baseLayerElementValue = baseLayerElement.value;
          
          layerGroup.getLayers().forEach((element, index, array) => {
            let baseLayerName = element.get('title')
            
            element.setVisible(baseLayerName === baseLayerElementValue)
          })
        })
      }
    }
  },
  mounted() {
    this.initMap()
  }
}
</script>

<style scoped>
.content {
  display: flex;
}

.sidebar {
  padding: 1.5em;
}

h2 {
  padding-bottom: 1.5em;
  font-size: 1.5em;
}

@media (max-width: 1024px) {
  .content {
    display: block;
  }
  h2 {
    padding-bottom: 0;
    font-size: small;
  }
  .sidebar {
    font-size: small;
    padding: 0em 0em 0em 1em;
  }
}

</style>
