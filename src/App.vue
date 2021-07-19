<template>
  <Home />
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  components: { Home },
};
</script>
<style lang="scss">
@import './assets/style/style';
@import './assets/style/_variables';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
