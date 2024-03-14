<template>
  <div class="flexbox">
    <div>
      <img src="@/assets/Figma.png" class="image">
    </div>
    <div class="text-wrap">
      <div class="title">
        <p>INSTAGRAM PAGE</p>
      </div>
      <div class="text">
        <p>lorem ipsum motherfucker lorem ipsum motherfucker lorem ipsum motherfucker lorem ipsum motherfucker lorem ipsum motherfucker</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstagramPage'
}
</script>

<style scoped>
.flexbox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
}

.image {
  width: 80%; /* Ensure image fills its container */
  max-height: 60vh; /* Limit image height to 60% of viewport height */
  object-fit: contain; /* Scale the image while preserving its aspect ratio */
}





</style>
