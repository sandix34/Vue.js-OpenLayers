<template>
  <div>
    <div class="description">
      <h4>
        Les <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_control.html">Contrôles </a> sont d'autres composantes de la classe <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html">Map </a>.
      </h4><br>
      <p>
        Les contrôles disponibles sont:
      </p><br>
      <ul>
        <li>
        <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution-Attribution.html">Attribution </a> : Contrôle pour afficher toutes les attributions associées aux sources de la couche dans la carte. Ce contrôle est l’un des contrôles par défaut inclus dans les cartes. Par défaut, il apparaîtra dans la partie inférieure droite de la carte.>View.
        </li><br>
        <li>
        <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_control_FullScreen-FullScreen.html">FullScreen </a> : Fournit un bouton qui, lorsqu'il est cliqué, remplit la carte en plein écran. L'élément source en plein écran est par défaut l'élément contenant la fenêtre d'affichage de la carte.
        </li><br>
        <li>
        <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_control_MousePosition-MousePosition.html">MousePosition </a> : Un contrôle pour afficher les coordonnées 2D du curseur de la souris. Par défaut, ils sont dans la projection de vues et affiché dans le coin supérieur droit de la carte.
        </li>
        <li>
          <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_control_OverviewMap-OverviewMap.html">OverviewMap </a> : Contrôle avec une carte faisant office de carte de synthèse. Ce contrôle chevauche l'échelle.
        </li>
        <li>
          <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_control_Rotate-Rotate.html">Rotate </a> : Un bouton de contrôle permet de réinitialiser la rotation à 0.
        </li>
        <li>
          <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_control_ScaleLine-ScaleLine.html">ScaleLine </a> : L'échelle est en bas à gauche du conteneur.
        </li>
        <li>
          <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_control_ZoomSlider-ZoomSlider.html">ZoomSlider </a> : Un type de contrôle de curseur pour zoomer, située à gauche.
        </li>
        <li>
          <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://openlayers.org/en/latest/apidoc/module-ol_control_ZoomToExtent-ZoomToExtent.html">ZoomToExtent </a> : Ce contrôle, désigné par la lettre E, permet de spécifier une étendue géographique.
        </li>
      </ul><br>
      <p>
        L'exemple suivant permet d'afficher tous les contôles disponibles. <br>
        <span class="warning">Shift+Drag </span> pour faire pivoter et zoomer la carte autour de son centre. Le bouton permettant la réinitialisation apparaîtra en haut à droite. 
      </p>
    </div>
    <div id="map"></div>
    <CodeHlControles/>    
  </div>
</template>

<script>
// highliting code
import CodeHlControles from '@/components/highlightCode/CodeHlControles'

// classes required to display the map
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

// utility method for projection
import { fromLonLat } from "ol/proj"

// Allows the user to zoom and rotate the map by clicking and dragging on the map
// --> https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom.html 
import {defaults as defaultInteractions, DragRotateAndZoom} from 'ol/interaction';

import {
  defaults,
  OverviewMap,
  MousePosition,
  FullScreen,
  Rotate,
  ZoomSlider,
  ZoomToExtent,
  ScaleLine
} from "ol/control.js"

export default {
  components: {
    CodeHlControles
  },
  methods: {
    initMap() {
      // Data sources OpenStreetMap layer
      const openStreetMapLayer = new OSM()

      // declare the map
      new Map({
        target: "map",
        layers: [new TileLayer({ source: openStreetMapLayer })],
        view: new View({
          center: fromLonLat([2.3439, 48.8579]),
          zoom: 5
        }),
        interactions: defaultInteractions().extend([
          new DragRotateAndZoom()
        ]),
        controls: defaults({
          attribution: true,
          zoom: true
        }).extend([
          new FullScreen(),
          new MousePosition(),
          new OverviewMap(),
          new Rotate(),
          new ScaleLine(),
          new ZoomSlider(),
          new ZoomToExtent()
        ])
      });
    }
  },
  mounted() {
    this.initMap();
  }
}
</script>