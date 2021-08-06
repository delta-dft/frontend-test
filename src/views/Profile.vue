<template>
  <!-- ANCHOR Header -->
  <app-header></app-header>
  <!-- ANCHOR Subheader -->
  <div class="grid grid-cols-3 gap-4 p-4">
    <div class="text-left">
      <button @click="$router.push({ name: 'Home' })"
        class="border-primary-300 border-2 rounded border-menu-200 py-1 px-4 text-primary-500">
        Atraz
      </button>
    </div>
    <div class="text-center">
      <span class="font-bold rounded border-2 border-b-4 border-primary-300 text-primary-500 p-2 -mb-2">Mi perfil</span>
    </div>
  </div>
  <section class="flex bg-menu-200 pt-2.5 pb-1.5 ">
    <!-- ANCHOR Tools sidebar -->
    <div class="flex flex-col border sidebarstyle bg-white shadow-bottom-1 rounded   items-center ml-1.5 ">
    </div>
    <!-- ANCHOR Body, sidebar and footer -->
    <section class="flex flex-col pl-2.5 pr-1.5 flex-1">
      <!-- ANCHOR Body & sidebar-->
      <div
      class="flex justify-between pb-2.5">
        <!-- ANCHOR Body -->
        <div class="bg-white analist-panel shadow-bottom-1 rounded py-8  px-8 social-height  flex-1 ">
          <router-view/>
          <div class="grid grid-cols-7 gap-4">
            <div class="col-start-1 border rounded border-gray-200 border-solid p-4">
              <img class="w-20 h-20 rounded-full shadow mx-auto" src="@/assets/images/default_user.png" alt="profilepicture">
              <p class="font-bold">{{user.name}} {{user.lastName}}</p>
            </div>
            <div class="col-start-2 col-end-6 border rounded border-gray-200 border-solid">
              <div class="grid grid-rows-3 grid-cols-8 gap-4 p-4 text-left">
                <div class="col-span-full text-gray-400">Ficha Tecnica</div>
                <div class="text-gray-400">Nombre</div>
                <div class="col-span-2 font-bold">{{user.name}} {{user.lastName}} {{user.secondLastName}}</div>
                <div class="text-gray-400">Correo</div>
                <div class="col-span-2 font-bold">{{user.email}}</div>
                <div class="text-gray-400">Edad</div>
                <div>{{user.age}}</div>
                <div class="text-gray-400">Telefono</div>
                <div class="col-span-2 font-bold">{{user.cel}}</div>
                <div class="text-gray-400">Movil</div>
                <div class="col-span-2 font-bold">{{user.mobile}}</div>
              </div>
            </div>
            <div class="col-start-2 col-end-6 border rounded border-gray-200 border-solid">
              <div class="grid grid-rows-2 grid-cols-6 gap-4 p-4 text-left">
                <div class="text-gray-400">N° Ficha</div>
                <div class="font-bold">{{user.recordNumber}}</div>
                <div class="text-gray-400">Nivel</div>
                <div class="font-bold">{{user.level}}</div>
                <div class="text-gray-400">Antiguedad</div>
                <div class="font-bold">{{user.old}} años</div>
                <div class="text-gray-400">S. Contractual</div>
                <div class="font-bold">{{user.contractualStatus}}</div>
                <div class="text-gray-400">Especialidad</div>
                <div class="font-bold">{{user.area}}</div>
              </div>
            </div>
            <div class="col-start-2 col-end-6 border rounded border-gray-200 border-solid">
              <div class="grid grid-rows-2 gap-4 p-4 text-left">
                <div class="text-gray-400">Experiencia</div>
                <div class="font-bold">{{user.experience}}</div>
              </div>
            </div>
          </div>

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
