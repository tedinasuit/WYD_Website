<template>
  <div>
    <div class="background" :style="{ 'background-image': `url(${backgroundImage})` }"></div>
    <div class="content-wrapper">
      <Transition>
        <router-view v-if="state.isLogoSmall" ></router-view> <!-- Apply fade transition -->
      </Transition>
      <div class="container" :style="containerStyle">
        <img class="logoimage" src="@/assets/WhatYouDesign-TransWit.png" :style="logoStyle" alt="WYDLogo" @click="toggleLogoSize">
        <SloganText v-if="!state.isLogoSmall" />
      </div>
      <NavBar v-if="state.showNavBar" /> <!-- Render NavBar only if showNavBar is true -->
    </div>
    <Transition>
      <InstagramButton v-if="state.showNavBar"  />
    </Transition>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import SloganText from '@/components/SloganText.vue';
import InstagramButton from '@/components/InstagramButton.vue';
import NavBar from '@/components/NavBar.vue'; // Import the NavBar component

export default {
  name: 'App',
  components: {
    SloganText,
    InstagramButton,
    NavBar // Register the NavBar component
  },
  setup() {
    const state = reactive({
      isLogoSmall: false,
      showNavBar: false
    });

    const toggleLogoSize = () => {
      state.isLogoSmall = !state.isLogoSmall;
      state.showNavBar = state.isLogoSmall; // Show NavBar when the logo is small
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

    // Computed property for background image
    const backgroundImage = computed(() => {
      return state.isLogoSmall ? require('@/assets/hippie-achtergrond-2.png') : require('@/assets/Hippie-kleurrijk.png');
    });

    return {
      state,
      toggleLogoSize,
      logoStyle,
      containerStyle,
      backgroundImage
    };
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden; 
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Keep the background image fixed */
}

.flexbox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
  min-width: 90vw;
}

.title {
    font-family: "League Spartan", sans-serif;
    font-weight: 900;
    font-style: normal;
    color: white; /* Change the color of the slogan */

  }

.text {
    font-family: "League Spartan", sans-serif;
    font-weight: 500;
    font-style: normal;
    color: white; /* Change the color of the slogan */
    margin-top: 9vh; /* Add some space between the image and the slogan */
    width: 400px;
}

.text-wrap {
  padding: 5vw;
}

.title {
  font-size: 2.5rem; /* Adjust title font size */
  margin-bottom: 1rem; /* Add spacing below the title */
}

.text {
  font-size: 1.5rem; /* Adjust text font size */
  padding-bottom: 5%;
}

.content-wrapper {
  height: 100vh; /* Take the full height of the viewport */
  overflow-y: auto; /* Enable vertical scrolling */
}

.container {
  text-align: center;
  position: relative; /* Change position to relative */
}

.logoimage {
  max-width: 100%;
  height: auto;
  cursor: pointer;
  z-index: 10;
}

.image {
  width: 65vh; /* Ensure image fills its container */
  max-width: 80vw; /* Limit image height to 60% of viewport height */
  object-fit: contain; /* Scale the image while preserving its aspect ratio */
}

.background {
  position: absolute; /* Ensures background covers entire viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Fills the entire viewport */
  background-size: cover; /* Scales image to cover the entire container */
  background-position: center; /* Centers the image within the container */
  transition: background-image 0.5s ease; /* Apply transition to background image */
}

.v-enter-active {
  transition: opacity 0.3s ease;
  transition-delay: 0.1s; /* Add a delay of 0.3s before the fade-in transition */
}

.v-enter-from {
  opacity: 0;
}

</style>
