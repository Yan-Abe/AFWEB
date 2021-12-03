import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
      {Nome:"HONDA CG 160 FAN",Preco:"R$ 16.900",Info:"2021/2022 0KM",Foto:"https://cdn.carrosp.com.br/img/4/full/honda-cg-160-2022-piracicaba-992956e9263eba36e3a061413639966c.jpg"},
      {Nome:"HONDA CBR 1000RR FIREBLADE",Preco:"R$ 56.500",Info:"2012/2012 31.000KM",Foto:"https://carbon2race.com/wp-content/uploads/2015/11/20160422_155119.jpg"},
      {Nome:"YAMAHA MT-03 ABS",Preco:"R$ 24.800",Info:"2019/2020 3.150KM",Foto:"https://http2.mlstatic.com/D_NQ_NP_705170-MLB46180784035_052021-O.jpg"},
      {Nome:"DUCATI PANIGALE V4 S",Preco:"R$ 118.000",Info:"2019/2019 680KM",Foto:"https://motomovimento.com.br/wp-content/uploads/2020/07/Ducati-Panigale-V4-S-06.jpg"},
      {Nome:"HONDA XRE 300",Preco:"R$ 26.989",Info:"2021/2022 0KM",Foto:"https://image.webmotors.com.br/_fotos/AnuncioMotoNovos/gigante/2021/202104/20210420/honda-xre-300-abs-wmimagem12253219182.jpg"},
      {Nome:"BMW F 850 GS",Preco:"R$ 64.000",Info:"2020/2020 6900KM",Foto:"https://http2.mlstatic.com/D_NQ_NP_804166-MLB47660803789_092021-W.jpg"},
      {Nome:"YAMAHA NEO CVT 115",Preco:"R$ 6.500",Info:"2007/2008 43.935KM",Foto:"https://www.moto.com.br/img/2007/06/04/img6872-1180954422-v580x435.jpg"},
      {Nome:"TRIUMPH TIGER 800XC",Preco:"R$ 43.488",Info:"2015/2015 43.000KM",Foto:"https://i.pinimg.com/736x/dd/f5/db/ddf5dbf920caf2a96a35d03c93e1326e--mona-grant.jpg"}
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
