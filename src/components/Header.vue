<template>
  <section class="flex flex-col">
    <div class="flex justify-between py-2.5 px-6">
      <div class="flex items-center">
        <img @click="$router.push({ name: 'Home' })" class="w-32 h-12" style="cursor:pointer;" src="@/assets/images/logo_broxia.png" alt="Logo">
      </div>
      <div class="relative flex items-center dropdown">
        <span class="bg-menu-100 rounded-lg w-0.5 h-7 mx-5"></span>
        <!-- NOTE User Info -->
        <div class=" relative inline-block text-left dropdown">
          <span id="Drop" class="rounded-md shadow-sm">
            <button @click="showDrop = !showDrop"
            id="ButtonUser"
            class="flex items-center justify-between w-56 relative hover:border-primary-300 border-2 border-menu-200 rounded-full py-1 px-4 dropdown focus:outline-none space-x-2">
              <div class="flex w-5/6">
                <img v-if="user.picture" class="w-9 h-9 rounded-full shadow" :src="user.picture" alt="profilepicture">
                <img v-else class="w-9 h-9 rounded-full shadow" src="@/assets/images/default_user.png" alt="profilepicture">
                <div class="flex flex-col pr-6 justify-start w-11/12 mx-2">
                  <p class="flex text-primary-900 text-sm truncate">{{user.name}}  {{user.lastName}}</p>
                  <div class="flex items-center justify-center">
                    <span class="w-2 h-2 rounded-full flex-none mr-0.5"></span>
                    <p class="flex-1 text-gray-500 text-xs text-left capitalize m-0.5">{{user.status}}</p>
                  </div>
                </div>
              </div>
            </button>
          </span>
          <div v-show="showDrop" class="absolute w-48 transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 z-50 bg-white">
            <div class="absolute ml-5 w-full  mt-2 panelSytle  bg-white  divide-gray-100 rounded-md shadow-lg outline-none p-2 space-y-2" >
              <ul>
                <li @click="goToProfile" class="flex flex-row px-2 hover:bg-primary-300  w-full h-9 rounded group heigthOption justify-around items-center cursor-pointer space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path class="fill-current text-menu-400 group-hover:text-white"  d="M10.5001 20.001C8.98816 20.0053 7.49532 19.6632 6.1361 19.001C5.63865 18.759 5.16203 18.4764 4.7111 18.156L4.5741 18.056C3.33392 17.1406 2.31997 15.9532 1.6101 14.585C0.875836 13.1689 0.495007 11.5961 0.500049 10.001C0.500049 4.47813 4.97725 0.000976562 10.5001 0.000976562C16.0229 0.000976562 20.5001 4.47813 20.5001 10.001C20.5051 11.5954 20.1247 13.1674 19.3911 14.583C18.6822 15.9504 17.6697 17.1374 16.4311 18.053C15.9639 18.395 15.468 18.6961 14.9491 18.953L14.8691 18.993C13.509 19.6587 12.0144 20.0035 10.5001 20.001ZM10.5001 15.001C9.00158 14.998 7.62776 15.835 6.9431 17.168C9.18449 18.2782 11.8157 18.2782 14.0571 17.168V17.163C13.3716 15.8315 11.9977 14.9964 10.5001 15.001ZM10.5001 13.001C12.6662 13.0038 14.6635 14.1711 15.7291 16.057L15.7441 16.044L15.7581 16.032L15.7411 16.047L15.7311 16.055C18.2601 13.8701 19.1644 10.3433 17.9987 7.21108C16.8331 4.07885 13.8432 2.00129 10.5011 2.00129C7.15901 2.00129 4.16909 4.07885 3.00345 7.21108C1.83781 10.3433 2.7421 13.8701 5.2711 16.055C6.33736 14.17 8.33446 13.0036 10.5001 13.001ZM10.5001 12.001C8.29096 12.001 6.5001 10.2101 6.5001 8.00098C6.5001 5.79184 8.29096 4.00098 10.5001 4.00098C12.7092 4.00098 14.5001 5.79184 14.5001 8.00098C14.5001 9.06184 14.0787 10.0793 13.3285 10.8294C12.5784 11.5795 11.561 12.001 10.5001 12.001ZM10.5001 6.00098C9.39553 6.00098 8.5001 6.89641 8.5001 8.00098C8.5001 9.10555 9.39553 10.001 10.5001 10.001C11.6047 10.001 12.5001 9.10555 12.5001 8.00098C12.5001 6.89641 11.6047 6.00098 10.5001 6.00098Z" fill="#6B7588"/>
                  </svg>
                  <span class="w-4/5 group-hover:text-white hover:font-semibold">Mi perfil</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      showDrop: false,
      userMenu: false,
    };
  },
  computed: mapState({
    user(state) {
      return state.user;
    },
  }),
  mounted() {
    this.$store.commit('getUser');
  },
  methods: {
    toggleDropdown() {
      this.userMenu = !this.userMenu;
    },
    goToProfile() {
      this.showDrop = false;
      this.$router.push({ name: 'Profile' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
