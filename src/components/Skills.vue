<template>
  <div class="skills">
    <h1 class="skills__header">Skills</h1>
    <div class="skills__block">
      <div class="skills__block_frontend skills__block_element">
        <img
          v-for="item in frontEndSkills"
          :key="item.name"
          :src=item.path
          :alt=item.name
          class="skills__block_img"
        >
      </div>
      <div class="skills__block_backend skills__block_element">
        <img
          v-for="item in backEndSkills"
          :key="item.name"
          :src=item.path
          :alt=item.name
          class="skills__block_img"
        >
      </div>
      <div class="skills__block_others skills__block_element">
        <img
          v-for="item in otherSkills"
          :key="item.name"
          :src=item.path
          :alt=item.name
          class="skills__block_img"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      frontEndSkills: [
        {
          name: 'css3',
          // eslint-disable-next-line
          path: require('../assets/img/skills/frontend/css3.svg'),
        },
        {
          name: 'sass',
          // eslint-disable-next-line
          path: require('../assets/img/skills/frontend/sass.svg'),
        },
        {
          name: 'html',
          // eslint-disable-next-line
          path: require('../assets/img/skills/frontend/html5.svg'),
        },
        {
          name: 'js',
          // eslint-disable-next-line
          path: require('../assets/img/skills/frontend/js.svg'),
        },
        {
          name: 'vueJs',
          // eslint-disable-next-line
          path: require('../assets/img/skills/frontend/vuejs.svg'),
        },
      ],
      backEndSkills: [
        {
          name: 'npm',
          // eslint-disable-next-line
          path: require('../assets/img/skills/backend/npm.svg'),
        },
        {
          name: 'nodeJs',
          // eslint-disable-next-line
          path: require('../assets/img/skills/backend/node.svg'),
        },
        {
          name: 'php',
          // eslint-disable-next-line
          path: require('../assets/img/skills/backend/php.svg'),
        },
      ],
      otherSkills: [
        {
          name: 'github',
          // eslint-disable-next-line
          path: require('../assets/img/skills/others/github.svg'),
        },
        {
          name: 'gitlab',
          // eslint-disable-next-line
          path: require('../assets/img/skills/others/gitlab.svg'),
        },
        {
          name: 'stackoverflow',
          // eslint-disable-next-line
          path: require('../assets/img/skills/others/stack-overflow.svg'),
        },
        {
          name: 'google',
          // eslint-disable-next-line
          path: require('../assets/img/skills/others/google.svg'),
        },
        {
          name: 'figma',
          // eslint-disable-next-line
          path: require('../assets/img/skills/others/figma.svg'),
        },
        {
          name: 'gulp',
          // eslint-disable-next-line
          path: require('../assets/img/skills/others/gulp.svg'),
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  .skills {
    margin: 150px 0 100px;
    height: 100vh;
    &__header {
      text-decoration: underline;
    }
    &__block {
      margin-top: 150px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      row-gap: 50px;
      &_img {
        width: 100px;
        height: 100px;
        &:not(:last-child) {
          margin-right: 60px;
        }
      }
      &_element {
        display: flex;
      }
      &_frontend {
      }
    }
  }
</style>
