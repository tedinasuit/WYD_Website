<template>
  <div class="container">
    <div class="component-container">
      <WhoAreWe />
    </div>
    <div class="component-container">
      <ContactUs />
    </div>
  </div>
</template>

<script>
import ContactUs from '@/components/ContactUs.vue';
import WhoAreWe from '@/components/WhoAreWe.vue';
export default {
  name: 'HomeComp',
  components: {
    ContactUs,
    WhoAreWe
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
