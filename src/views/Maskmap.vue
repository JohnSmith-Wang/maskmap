<template>  
  <div class="container-fluid">
    <div class="row">

      <div id="sidebarArea" class="col-xl-3 bg-light" :class="{'col-10':!isHide,'contentHide':isHide, 'contentDisplay':!isHide}">
        <div class="sMenu">
          <div class="col-12 sArea">
            <Selector></Selector>
          </div>
          <div class="col-12 sArea">
            <Storemenu :StoreIndex = StoreIndex></Storemenu>
          </div>
        </div>
      </div>
      
      <div id="btnArea" class="col-1" @click="changeHide">
        <i class="fas fa-chevron-right" :class="{'iconDisplay':!isHide,'iconHide':isHide}"></i>
      </div>

      <div id="mapArea" class="col-xl-9" :class="{'col-1':!isHide, 'col-11':isHide}">
        <Map :StoreIndex="StoreIndex" :selStore="SearchResult"/>
      </div>
      
    </div>
  </div>
</template>

<script>
import Selector from '@/components/Selector';
import Storemenu from '@/components/Storemenu';
import Map from '@/components/Map';

export default {
  data(){
    return{
      isHide: true
    }
  },
  components:{
    Selector,
    Storemenu,
    Map
  },
  methods:{
    EmitToMap(val){
      this.isHide = true;
      this.Search = val;
    },
    changeHide(){
      this.isHide = !this.isHide;
    },
  },
  mounted(){
    this.$store.dispatch('getdata')
  },
  computed:{
    Alldata(){
      return this.$store.getters['INIT_Data']
    },
    StoreIndex(){
      return this.$store.getters['Result_Menu']
    },
    SearchResult(){
      return this.$store.getters['Search_Result']
    }
  },
  watch:{
    SearchResult(){
      this.isHide = true
    }
  }
}
</script>

<style lang="scss" scoped>
#sidebarArea{
  margin: 0px auto;
  padding: 10px;
  height: calc(100vh - 56px);
  overflow:auto;
  .sMenu{
    margin: 10px auto;
    padding: 10px;
  }
  .sArea{
    margin: 10px auto;
  }
}

#mapArea{
  margin: 0px;
  padding: 0px;
  height: calc(100vh - 56px);
}

#btnArea{
  display: none;
  padding: 0px;
  font-size: 30px;
  color: white;
  background-color: rgb(153, 149, 149);
  text-align: center;
  i{
    margin: 10px auto;
    cursor: pointer;
  }
}

@media only screen and (max-width:1200px){
  #btnArea{
    display: block;
  }
  .contentHide{
    display: none;
  }
  .contentDisplay{
    display: block;
  }
  .iconDisplay{
    transform: rotate(180deg);
    transition: .2s ease-in-out;
  }
  .iconHide{
    transform: rotate(360deg);
    transition: .2s ease-in-out;
  }
}
</style>