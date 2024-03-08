<template>
  <div class="background">
    <NavBar v-if="state.showNavBar" /> <!-- Render NavBar only if showNavBar is true -->
    <div class="container" :style="containerStyle">
      <img class="image" src="@/assets/WhatYouDesign-TransWit.png" :style="logoStyle" alt="WYDLogo" @click="toggleLogoSize">
      <SloganText v-if="!state.isLogoSmall" />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import SloganText from '@/components/SloganText.vue';
import NavBar from '@/components/NavBar.vue'; // Import the NavBar component

export default {
  name: 'App',
  components: {
    SloganText,
    NavBar // Register the NavBar component
  },
  setup() {
    const state = reactive({
      isLogoSmall: false,
      showNavBar: false
    });

    const toggleLogoSize = () => {
      state.isLogoSmall = !state.isLogoSmall;
      if (state.isLogoSmall) {
        state.showNavBar = true;
      }
      else {
        state.showNavBar = false;
      }
    };

    const logoStyle = computed(() => ({
      maxWidth: state.isLogoSmall ? '160px' : '100%',
      transition: 'max-width 0.5s ease-in-out'
    }));

    const containerStyle = computed(() => ({
      textAlign: 'center',
      position: 'absolute',
      top: state.isLogoSmall ? '10px' : '50%',
      left: '50%',
      transform: state.isLogoSmall ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
      transition: 'top 0.5s ease-in-out, transform 0.5s ease-in-out'
    }));

    return {
      state,
      toggleLogoSize,
      logoStyle,
      containerStyle
    };
  }
};
</script>

<style>
.background {
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

<style scoped>
.container {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.image {
  max-width: 100%;
  height: auto;
  cursor: pointer;
  z-index: 2;
}

</style>
