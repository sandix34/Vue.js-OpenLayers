
<template>
<div class="content">
  <div class="sidebar">
        <h2>Base Layers</h2>
        <input type="radio" name='baseLayerRadioButton' :value='this.title.osm' checked>OSM Standard<br>
        <input type="radio" name='baseLayerRadioButton' :value='this.title.bing'>Bing Aerial<br>
        <input type="radio" name='baseLayerRadioButton' :value='this.title.bingA'>Bing Aerial With Labels<br>
        <input type="radio" name='baseLayerRadioButton' :value='this.title.stamenT'>Stamen Toner<br>
        <input type="radio" name='baseLayerRadioButton' :value='this.title.stamenW'>Stamen Water color<br>
        <input type="radio" name='baseLayerRadioButton' :value='this.title.stamenTer'>Stamen Terrain<br>
      </div>
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

import BingMaps from 'ol/source/BingMaps'
import Stamen from 'ol/source/Stamen'

export default {
  data() {
    return {
      key: process.env.VUE_APP_API_KEY_BING_MAPS,
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
          key: this.key,
          imagerySet: 'Aerial'
        }),
        visible: false
      })

      // Bing Aerial With Labels
      const BingAerialWithLabels = new TileLayer({
        title: this.title.bingA,
        preload: Infinity,
        source: new BingMaps({
          key: this.key,
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

      // Layer Switcher Logic for BaseLayers
      const baseLayerElements = document.querySelectorAll('.sidebar > input[type=radio]')
      
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
}

@import '~ol/ol.css';
#map {
  height: 80vh;
  width: 70%;
  margin: auto;
}
</style>
