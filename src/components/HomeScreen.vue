<template>
  <div class="container">
    <SloganText v-if="!state.isLogoSmall" />
  </div>
</template>

<script>
import { reactive } from 'vue';
import SloganText from '@/components/SloganText.vue';

export default {
  name: 'HomeScreen',
  components: {
    SloganText
  },
  setup() {
    const state = reactive({
      isLogoSmall: false,
    });

    return {
      state,
    };
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
