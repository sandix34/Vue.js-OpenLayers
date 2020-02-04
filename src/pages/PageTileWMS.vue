<template>
  <div class="content">
    <div class="description">
    <p>
      <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/Web_Map_Service">Web Map Service ou WMS</a> est un protocole de communication standard qui permet d'obtenir des cartes de données géoréférencées à partir de différents serveurs de données. Les données peuvent être au format PNG, GIF, JPEG ou SVG.
    </p>
    <img class="diagram" src="../assets/image/mapTilewms.png" alt="diagram">
    <p>
      L'exemple suivant utilise les données de l'<a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="https://inpn.mnhn.fr/telechargement/cartes-et-information-geographique/ep/pn">INPN</a> (Inventaire Nationnal du Patrimoine Naturel) <br>
      Web-service ---> <a class="openlayers-link" target="_blank" rel="noopener noreferrer" href="http://ws.carmencarto.fr/WMS/119/fxx_inpn?request=GetCapabilities&service=WMS&version=1.3.0">données SIG concernant les espaces protégés en France métropolitaine</a>
    </p>
    </div> 
    <div id='map'></div>
    <CodeHlTileWMS/>
  </div>
</template>

<script>
  // highliting code
  import CodeHlTileWMS from '@/components/highlightCode/CodeHlTileWMS'

  // classes required to display the map
  import Map from 'ol/Map'
  import View from 'ol/View'
  import TileLayer from 'ol/layer/Tile'
  import OSM from 'ol/source/OSM'
  // utility method for projection
  import {fromLonLat} from 'ol/proj'; 
  // Layer source for tile data from WMS servers.
  import TileWMS from 'ol/source/TileWMS';


  export default {
    components: {
      CodeHlTileWMS,
    },
    methods: {
      initMap() {
        // OpenStreetMap layer
        const osm = new TileLayer({
            source: new OSM(),
        })

        // WMS Layer régional natural parks
        const wmsLayerNaturalParks = new TileLayer({
          source: new TileWMS({
            url: "http://ws.carmencarto.fr/WMS/119/fxx_inpn?",
            params: {
              LAYERS: 'Parcs_naturels_regionaux',
              FORMAT: 'image/png'
            }
          }),
        })

        // WMS Layer National parks
        const wmsLayerNationalParks = new TileLayer({
          source: new TileWMS({
            url: "http://ws.carmencarto.fr/WMS/119/fxx_inpn?",
            params: {
              LAYERS: 'Parcs_nationaux',
              FORMAT: 'image/png'
            }
          }),
        })

        // declare the map 
        const map = new Map({
          layers: [
            osm, 
            wmsLayerNaturalParks,
            wmsLayerNationalParks
          ],
          target: 'map',
          view: new View({
            center: fromLonLat([2.213749, 46.227638]),
            zoom: 6
          })
        })
      }
    },
    mounted() {
      this.initMap()
    }
  }
</script>