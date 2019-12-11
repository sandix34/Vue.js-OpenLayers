<template>
  <div v-highlight class="map-code">
    <pre class="language-html">
      <code>
        <span>&lt;<span>template</span>&gt;</span>
          <span class="hl-tag">&lt;<span>div</span>&gt;</span>Map
      </code>
    <pre class="language-javascript">
      <code>
        <span>&lt;<span>script</span>&gt;</span>
        // classes required to display the map
        import Map from 'ol/Map'
        import View from 'ol/View'
        import TileLayer from 'ol/layer/Tile'
        import OSM from 'ol/source/OSM'
      </code>
    </pre>
    <pre class="language-css">
      <code>
        #map {
          height: 80vh;
          width: 80;
          margin: auto;
        }
        .hl-tag {
          padding-left: 5px;
        }  
      </code>
    </pre>
      </pre>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.hl-tag {
  padding-left: 5px;
}
</style>