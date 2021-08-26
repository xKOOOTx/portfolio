<template>
  <div class="home">
    <ProfileAside />
    <HomeWelcome />
  </div>
</template>

<script>
// @ is an alias to /src

import ProfileAside from '@/views/ProfileAside.vue';
import HomeWelcome from '@/views/HomeWelcome.vue';

export default {
  name: 'Home',
  components: {
    ProfileAside,
    HomeWelcome,
  },
};
</script>
