<template>

    <div class="row justify-content-center">
      <div class="col-12 col-sm-6 col-md-6 col-xl-6 selStyle">
        <select class="form-control" v-model="selCounty" @change="selCountyHanlder">
          <option value="">請選擇縣市</option>
          <option v-for="(item,index) in CountyIndex" :key="index">{{item}}</option>
        </select>
      </div>

      <div class="col-12 col-sm-6 col-md-6 col-xl-6 selStyle">
        <select class="form-control" v-model="selTown" @change="selTownHanlder">
          <option value="">請選擇行政區</option>
          <option v-for="(item,index) in TownIndex" :key="index">{{item}}</option>
        </select>
      </div>
    </div>
 
</template>

<script>
export default {
  data(){
    return{
      selCounty:'',
      selTown:''
    }
  },
  methods:{
    selCountyHanlder(e){
      this.selTown = '';
      this.$store.commit('set_StoreData',e.target.value)
      this.$store.commit('set_TownMenu')
    },
    selTownHanlder(e){
      this.$store.commit('set_ResultMenu',e.target.value)
    }
  },
  computed:{
    CountyIndex(){
      return this.$store.getters['COUNTY_Menu']
    },
    TownIndex(){
      return this.$store.getters['TOWN_Menu']
    },
  },
  watch:{
    selCounty(){
      this.$store.commit('clean_all')
    }
  }
}
</script>

<style lang="scss" scoped>
.selStyle{
  margin: 10px auto;
}
</style>