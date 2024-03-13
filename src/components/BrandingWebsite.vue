<template>
    <div class="flexbox">
        <div>
            <img src="@/assets/Figma.png" height="400vh">
        </div>
        <div class="title">
            <p>BRANDING WEBSITE</p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SloganText'
  }
  </script>
  
  <style scoped>
  .flexbox {
    display: flex;

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
  </style>