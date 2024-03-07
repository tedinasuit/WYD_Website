<template>
    <div class="container" :style="containerStyle">
      <img class="image" src="@/assets/WhatYouDesign-TransWit.png" :style="logoStyle" alt="WYDLogo" @click="toggleLogoSize">
      <SloganText v-if="!state.isLogoSmall" /> <!-- Render SloganText only if isLogoSmall is false -->
    </div>
</template>

<script>
import { reactive, computed } from 'vue';
import SloganText from '@/components/SloganText.vue'; // Import the SloganText component

export default {
  name: 'HomeScreen',
  components: {
    SloganText // Register the SloganText component
  },
  setup() {
    // Reactive state
    const state = reactive({
      isLogoSmall: false
    });

    // Method to toggle the logo size
    const toggleLogoSize = () => {
      state.isLogoSmall = !state.isLogoSmall;
      // Change background image when toggling logo size
      document.body.style.backgroundImage = state.isLogoSmall ? "url('@/assets/hippie-achtergrond-2.png')" : "url('@/assets/Hippie-kleurrijk.png')";
    };

    // Computed property for logo style
    const logoStyle = computed(() => ({
      maxWidth: state.isLogoSmall ? '160px' : '100%',
      transition: 'max-width 0.5s ease-in-out' // Add transition for smooth resizing
    }));

    // Computed property for container style
    const containerStyle = computed(() => ({
      textAlign: 'center',
      position: 'absolute',
      top: state.isLogoSmall ? '10px' : '50%',
      left: '50%',
      transform: state.isLogoSmall ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
      transition: 'top 0.5s ease-in-out, transform 0.5s ease-in-out' // Add transition for smooth repositioning
    }));

    // Return data, methods, and computed properties accessible in the template
    return {
      state,
      toggleLogoSize,
      logoStyle,
      containerStyle
    };
  }
};
</script>

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
  cursor: pointer; /* Change cursor to pointer when hovering over the image */
}

.slogan {
  font-family: "League Spartan", sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 10vh; /* Adjust the font size as needed */
  color: white; /* Change the color of the slogan */
  margin-top: 9vh; /* Add some space between the image and the slogan */
}
.button {
  margin-top: 20px;
}
</style>
