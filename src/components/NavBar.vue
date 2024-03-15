<template>
  <div class="navbar-background">
    <nav class="navbar">
      <ul>
        <li><router-link to="/">OUR WORK</router-link></li>
        <li><router-link to="/about-us">ABOUT US</router-link></li>
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
@media (orientation: landscape) {
  .navbar-background {
  position: fixed;
  top: 0;
  width: 100%;
  height: clamp(100px, 8vw, 40vh);
  filter: drop-shadow(1vw 0.0vw 7px #0000000e); 
  background-image: inherit;
  left: 0;
  background-image: url('@/assets/hippie-achtergrond-2.png');
  background-size: cover; /* Scales image to cover the entire container */
  transition: background-image 0.5s ease; /* Apply transition to background image */
}
}

@media (orientation: portrait) {
  .navbar-background {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  background-image: url('@/assets/hippie-achtergrond-2.png');
  background-repeat: no-repeat;
  background-position-x: center;
  transition: background-image 0.5s ease; /* Apply transition to background image */
}
}

.navbar {
  padding: 10px;
}

ul {
  display: flex;
  justify-content: center; /* Horizontally center items */
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin-right: 15vh; /* Set margin between items */
  margin-left: 15vh;  
  margin-top: 4rem;
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