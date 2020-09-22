<template>  
  <div class="container-fluid">
    <div class="row">

      <div id="sidebarArea" class="col-xl-3 bg-light" :class="{'col-8':!isHide,'contentHide':isHide, 'contentDisplay':!isHide}">
        <Sidebar :Alldata = "Alldata" @SearchResult="ResultHandler" @selStore="EmitToMap"/>
      </div>
      
       <div id="hideBtn" class="col-1" @click="changeHide">
         <i class="fas fa-chevron-right" :class="{'iconDisplay':!isHide,'iconHide':isHide}"></i>
       </div>

       <div id="mapArea" class="col-xl-9" :class="{'col-3':!isHide, 'col-11':isHide}">
         <Map :StoreIndex="ResultData" :selStore="Search"/>
       </div>

    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import Map from '@/components/Map';

export default {
    data(){
        return{
          Alldata:[],
          ResultData:[],
          Search:{},
          isHide:true
        }
    },
    components:{
        Sidebar,
        Map
    },
    methods:{
        getdata(){
            const api = `https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json`;
            const vm = this;
            vm.$http.get(api).then((response) => {
                response.data.features.forEach(function(item){
                  vm.Alldata.push(item)
                });
            })
        },
        ResultHandler(val){
          this.ResultData = val
        },
        EmitToMap(val){
          this.isHide = true;
          this.Search = val;
        },
        changeHide(){
          this.isHide = !this.isHide;
        }
    },
    mounted(){
      this.getdata();
    }
}
</script>

<style lang="scss" scoped>
#sidebarArea{
  margin: 0px;
  padding: 10px;
  height: 100vh;
  overflow:auto;
}

#mapArea{
  margin: 0px;
  padding: 0px;
}

#hideBtn{
  display: none;
  padding: 0px;
  font-size: 30px;
  color: white;
  background-color: rgb(153, 149, 149);
  text-align: center;
  height: 100vh;
  i{
    margin: 10px auto;
  }
}

@media only screen and (max-width:1200px){
  #hideBtn{
    display: block;
  }
  .contentHide{
    display: none;
  }
  .contentDisplay{
    display:block;
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