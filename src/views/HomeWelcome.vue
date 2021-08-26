<template>
  <div class="homeWelcome">
    <div class="homeWelcome__text">
      <h1 class="homeWelcome__text_header">Hey! My name is Alex.</h1>
      <h3 class="homeWelcome__text_subHeader">And i’m a Frontend developer</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWelcome',
};
</script>

<style scoped lang="scss">
@import '../assets/style/variables';
  .homeWelcome {
    margin-left: 299px;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    background: url("../assets/img/home/Background.jpg") center no-repeat;
    background-size: cover;
    &__text {
      margin: 0 0 250px 100px;
      color: $white;

      &_header {
        font-size: 55px;
        font-weight: 700;
        color: inherit;
      }
      &_subHeader {
        font-size: 35px;
        color: inherit;
      }
    }
  }
</style>
