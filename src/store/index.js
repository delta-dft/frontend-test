import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {},
  },
  mutations: {
    getUser(state) {
      state.user = {
        picture: '',
        name: 'Juan',
        lastName: 'Juárez',
        secondLastName: 'Jiménez',
        email: 'jjj@broxia-int.com',
        age: 28,
        cel: '5544332211',
        mobile: '5544332211',
        recordNumber: '1122334455',
        level: 12,
        old: 6,
        contractualStatus: 'Confianza',
        status: 'Disponible',
        position: 'Superintendente',
        area: 'Geociencias',
        experience: 'Especialista en geociencias.',
      };
    },
  },
  actions: {
  },
  modules: {
  },
});
