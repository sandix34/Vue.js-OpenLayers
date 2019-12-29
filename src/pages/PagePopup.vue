<template>
<div>
  <div class="description">
    <p>
      Les <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html">overlays</a> sont largement utilisés afin de montrer les attributs d'une entité géographique dans une popup.
    </p><br>
    <p>La carte suivante affiche toutes les montagnes des Alpes dont leur sommet se trouve à plus de 3000m d'altitude. Les données sont issues d'un fichier au format <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_format_GPX-GPX.html">GPX</a>.</p><br>
    <p>🖱️ cliquez sur les cercles rouges pour voir la popup affichant le nom et l'altitude.</p>
  </div>
  <div style="display:none;">
	<!-- Popup -->
    <div id="popup" class="ol-popup">
      <a href="#" id="popup-closer" class="ol-popup-closer"></a>
      <div id="popup-content"></div>
    </div>
  </div>
  <div id='map'></div>
  <CodeHlPopup/>
</div>
</template>

<script>
// highliting code
import CodeHlPopup from '@/components/highlightCode/CodeHlPopup'

// classes required to display the map
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import Stamen from 'ol/source/Stamen'

// Provides a source of features for vector layers.
import VectorSource from 'ol/source/Vector'
// Vector data that is rendered client-side.
import VectorLayer from 'ol/layer/Vector'
// Feature format for reading and writing data in the GPX format.
import GPX from 'ol/format/GPX'

// An element to be displayed over the map and attached to a single map location
import Overlay from 'ol/Overlay'

import {Fill, Stroke, Circle, Style} from 'ol/style';

import {fromLonLat} from 'ol/proj'

export default {
  components: {
    CodeHlPopup
  },  
  methods: {
    initMap () {

      // Stamen Terrain 
      const StamenTerrain = new TileLayer({
        source: new Stamen({
          layer: 'terrain',
        })
      })

      // circle style
      const styleCircle = new Style({
        image: new Circle({
          fill: new Fill({
            color:'rgba(255,0,0,0.4)'
          }),
          stroke: new Stroke({
            color: 'rgba(255,0,0,1)',
			      width: 1
          }),
          radius: 6
        })
      })

      // Vector data source in GPX format
      const vectorGPX = new VectorLayer({
        source: new VectorSource({
          url: '../data/alpes-mountains.gpx',
          format: new GPX()
        }),
        style: styleCircle
      })

      // Declare the map
      const map = new Map({ 
        layers: [StamenTerrain, vectorGPX],
        target: 'map',
        view: new View({
          center: fromLonLat([9.657000, 46.887619]),
          zoom: 9
        })
      })

      // Popup 
      const container = document.getElementById('popup')
      const content = document.getElementById('popup-content')
      const closer = document.getElementById('popup-closer')

      // Creation of the Overlay Popup 
      const overlay = new Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
          duration: 250
        }
      })
    
      // Popup closing on click on popup-closer
      closer.onclick = () => {
        overlay.setPosition(undefined)
        closer.blur()
        return false
      }	

      map.on('click', (evt) => {
        // get the coordinates 
        const coordinate = evt.coordinate;
        const featureSelect = map.forEachFeatureAtPixel(evt.pixel, (feature) => {
          return feature
        })
        // If  get the object
        if(featureSelect){
          // declare its unique identifier
          const mountainName = featureSelect.get('name')
          content.innerHTML = `<span>${mountainName}</span>`
          map.addOverlay(overlay)
          overlay.setPosition(coordinate)
        }else{
          map.removeOverlay(overlay)
        }
      })
    }
  },
  mounted() {
    this.initMap()
  }
}

</script>

<style scoped>
.ol-popup {
	position: absolute;
	background-color: white;
	-webkit-filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
	filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
	padding: 15px;
	border-radius: 10px;
	border: 1px solid #cccccc;
	bottom: 12px;
	left: -50px;
	min-width: 280px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.15), 
              0 2px 2px rgba(0,0,0,0.15), 
              0 4px 4px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.15);

}
.ol-popup:after, .ol-popup:before {
	top: 100%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}
.ol-popup:after {
	border-top-color: white;
	border-width: 10px;
	left: 48px;
	margin-left: -10px;
}
.ol-popup:before {
	border-top-color: #cccccc;
	border-width: 11px;
	left: 48px;
	margin-left: -11px;
}
.ol-popup-closer {
	text-decoration: none;
	position: absolute;
	top: 4px;
	right: 8px;
}
.ol-popup-closer:after {
	content: "✖";
}
</style>