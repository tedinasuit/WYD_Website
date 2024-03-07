<template>
    <div class="background-container">
  <div class="container">
    <img class="image" src="@/assets/WhatYouDesign-TransWit.png" alt="WYDLogo">
    <p class="slogan">BRINGING YOUR IDEAS TO LIFE.</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeScreen'
}
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
}

.slogan {
  font-family: "League Spartan", sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 10vh; /* Adjust the font size as needed */
  color: white; /* Change the color of the slogan */
  margin-top: 9vh; /* Add some space between the image and the slogan */
}

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url('@/assets/Hippie-kleurrijk.png');
}
</style>
