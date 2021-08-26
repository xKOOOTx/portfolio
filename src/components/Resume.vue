<template>
  <div class="resume">
    <h1 class="resume__header">resume</h1>
    <div class="resume__info">
      <div class="resume__info_element">
        <h3 class="resume__info_element_header">Alex Gusev</h3>
        <p class="resume__info_element_text">
          Innovative and deadline-driven Graphic Designer with 3+ years of
          experience designing and developing user-centered digital/print marketing
          material from initial concept to final, polished deliverable.
        </p>
        <ul class="resume__info_element_list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <div class="resume__info_element">
        <h3 class="resume__info_element_header">Alex Gusev</h3>
        <p class="resume__info_element_text">
          Innovative and deadline-driven Graphic Designer with 3+ years of
          experience designing and developing user-centered digital/print marketing
          material from initial concept to final, polished deliverable.
        </p>
        <ul class="resume__info_element_list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <div class="resume__info_element">
        <h3 class="resume__info_element_header">Alex Gusev</h3>
        <p class="resume__info_element_text">
          Innovative and deadline-driven Graphic Designer with 3+ years of
          experience designing and developing user-centered digital/print marketing
          material from initial concept to final, polished deliverable.
        </p>
        <ul class="resume__info_element_list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <div class="resume__info_element">
        <h3 class="resume__info_element_header">Alex Gusev</h3>
        <p class="resume__info_element_text">
          Innovative and deadline-driven Graphic Designer with 3+ years of
          experience designing and developing user-centered digital/print marketing
          material from initial concept to final, polished deliverable.
        </p>
        <ul class="resume__info_element_list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
};
</script>

<style scoped lang="scss">
@import '../assets/style/variables';
  .resume {
    margin-left: 300px;
    padding: 0 40px 60px;
    &__header {
      margin-bottom: 60px;
      text-transform: capitalize;
      text-decoration: underline;
    }
    &__info {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      row-gap: 20px;
      //column-gap: 20px;
      &_element {
        max-width: 550px;
        padding: 20px;
        border-radius: 5px;
        background: $greyLighter;
        &_header {
          color: $black;
        }
        &_text {
          margin: 10px 0;
          font-style: italic;
        }
        &_list {
          margin-left: 15px;
          & li {
            list-style: disc;
          }
        }
      }
    }
  }
</style>
