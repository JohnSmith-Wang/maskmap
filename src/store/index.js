import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
    allData:[],
    countyMenu:[
      '基隆市','臺北市','新北市','桃園市','新竹縣','新竹市',
      '苗栗縣','臺中市','彰化縣','雲林縣','嘉義縣','嘉義市',
      '臺南市','高雄市','屏東縣','臺東縣','花蓮縣','宜蘭縣',
      '澎湖縣','金門縣','連江縣'
    ],
    townMenu:[],
    storeData:[],
    resultMenu:[],
    searchStore:{}
  },
  getters:{
    INIT_Data(state){
      return state.allData
    },
    COUNTY_Menu(state){
      return state.countyMenu
    },
    TOWN_Menu(state){
      return state.townMenu
    },
    Result_Menu(state){
      return state.resultMenu
    },
    Search_Result(state){
      return state.searchStore
    }
  },
  mutations: {
    set_data(state,data){
      let temp = JSON.stringify(data)
      state.allData = JSON.parse(temp)
    },
    set_StoreData(state,data){
      let result = []

      if(data){
        result = state.allData.filter(item => {
            return item.properties.address.substr(0,3) === data;
        })
      }

      state.storeData = result
    },
    set_TownMenu(state){
      let result = []
      let database = state.storeData
      let empty = false 

      database.forEach(item => { //從這些縣市資料中每一個去比對有沒有重複的鄉里
        let nowTown = item.properties.town //方便比對資料
        
        if(nowTown === ''){ //確認現在的nowtown是不是空字串
          empty = true //如果有空字串，就會立起旗標
        }
        
        if(result.indexOf(nowTown) === -1){ //比對result陣列，如果有相同的town，不放進目錄裡面
          if(nowTown){ //如果nowTown不是空字串，才會放進去
            result.push(nowTown);
          }
        }
      })

      if(empty){
        result.push('其他') //如果empty旗標是立起來的，在「最後」塞一個"其他"
      }

      state.townMenu = result
    },
    set_ResultMenu(state,data){
      let result = []
      let database = state.storeData
      
      if(data){
        result = database.filter( item => {
          if(data === '其他'){
            return item.properties.town === ''
          }
          else{
            return item.properties.town === data
          }
        })
      }

      state.resultMenu = result
    },
    clean_all(state){
      state.resultMenu = []
    },
    search_Handler(state,data){
      state.searchStore = data
    }
  },
  actions: {
    getdata({commit}){
      axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
        .then((response)=>{
          commit('set_data',response.data.features)
        })
        .catch((error) =>{
          console.log(error.message)
        })
    },
  },
  modules: {
  }
})
