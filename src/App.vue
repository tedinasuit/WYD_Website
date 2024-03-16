<template>
  <div>
    <div class="background" :style="{ 'background-image': `url(${backgroundImage})` }"></div>
    <div class="content-wrapper">
      <Transition>
        <router-view v-if="state.isLogoSmall" ></router-view> <!-- Apply fade transition -->
      </Transition>
      <div style="z-index: 10;" class="container" :style="containerStyle">
        <img class="logoimage" src="@/assets/WhatYouDesign-TransWit.png" :style="logoStyle" alt="WYDLogo" @click="toggleLogoSize">
        <SloganText v-if="!state.isLogoSmall" />
      </div>
      <NavBar style="z-index: 4; " v-if="state.showNavBar" /> <!-- Render NavBar only if showNavBar is true -->
    </div>
    <Transition>
      <InstagramButton v-if="state.showNavBar"  />
    </Transition>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue';
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
      maxWidth: state.isLogoSmall ? '25vw' : '100%',
      maxWidth: state.isLogoSmall ? '15vh' : '100%',
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

    

    // Set the document title
    onMounted(() => {
      document.title = 'What You Design';

      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = require('@/assets/hippie-achtergrond-2.png'); // Path to your background image
      link.as = 'image';
      document.head.appendChild(link);
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

@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');

html {
  overflow-x: hidden;
}

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
    text-align: left;
    transform: translateZ(0.1px);
  }

.text {
    font-family: "League Spartan", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: white; /* Change the color of the slogan */
    width: 400px;
    max-width: 90vw;
    text-align: left;
    transform: translateZ(0.1px);
}

.text-wrap {
  flex: 1; /* Allow text container to grow to fill remaining space */
  max-width: 400px; /* Limit the maximum width of the text container */
  padding: 5vw;
  text-align: center; /* Center align text */
}

.title {
  font-size: clamp(20px, 3rem, 8vw); /* Adjust title font size */
}

.text {
  font-size: clamp(20px, 2rem, 6vw); /* Adjust text font size */
  
}

.content-wrapper {
  height: 100vh; /* Take the full height of the viewport */
  overflow-y: auto; /* Enable vertical scrolling */
}

.container {
  text-align: center;
  position: relative; /* Change position to relative */
  overflow-x: hidden;
  z-index: 2;
}

.logoimage {
  max-width: 50vw;
  max-height: 30vh; /* Set maximum height based on viewport height */
  height: auto;
  cursor: pointer;
  z-index: 10;
}

.image {
  width: 65vh; /* Ensure image fills its container */
  max-width: min(80vw, 60vh); /* Cap the max-width at either 80vw or 60vh, whichever is smaller */
  object-fit: contain; /* Scale the image while preserving its aspect ratio */
  border-radius: 10px;
  filter: drop-shadow(1.5vw 0.8vw 7px #00000023);
}

.background {
  position: absolute; /* Ensures background covers entire viewport */
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-size: cover; /* Scales image to cover the entire container */
  background-position: center; /* Centers the image within the container */
  transition: background-image 0.5s ease; /* Apply transition to background image */
  background-repeat: repeat;
}

.v-enter-active {
  transition: opacity 0.3s ease;
  transition-delay: 0.1s; /* Add a delay of 0.3s before the fade-in transition */
}

.v-enter-from {
  opacity: 0;
}

@media (orientation: portrait) {

  .title {
    text-align: center;
  }

  .text {
    text-align: center;

  }
}






</style>