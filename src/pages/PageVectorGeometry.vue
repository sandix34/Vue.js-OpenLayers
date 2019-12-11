<template>
<div>
  <div>
    <h1>voici une carte</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur similique, atque dicta placeat ratione quibusdam obcaecati maxime perspiciatis eligendi quo perferendis nulla, quod ea. Dolorem animi deserunt iusto omnis odit!</p>
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

import LayerGroup from 'ol/layer/Group'

import Feature from 'ol/Feature'
import LineString from 'ol/geom/LineString'
import Point from 'ol/geom/Point'
import Polygon from 'ol/geom/Polygon'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'

// utility method for projection
import {fromLonLat} from 'ol/proj'

export default {
  methods: {
    initMap () {

      // creating Point Geometry
      const geomPoint = new Point([3.515625, 43.70759350405294])
      geomPoint.transform('EPSG:4326', 'EPSG:3857');
      // declare of the geographical object / entity
      const entityPoint = new Feature({
          geometry: geomPoint,
          name: 'point'
      })

      // creating line geometry
      const geomLigne = new LineString([[-0.37353515625, 44.824708282300236],[6.78955078125,44.793530904744074]])
      geomLigne.transform('EPSG:4326', 'EPSG:3857')
      // declare of the geographical object / entity
      const entityLigne = new Feature({
          geometry: geomLigne,
          name: 'ligne'
      })

      // creating polygon geometry
      const geomPolygone = new Polygon([[[3.0,40.0],[2.90,41.0],[3.50,43.0],[4.0,45.0],[8.0,45.0],[3.0,40.0]]]);
      geomPolygone.transform('EPSG:4326', 'EPSG:3857');
      // declare of the geographical object / entity
      const entityPolygone = new Feature({
          geometry: geomPolygone,
          name: 'Polygone'
      })

      const sourceEntity = new VectorSource({
        features: [entityPoint, entityLigne, entityPolygone]
      })

      // declare the vector
      const vector = new VectorLayer({
          source: sourceEntity
      })

      // Base Layers
      // Openstreet Map Standard
      const openstreetMapStandard = new TileLayer({
        source: new OSM(),    
        visible: true,
        title: 'OSMStandard'        
      })

      // declare the map 
      const map = new Map({
        target: 'map',
        view: new View({
          center:fromLonLat([1.3529599,44.0221252]),
          zoom: 5
        })
      })

      // Layer Group
      const layerGroup = new LayerGroup({
        layers:[openstreetMapStandard, vector]
      })

      map.addLayer(layerGroup)
    }
  },
  mounted() {
    this.initMap()
  }
}

</script>