import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active1:true,
    active2:false,
  },
  mutations: {
    increment1 (state) {  
      state.active1=true;
      state.active2=false;
    },
    increment2 (state) {  
      state.active1=false;
      state.active2=true;
    }
  },
  getters: {
    
  }
})
