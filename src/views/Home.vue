<template>
  <div class="home">
    <ProfileAside />
  </div>
</template>

<script>
// @ is an alias to /src

import ProfileAside from '@/components/ProfileAside.vue';

export default {
  name: 'Home',
  components: {
    ProfileAside,
  },
};
</script>
