<template>
  <aside class="profile">
    <div class="profile__avatar"></div>
    <h3 class="profile__name">Alex Gusev</h3>
    <ul class="profile__socials">
      <li
        class="profile__socials_element"
        v-for="item in asideSocials"
        :key="item.name"
      >
        <a
          :href=item.link target="_blank"
          class="profile__socials_element_link"
        >
          <img :src=item.img :alt=item.name class="profile__socials_element_link_img">
        </a>
      </li>
    </ul>
    <ul class="profile__menu">
      <li
        class="profile__menu_element"
        v-for="item in asideMenu"
        :key="item.asideLinkName"
      >
          <a
            href="#"
            class="profile__menu_element_link"
          >
            <img
              :src=item.img
              :alt=item.name class="profile__menu_element_img"
            >
            <h3 class="profile__menu_element_name">{{ item.asideLinkName }}</h3>
          </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'ProfileAside',
  data() {
    return {
      asideSocials: [
        {
          name: 'telegram',
          link: 'https://t.me/xkoootx',
          img: require('../assets/img/socials/telegram.svg'),
        },
        {
          name: 'facebook',
          link: '',
          img: require('../assets/img/socials/facebook.svg'),
        },
        {
          name: 'instagram',
          link: '',
          img: require('../assets/img/socials/instagram.svg'),
        },
        {
          name: 'vk',
          link: 'https://vk.com/id3137887',
          img: require('../assets/img/socials/vk.svg'),
        },
        {
          name: 'linkedIn',
          link: '',
          img: require('../assets/img/socials/linkedin.svg'),
        },
      ],
      asideMenu: [
        {
          asideLinkName: 'Home',
          img: require('../assets/img/menuIcons/menu_home.svg'),
          link: '/',
        },
        {
          asideLinkName: 'About',
          img: require('../assets/img/menuIcons/menu_about.svg'),
          link: '',
        },
        {
          asideLinkName: 'Resume',
          img: require('../assets/img/menuIcons/menu_resume.svg'),
          link: '',
        },
        {
          asideLinkName: 'Portfolio',
          img: require('../assets/img/menuIcons/menu_portfolio.svg'),
          link: '',
        },
        {
          asideLinkName: 'Contact Me',
          img: require('../assets/img/menuIcons/menu_contactMe.svg'),
          link: '',
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
@import '../assets/style/variables';

.profile {
  position: fixed;
  width: 300px;
  height: 100vh;
  padding: 30px 25px 0;
  background: $darkPurple;
  overflow-y: auto;
  &__avatar {
    width: 130px;
    height: 130px;
    margin: 0 auto;
    border-radius: 50%;
    background: url("../assets/img/aside_selfie.png") center no-repeat;
    background-size: contain;
    border: 5px solid $purple;
  }
  &__name {
    margin: 25px 0;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: $white;
  }
  &__socials {
    display: flex;
    justify-content: space-between;
    max-width: 250px;
    width: 100%;
    padding: 4px 16px;
    border-radius: 17px;
    background: rgba($purple, .5);
    &_element {
      &_link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: $purple;
        box-shadow: 2px 2px 4px 0 rgba($black, .25);
        transition: all .2s ease-in-out;
        &:hover {
          transform: scale(1.4);
          box-shadow: 2px 2px 4px 2px rgba($black, .25);
        }
      }
    }
  }
  &__menu {
    padding: 34px  21px;
    &_element {
      margin: 35px 0;
      &_link {
        display: flex;
        text-transform: capitalize;
        color: $white;
        &:hover {
          & .profile__menu_element_name {
            color: $lightBlue;
          }
        }
      }
      &_name {
        margin-left: 10px;
        transition: color .2s ease-in-out;
        color: $white;

      }
    }
  }
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: $darkPurple;
  }
  &::-webkit-scrollbar-thumb {
    background: $grey;
  }
}

</style>
