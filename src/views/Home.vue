<template>
  <!-- ANCHOR Header -->
  <app-header></app-header>
  <!-- ANCHOR Subheader -->
  <div class="flex flex-row h-14 px-5 border-b border-dashed border-primary-300">
    <div class="flex flex-row items-center text-left mx-2">
      {{user.position}}
    </div>
    <div class="flex flex-row items-center text-left mx-2">
      <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.46495 17.485L9.94995 8.99999L1.46495 0.514984L0.0499516 1.92898L7.12195 8.99999L0.0499516 16.071L1.46495 17.485Z" fill="#6B7588"/>
        </svg>
    </div>
    <div class="flex items-center text-left mx-2 text-primary-500 font-semibold">
      {{user.area}}
    </div>
  </div>
  <section class="flex bg-menu-200 pt-2.5 pb-1.5 ">
    <!-- ANCHOR Tools sidebar -->
    <div class="flex flex-col border sidebarstyle bg-white shadow-bottom-1 rounded   items-center ml-1.5 ">
      <button class="flex flex-col focus:outline-none justify-center items-center">
        <div class="flex w-10 h-10 items-center justify-center mt-6  rounded  backbotton p-2.5">
          <img class="w-7 h-7" src="@/assets/icons/flow_dark.svg" alt="monitoreo">
        </div>
        <p class="text-xs pt-2">Catálogo</p>
      </button>
      <button class="flex flex-col focus:outline-none justify-center items-center">
        <div class="flex w-10 h-10 items-center justify-center mt-6  rounded backbotton p-2.5">
          <img class="w-7 h-7" src="@/assets/icons/user_flow_dark.svg" alt="area">
        </div>
        <p class=" text-xs pt-2">Mis flujos</p>
      </button>
      <button class="flex flex-col focus:outline-none justify-center items-center">
        <div class="flex w-10 h-10 flex-col items-center justify-center mt-6  rounded  backbotton p-2.5">
          <img class="w-7 h-7" src="@/assets/icons/library_dark.svg" alt="monitoreoB">
        </div>
        <p class="text-xs pt-2">Biblioteca</p>
      </button>
    </div>
    <!-- ANCHOR Body, sidebar and footer -->
    <section class="flex flex-col pl-2.5 pr-1.5 flex-1">
      <!-- ANCHOR Body & sidebar-->
      <div
      class="flex justify-between pb-2.5">
        <!-- ANCHOR Body -->
        <div class="bg-white analist-panel shadow-bottom-1 rounded py-8  px-8 social-height  flex-1 ">
          <router-view/>
        </div>
      </div>
      <!-- ANCHOR footer -->
      <footer class="flex justify-end w-full bg-white rounded border ">
        <div class="relative flex justify-center items-center w-14 h-14 p-2.5">
          <img class="w-8 h-8 rounded-full shadow-bottom-2" src="@/assets/images/default_user.png" alt="default">
          <span class="absolute w-3 h-3 border-2 border-white bg-primary-400 rounded-full bottom-2 right-2"></span>
        </div>
        <div class="flex items-center px-5">
          <button class="flex flex-row focus:outline-none bg-primary-100 h-7 w-32 px-1.5">
            <div class="flex h-full w-1/2 items-center">
              <!-- <img src="@/assets/icons/generals/user_gray.svg" alt=""> -->
              <div class="flex rounded-full bg-primary-500 w-2 h-2 ml-2"></div>
            </div>
            <div class="h-full w-1/2 items-center font-monserrat">
            <span class="chatfont">Chat(15)</span>
            </div>
          </button>
        </div>
      </footer>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      userMenu: true,
    };
  },
  computed: mapState({
    user(state) {
      return state.user;
    },
  }),
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
<style scoped>
.social-height{
  max-height: calc(100vh - 208px);
}
.analist-panel{
  height: calc(100vh - 214px);
}
.sidebarstyle{
  width: 70px;
}
.lock:hover .icon-unlock,
.lock .icon-lock {
  display: none;
}
.lock:hover .icon-lock {
  display: inline;
}
.linkbotton:hover  p{
  color: #00B050;
  font-weight: 600;
}
.linkbotton:hover .backbotton{
  background: #CBF3D2;
}
.chatfont{
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #00B050;
}
</style>
