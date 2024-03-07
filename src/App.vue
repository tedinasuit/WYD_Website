<template>
  <div class="background-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.background-container {
  position: absolute; /* Ensures background covers entire viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Fills the entire viewport */
  background-image: url('@/assets/Hippie-kleurrijk.png');
  background-size: cover; /* Scales image to cover the entire container */
  background-position: center; /* Centers the image within the container */
}

</style>
