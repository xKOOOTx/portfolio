<template>
  <div class="portfolio">
    <h1 class="portfolio__header">portfolio</h1>
    <div class="portfolio__block">
      <a
        :href="item.siteLink"
        class="portfolio__block_element"
        v-for="item in portfolioData"
        :key="item.name"
        :style="'background: url(' + item.imgPath + ')'"
      >
        <div class="portfolio__block_element_description">
          <h3
            class="portfolio__block_element_description_text"
          >Какое-то короткое описание сайта</h3>
          <a
            target="_blank"
            :href="item.siteLink"
            class="portfolio__block_element_description_link"
          >{{ item.siteLink}}</a>
          <div class="portfolio__block_element_description_tags">
            <p
              class="portfolio__block_element_description_tags_element"
              v-for="(element, idx) in item.techsTags"
              :key="idx"
            >
              {{ element }}
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      portfolioData: [
        {
          siteName: 'bezugolnikov',
          // eslint-disable-next-line
          imgPath: require('../assets/img/home/Background.jpg'),
          siteLink: 'https://bezugolnikov.ru/',
          techsTags: [
            'html',
            'scss',
            'vue.js',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/style/variables';
.portfolio {
  margin-left: 300px;
  padding: 60px 40px;
  &__block {
    display: flex;
    flex-wrap: wrap;
    margin: 40px 0;
    column-gap: 30px;
    row-gap: 20px;
    &_element {
      position: relative;
      width: 350px;
      height: 300px;
      border-radius: 10px;
      background-position: center!important;
      background-repeat: no-repeat!important;
      background-size: cover!important;
      transition: height .2s ease-in-out;
      overflow: hidden;
      &_description {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 10px;
        background: rgba($grey, .7);
        transition: height .2s ease-in-out;
        &_link {
          font-family: Open Sans;
          display: inline-block;
          width: 40%;
          position: relative;
          color: $textHeaders;
          text-decoration: none;
          &:after {
            position: absolute;
            content: '';
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: $textHeaders;
            transition: width .2s ease-in-out;
          }
          &:hover {
            &:after {
              width: 100%;
            }
          }
        }
        &_tags {
          display: flex;

          &_element {
            background: $white;
            padding: 3px 10px;
            border-radius: 3px;
            transition: all .2s ease-in-out;
            &:not(:last-child) {
              margin-right: 10px;
            }
            &:hover {
              color: $white;
              background: $lightBlue;
            }
          }
        }
      }
      &:hover {
        & .portfolio__block_element_description {
          height: 50%;
          opacity: 1;
        }
      }
    }
  }
}
</style>
