import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
      {Nome:"Andre",Celular:"99999-1111",Email:"Andre@hotmail.com"},
      {Nome:"Bruno",Celular:"99998-1212",Email:"Bruno@hotmail.com"},
      {Nome:"Caio",Celular:"99997-1313",Email:"Caio@hotmail.com"},
      {Nome:"Diego",Celular:"99996-1414",Email:"Diego@hotmail.com"},
      {Nome:"Edu",Celular:"99995-1515",Email:"Edu@hotmail.com"},
      {Nome:"Felipe",Celular:"99994-1616",Email:"Felipe@hotmail.com"},
      {Nome:"Guilherme",Celular:"99993-1717",Email:"Guilherme@hotmail.com"},
      {Nome:"Higor",Celular:"99992-1818",Email:"Higor@hotmail.com"}
    ],
    title:"Hello World"
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
})
