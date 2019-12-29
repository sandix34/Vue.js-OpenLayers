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

        // Feature format for reading and writing data in the GeoJSON format.
        import GeoJSON from 'ol/format/GeoJSON'

        // Provides a source of features for vector layers.
        import VectorSource from 'ol/source/Vector'

        // Vector data that is rendered client-side.
        import VectorLayer from 'ol/layer/Vector'

        export default {
          methods: {
            initMap () {
              // Data sources and OpenStreetMap layer
              const osm = new TileLayer({
                  source: new OSM(),
              })

              // Vector data source in GeoJSON format
              const sourceGeoJSON = new VectorSource({
                  url: '../data/pays.geojson',
                format: new GeoJSON()
              })

              // Vector layer declaration	
              const vecteurGeoJSON = new VectorLayer({
                source: sourceGeoJSON,
              })

              // Declare the map
              const map = new Map({
                layers: [osm, vecteurGeoJSON],
                target: 'map',
                view: new View({
                  center: [0,0],
                  zoom: 2
                }),
              })

              // when the vector source is loaded
              sourceGeoJSON.on( 'change', (() => {	
                // Vector entities
                const entity = sourceGeoJSON.getFeatures();
                // Number of entities
                const nb_entities = entity.length
                // We read each entity of the vector returned as an object
                sourceGeoJSON.forEachFeature( entity => {
                  console.log('object of the entity: ', entity)
                    // Geometry of each entity
                    entity.getGeometry()
                    // we obtain the attribute value by the get method
                    entity.get('name')
                })

                // all the fields except geometry  
                sourceGeoJSON.forEachFeature( entity => {
                  const fields = entity.getKeys()
                  const nbFields = entity.getKeys().length
                  // We start the loop at f = 1 because the first field corresponds to the geometry of each entity
                  for(let f=1; f&lt;nbFields; f++){
                    console.log(`field ${fields[f]}:  ${entity.get(fields[f])}`)
                  }
                })
              }))
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