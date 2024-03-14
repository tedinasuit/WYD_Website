<template>
  <div class="container">
    <div class="component-container">
      <BrandingWebsite />
    </div>
    <div class="component-container">
      <InstagramPage />
    </div>
  </div>
</template>

<script>
import BrandingWebsite from '@/components/BrandingWebsite.vue';
import InstagramPage from '@/components/InstagramPage.vue';
export default {
  name: 'HomeComp',
  components: {
    BrandingWebsite,
    InstagramPage
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  justify-content: center; /* Horizontally center items */
  align-items: center; /* Vertically center items */
  margin-top: clamp(120px, 10vw, 40vh);
}

.component-container {
  margin-bottom: 100px; /* Add some space between the components */

}
</style>
