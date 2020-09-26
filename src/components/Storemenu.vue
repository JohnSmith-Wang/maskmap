<template>
 <div>
   <div class="col-12">
      <Pagination v-if="StoreIndex.length > 0" :dataLength="StoreIndex.length" :nowPage="nowPage" @pageChange="pageChangeHandler"></Pagination>
    </div>
    <div class="col-12">
      <Storecard :StoreIndex="pageStoreIndex"></Storecard>
    </div>
  </div>
</template>

<script>
import Storecard from '@/components/Storecard';
import Pagination from '@/components/Pagination';
export default {
  data(){
    return{
      nowPage:1
    }
  },
  props:{
    StoreIndex:{
      type:Array,
      required:true
    }
  },
  components:{
    Storecard,
    Pagination
  },
  methods:{
    pageChangeHandler(val){
      this.nowPage = val
    },
  },
  computed:{
    pageStoreIndex(){
      let result = []
      let temp = (this.nowPage-1)*5

     if(this.StoreIndex.length > 0){
        for(let i=0;i<5;i++){
          if(this.StoreIndex[i+temp]){
            result.push(this.StoreIndex[i+temp]);
          }
        }
      }
      return result
    }
  },
  watch:{
    StoreIndex(){
      this.nowPage = 1;
    }
  }
}
</script>