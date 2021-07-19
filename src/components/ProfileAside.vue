<template>
  <aside class="profile">
    <div class="profile__avatar"></div>
    <h3 class="profile__name">Alex Gusev</h3>
    <ul class="profile__socials">
      <li class="profile__socials_element">
        <a href="#" class="profile__socials_element_link">
          <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.4302 5.06025C22.446 5.28232 22.446 5.50444 22.446 5.72651C22.446 12.5
              17.2906 20.3045 7.86802 20.3045C4.96509 20.3045 2.26841 19.4638 0 18.0044C0.412451
              18.052 0.808984 18.0679 1.2373 18.0679C3.63257 18.0679 5.83755 17.2589 7.59834
              15.8788C5.3458 15.8312 3.45811 14.356 2.80771 12.3255C3.125 12.373 3.44224 12.4048
              3.77539 12.4048C4.2354 12.4048 4.69546 12.3413 5.12373 12.2303C2.77603 11.7544
              1.01519 9.69224 1.01519 7.20176V7.13833C1.69727 7.51904 2.49048 7.75698 3.33115
              7.78867C1.95107 6.8686 1.04692 5.29819 1.04692 3.52153C1.04692 2.56978 1.30068
              1.69731 1.74487 0.935889C4.26709 4.04502 8.05835 6.07544 12.3096 6.29756C12.2303
              5.91685 12.1827 5.52031 12.1827 5.12373C12.1827 2.3001 14.4669 0 17.3064 0C18.7816 0
              20.1141 0.618652 21.05 1.61802C22.208 1.39595 23.3184 0.967627 24.302
              0.380713C23.9212 1.57046 23.1122 2.56982 22.0494 3.2043C23.0805 3.09331 24.0799
              2.80771 24.9999 2.41118C24.302 3.42637 23.4295 4.33052 22.4302
              5.06025Z" fill="white"/>
          </svg>
        </a>
      </li>
      <li class="profile__socials_element">
        <a href="#" class="profile__socials_element_link">
          <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5122 14.0625L13.2065 9.53809H8.86523V6.60205C8.86523 5.36426 9.47168
            4.15771 11.416 4.15771H13.3896V0.305664C13.3896 0.305664 11.5986 0 9.88623 0C6.31104
            0 3.97412 2.16699 3.97412
            6.08984V9.53809H0V14.0625H3.97412V25H8.86523V14.0625H12.5122Z" fill="white"/>
          </svg>
        </a>
      </li>
      <li class="profile__socials_element">
        <a href="#" class="profile__socials_element_link">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.946 5.33081C7.84058 5.33081 5.33569 7.83569 5.33569
            10.9412C5.33569 14.0466 7.84058 16.5515 10.946 16.5515C14.0515 16.5515
            16.5564 14.0466 16.5564 10.9412C16.5564 7.83569 14.0515 5.33081 10.946
            5.33081ZM10.946 14.5886C8.93921 14.5886 7.29858 12.9529 7.29858 10.9412C7.29858
            8.92944 8.93433 7.2937 10.946 7.2937C12.9578 7.2937 14.5935 8.92944 14.5935
            10.9412C14.5935 12.9529 12.9529 14.5886 10.946 14.5886ZM18.0945 5.10132C18.0945
            5.82886 17.5085 6.40991 16.7859 6.40991C16.0584 6.40991 15.4773 5.82397 15.4773
            5.10132C15.4773 4.37866 16.0632 3.79272 16.7859 3.79272C17.5085 3.79272 18.0945
            4.37866 18.0945 5.10132ZM21.8103 6.42944C21.7273 4.67651 21.3269 3.12378 20.0427
            1.84448C18.7634 0.565185 17.2107 0.164795 15.4578 0.0769043C13.6511 -0.0256348
            8.23608 -0.0256348 6.42944 0.0769043C4.6814 0.159912 3.12866 0.560303 1.84448
            1.8396C0.560303 3.1189 0.164795 4.67163 0.0769043 6.42456C-0.0256348 8.2312
            -0.0256348 13.6462 0.0769043 15.4529C0.159912 17.2058 0.560303 18.7585 1.84448
            20.0378C3.12866 21.3171 4.67651 21.7175 6.42944 21.8054C8.23608 21.908 13.6511
            21.908 15.4578 21.8054C17.2107 21.7224 18.7634 21.322 20.0427 20.0378C21.322
            18.7585 21.7224 17.2058 21.8103 15.4529C21.9128 13.6462 21.9128 8.23608 21.8103
            6.42944ZM19.4763 17.3914C19.0955 18.3484 18.3582 19.0857 17.3962 19.4714C15.9558
            20.0427 12.5378 19.9109 10.946 19.9109C9.35425 19.9109 5.9314 20.0378 4.49585
            19.4714C3.53882 19.0906 2.80151 18.3533 2.41577 17.3914C1.84448 15.9509 1.97632
            12.533 1.97632 10.9412C1.97632 9.34937 1.84937 5.92651 2.41577 4.49097C2.79663
            3.53394 3.53394 2.79663 4.49585 2.41089C5.93628 1.8396 9.35425 1.97144 10.946
            1.97144C12.5378 1.97144 15.9607 1.84448 17.3962 2.41089C18.3533 2.79175 19.0906
            3.52905 19.4763 4.49097C20.0476 5.9314 19.9158 9.34937 19.9158 10.9412C19.9158
            12.533 20.0476 15.9558 19.4763
            17.3914Z" fill="white"/>
          </svg>
        </a>
      </li>
      <li class="profile__socials_element">
        <a href="#" class="profile__socials_element_link">
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.8472 0.94184C23.0078 0.399305 22.8472 0 22.0747 0H19.5182C18.8672 0
              18.5677 0.342882 18.4071 0.724826C18.4071 0.724826 17.105 3.89757 15.2648
              5.95486C14.6701 6.54948 14.3967 6.74045 14.0712 6.74045C13.9106 6.74045
              13.6632 6.54948 13.6632 6.00694V0.94184C13.6632 0.290798 13.4809 0 12.9427
              0H8.92361C8.51562 0 8.27257 0.303819 8.27257 0.585938C8.27257 1.20226 9.19271
              1.34549 9.28819 3.0816V6.84896C9.28819 7.67361 9.14062 7.82552 8.8151 7.82552C7.94705
              7.82552 5.83767 4.63976 4.58767 0.993924C4.33594 0.286458 4.08854 0 3.43316
              0H0.876736C0.147569 0 0 0.342882 0 0.724826C0 1.40191 0.868056 4.76563 4.0408
              9.21007C6.15451 12.2439 9.13194 13.8889 11.8403 13.8889C13.4679 13.8889
              13.6675 13.5243 13.6675 12.895C13.6675 9.99566 13.52 9.72222 14.3359
              9.72222C14.7135 9.72222 15.3646 9.91319 16.8837 11.3759C18.6198 13.112
              18.9062 13.8889 19.8785 13.8889H22.4349C23.1641 13.8889 23.533 13.5243
              23.3203 12.8038C22.8342 11.2891 19.5486 8.17274 19.401 7.96441C19.0234
              7.4783 19.1319 7.26128 19.401 6.82726C19.4054 6.82292 22.526 2.43056
              22.8472 0.94184Z" fill="white"/>
          </svg>

        </a>
      </li>
      <li class="profile__socials_element">
        <a href="#" class="profile__socials_element_link">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.89648 21.8745H0.361328V7.27002H4.89648V21.8745ZM2.62646
              5.27783C1.17627 5.27783 0 4.07666 0 2.62646C1.03799e-08 1.92988 0.276716 1.26183
              0.769274 0.769274C1.26183 0.276716 1.92988 0 2.62646 0C3.32305 0 3.9911 0.276716
              4.48366 0.769274C4.97621 1.26183 5.25293 1.92988 5.25293 2.62646C5.25293 4.07666
              4.07617 5.27783 2.62646 5.27783ZM21.8701 21.8745H17.3447V14.7651C17.3447 13.0708
              17.3105 10.8979 14.9868 10.8979C12.6289 10.8979 12.2676 12.7388 12.2676
              14.6431V21.8745H7.73731V7.27002H12.0869V9.26221H12.1504C12.7559 8.11475 14.2349
              6.90381 16.4414 6.90381C21.0312 6.90381 21.875 9.92627 21.875
              13.8521V21.8745H21.8701Z" fill="white"/>
          </svg>
        </a>
      </li>
    </ul>
    <ul class="profile__menu">
      <li class="profile__menu_element" @mouseover="mouseOver"
          v-for="(item, idx) in asideMenu"
          :key="idx">
<!--        <img :src="'../assets/img/menu_' + item.icon + '.svg'" :alt=item.name>-->
        <img @mouseover="imageHover" :src=item.path :alt=item.name>
        <h3 class="profile__menu_element_name">{{ item.name }}</h3>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'ProfileAside',
  methods: {
    mouseOver: () => {
      // eslint-disable-next-line
      console.log('hover');
    },
    imageHover() {
      if (this.hover === true) {
        return this.pathHover;
      }
      return this.path;
    },
  },
  data() {
    return {
      asideMenu: [
        {
          // eslint-disable-next-line
          path: require('/src/assets/img/menu_home.svg'),
          // eslint-disable-next-line
          pathHover: require('/src/assets/img/menu_home_hover.svg'),
          icon: 'home',
          hoverIcon: '',
          link: '#',
          name: 'Home',
        },
        {
          // eslint-disable-next-line
          path: require('/src/assets/img/menu_about.svg'),
          hoverIcon: '',
          link: '#',
          name: 'About',
        },
        {
          // eslint-disable-next-line
          path: require('/src/assets/img/menu_resume.svg'),
          hoverIcon: '',
          link: '#',
          name: 'Resume',
        },
        {
          // eslint-disable-next-line
          path: require('/src/assets/img/menu_portfolio.svg'),
          hoverIcon: '',
          link: '#',
          name: 'Portfolio',
        },
        {
          // eslint-disable-next-line
          path: require('/src/assets/img/menu_contactMe.svg'),
          hoverIcon: '',
          link: '#',
          name: 'Contact Me',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import '../assets/style/_variables';

h1 {
  font-size: 36px;
  color: red;
}

.profile {
  width: 300px;
  height: 100vh;
  padding: 30px 25px 0;
  background: $darkPurple;
  &__avatar {
    width: 130px;
    height: 130px;
    margin: 0 auto;
    border-radius: 50%;
    background: url("../assets/img/aside_selfie.png") center no-repeat;
    background-size: contain;
    border: 5px solid $purple;
    //&_img {
    //  border-radius: 50%;
    //  border: 3px solid $purple;
    //}
  }
  &__name {
    margin: 25px 0;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
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
      }
    }
  }
  &__menu {
    padding: 34px  21px;
    &_element {
      display: flex;
      margin: 35px 0;
      &:hover {
        color: $lightBlue;
      }
      &_name {
        margin-left: 10px;
      }
    }
  }
}

</style>
