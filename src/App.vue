<template>
  <div>
    <div class="background" :style="{ 'background-image': `url(${backgroundImage})` }"></div>
    <div class="content-wrapper">
      <Transition>
        <router-view v-if="state.isLogoSmall" ></router-view> <!-- Apply fade transition -->
      </Transition>
      <div class="container" :style="containerStyle">
        <img class="image" src="@/assets/WhatYouDesign-TransWit.png" :style="logoStyle" alt="WYDLogo" @click="toggleLogoSize">
        <SloganText v-if="!state.isLogoSmall" />
      </div>
      <NavBar v-if="state.showNavBar" /> <!-- Render NavBar only if showNavBar is true -->
    </div>
    <InstagramButton v-if="state.showNavBar"  />
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

.title {
    font-family: "League Spartan", sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 2vw; /* Adjust the font size as needed */
    color: white; /* Change the color of the slogan */
    margin-top: 9vh; /* Add some space between the image and the slogan */
    margin-left: 5%;

  }

  .text {
    font-family: "League Spartan", sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 1vw; /* Adjust the font size as needed */
    color: white; /* Change the color of the slogan */
    margin-top: 9vh; /* Add some space between the image and the slogan */
    margin-left: 5%;
    width: 400px;
  }

.content-wrapper {
  height: 100vh; /* Take the full height of the viewport */
  overflow-y: auto; /* Enable vertical scrolling */
}

.container {
  text-align: center;
  position: relative; /* Change position to relative */
}

.image {
  max-width: 100%;
  height: auto;
  cursor: pointer;
  z-index: 10;
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

</style>
