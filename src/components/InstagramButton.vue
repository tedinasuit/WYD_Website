<template>
    <a :href="instagramLink" target="_blank" class="instagram-button">
      <img src="@/assets/Instagram.png" alt="Instagram" class="instagram-icon">
    </a>
  </template>
  
  <script>
  export default {
    name: 'InstagramButton',
    computed: {
      instagramLink() {
        return 'https://www.instagram.com/wyd_studio/';
      }
    }
  }
  </script>
  
  <style scoped>
  .instagram-button {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 1000;
    cursor: pointer;
  }
  
  .instagram-icon {
    width: 60px;
    height: auto;
  }
  </style>
  