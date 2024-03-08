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
  z-index: 0; /* Ensure the navbar stays on top of other content */
}

.navbar {
  padding: 10px;
  min-width: 700px;
}

ul {
  display: flex;
  justify-content: center; /* Horizontally center items */
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin-right: 200px; /* Set margin between items */
  margin-left: 200px;
  margin-top: 3.5%;
}

a {
  color: white;
  text-decoration: none;
  font-family: "League Spartan", sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 2vh; /* Adjust the font size as needed */
}

a:hover {
  text-decoration: underline;
}
</style>
