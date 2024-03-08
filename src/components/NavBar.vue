<template>
    <div class="navbar-background">
      <nav class="navbar">
        <ul>
          <li><a href="#">OUR WORK</a></li>
          <li><a href="#">ABOUT US</a></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  .navbar-background {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1; /* Ensure the navbar stays on top of other content */
  }
  
  .navbar {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    min-width: 700px;
  }
  
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin-right: 100px; /* Set margin between items */
  }
  
  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  