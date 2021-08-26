<template>
  <Home />
  <About />
  <Resume />
  <Portfolio />
  <ContactMe />
</template>

<script>
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Resume from '@/components/Resume.vue';
import Portfolio from '@/components/Portfolio.vue';
import ContactMe from '@/components/ContactMe.vue';

export default {
  components: {
    Home,
    About,
    Resume,
    Portfolio,
    ContactMe,
  },
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
