<template>

    <div class="row justify-content-center">
      <div class="col-12 col-sm-6 col-md-6 col-xl-6 selStyle">
        <select class="form-control" v-model="selCounty" @change="selCountyHanlder">
          <option value="">請選擇縣市</option>
          <option v-for="(item,index) in CountyList" :key="index">{{item}}</option>
        </select>
      </div>

      <div class="col-12 col-sm-6 col-md-6 col-xl-6 selStyle">
        <select class="form-control" v-model="selTown" @change="selTownHanlder">
          <option value="">請選擇行政區</option>
          <option v-for="(item,index) in TownList" :key="index">{{item}}</option>
        </select>
      </div>
    </div>
 
</template>

<script>
export default {
  data(){
    return{
      CountyList:[
        '基隆市','臺北市','新北市','桃園市','新竹縣','新竹市',
        '苗栗縣','臺中市','彰化縣','雲林縣','嘉義縣','嘉義市',
        '臺南市','高雄市','屏東縣','臺東縣','花蓮縣','宜蘭縣',
        '澎湖縣','金門縣','連江縣'
      ],
      selCounty:'',
      selTown:''
    }
  },
  props:{
    TownList:{
      type:Array,
      required:true
    }
  },
  methods:{
    selCountyHanlder(e){
      this.selTown = '';
      this.$emit('selCounty',e.target.value);
    },
    selTownHanlder(e){
      this.$emit('selTown',e.target.value);
    }
  },
}
</script>

<style lang="scss" scoped>
.selStyle{
  margin: 10px auto;
}
</style>