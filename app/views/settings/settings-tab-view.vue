<template>
  <ContentView height="100%" width="100%">
    <Mapbox
      accessToken="pk.eyJ1IjoicWtkcmV5ZXIiLCJhIjoiY2pvM251eG90MHZwZTNxbWZxZnZ2YmRkZiJ9.3s_U1Q01eh4eDxGXQw2Eug"
      mapStyle="traffic_day"
      latitude="50.467735"
      longitude="13.427718"
      hideCompass="true"
      zoomLevel="18"
      showUserLocation="true"
      disableZoom="false"
      disableRotation="false"
      disableScroll="false"
      disableTilt="false"
      @mapReady="onMapReady($event)"
    />
  </ContentView>
</template>

<script>
  export default {
    name: 'SettingsTabView',
    methods: {
      onMapReady(event) {
        this.log(event);
      },
    },
  };
</script>

<style scoped>
</style>
