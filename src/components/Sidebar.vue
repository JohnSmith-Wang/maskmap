<template>
  <div class="row sMenu">
    <div class="col-12 sArea">
      <Selector :TownList="TownIndex" @selCounty="selCountyHandler" @selTown="selTownHandler"></Selector>
    </div>
    <div class="col-12 sArea">
      <Pagination v-if="IndexLength > 0" :dataLength="IndexLength" :nowPage="nowPage" @pageChange="pageChangeHandler"></Pagination>
    </div>
    <div class="col-12 sArea">
      <Storecard :StoreIndex="PageStoreIndex" @selStore="emitToHome"></Storecard>
    </div>
  </div>
</template>

<script>
import Selector from '@/components/Selector'
import Storecard from '@/components/Storecard'
import Pagination from '@/components/Pagination'

export default {
  name:'Sidebar',
  data(){
    return{
      tempResult:[],
      selCounty:'',
      selTown:'',
      nowPage:1
    }
  },
  components:{
    Selector,
    Storecard,
    Pagination
  },
  props:{
    Alldata:{
      type:Array,
      required:true
    }
  },
  methods:{
    selCountyHandler(val){
      this.selCounty = val;
      this.nowPage = 1;
    },
    selTownHandler(val){
      this.selTown = val;
      this.nowPage = 1;
    },
    pageChangeHandler(val){
      this.nowPage = val;
    },
    emitToHome(val){
      this.$emit('selStore',val)
    }
  },
  computed:{
    TownIndex(){
      let Result=[];
      let temp=[];
      let haveEmpty = false;

      if(this.selCounty){
        temp = this.Alldata.filter(item => {
            return item.properties.address.substr(0,3) === this.selCounty;
        })
      }

      temp.forEach(item => {
        let townTemp = item.properties.town;
        if(item.properties.town === ''){
          haveEmpty = true
        }
        if(Result.indexOf(townTemp) === -1){
          if(townTemp){
            Result.push(townTemp);
          }
        }
      })

      if(haveEmpty){
        haveEmpty = false;
        Result.push('其他');
      }

      return Result;
    },
    StoreIndex(){
      let Result =[];
      let temp=[];
      if(this.selCounty){
        temp = this.Alldata.filter(item => {
            return item.properties.address.substr(0,3) === this.selCounty;
        })
      }
      if(this.selTown){
        Result = temp.filter(item => {
          if(this.selTown === '其他'){
            return item.properties.town === '';
          }
          else{
            return item.properties.town === this.selTown;
          }
        })
      }

      return Result
    },
    PageStoreIndex(){
      let Result=[];
      let PageTemp = (this.nowPage-1)*4
      if(this.StoreIndex.length > 0){
        for(let i=0;i<4;i++){
          if(this.StoreIndex[i+PageTemp]){
            Result.push(this.StoreIndex[i+PageTemp]);
          }
        }
      }
      return Result
    },
    IndexLength(){
      let DataLength;
      DataLength = this.StoreIndex.length
      return DataLength;
    }
  },
  watch:{
    StoreIndex:function(val){
      this.$emit('SearchResult',val)
    }
  }
}
</script>

<style lang="scss" scoped>
.sMenu{
  margin: 10px auto;
  padding: 10px;
}
.sArea{
  margin: 10px auto;
}
</style>