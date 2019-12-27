
<template>
<div>
  <div class="description">
    <h4>
      Voici les fonds de carte présents dans l'API OpenLayers.
    </h4><br>
    <ul>
      <li>
      <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_source_BingMaps-BingMaps.html">BingMaps</a> : Source de calque pour les données de mosaïque Bing Maps.
      </li><br>
      <li>
      <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_source_Stamen-Stamen.html">Stamen</a> : Source de couche pour le serveur de tuiles Stamen.
      </li><br>
      <li>
      <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_source_OSM-OSM.html">OSM</a> : Source de couche pour le serveur de tuiles OpenStreetMap.
      </li>
    </ul><br>
    
  </div>
    <div class="content">
      <div class="sidebar">
        <h2>Sources de couche</h2>
        <div class="sources" v-for="source in sources" :key="source.title">
          <input type="radio" name='baseLayerRadioButton' :value='source.title'>
          <label :for="source.title">{{source.title}}</label>
        </div>
        <br>
      </div>
      <div id='map'></div>
    </div>
    <CodeHlTileMap/>
  </div>
</template>

<script>
// highliting code
import CodeHlTileMap from '@/components/highlightCode/CodeHlTileMap'

// classes required to display the map
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

// layers that are handled together
import LayerGroup from 'ol/layer/Group'

import BingMaps from 'ol/source/BingMaps'
import Stamen from 'ol/source/Stamen'
import CartoDB from 'ol/source/CartoDB'

export default {
  components: {
    CodeHlTileMap
  },
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

      // Layer Switcher Logic for BaseLayers
      const baseLayerElements = document.querySelectorAll('.sources > input[type=radio]')
      
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

@import '~ol/ol.css';
#map {
  height: 80vh;
  width: 70%;
  margin: auto;
}

</style>
