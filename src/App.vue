<template>
    <HomeScreen />
</template>

<script>
import HomeScreen from './components/HomeScreen.vue';

export default {
  name: 'App',
  components: {
    HomeScreen
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-image: url('@/assets/Hippie-kleurrijk.png');
}

</style>
