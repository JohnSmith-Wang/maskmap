<template>
  <div class="paginationArea col-11 col-sm-6 col-md-6 col-xl-6">

    <div class="totalpageArea">
      {{nowPage}} of {{totalPage}}
    </div>

    <div class="pageArea" aria-label="Page navigation example">
      <ul class="pagination pagination-sm">
        <li class="page-item" :class="{'not-active': nowPage === 1}" @click.prevent="pageChangeEmit(nowPage-1)">
          <a class="page-link" aria-label="Previous"  >
            <span aria-hidden="true">&lt;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>

        <select class="form-control form-control-sm" v-model="selPage" @change="pageSelEmit">
          <option v-for="(item,index) in totalPage" :key="index">{{item}}</option>
        </select>

        <li class="page-item" :class="{'not-active': nowPage === totalPage}" @click.prevent="pageChangeEmit(nowPage+1)">
          <a class="page-link" aria-label="Next" >
            <span aria-hidden="true">&gt;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      selPage:"1",
    }
  },
  props:{
    dataLength:{
      type:Number,
      required:true  
    },
    nowPage:{
      type:Number,
      required:true
    }
  },
  methods:{
    pageChangeEmit(val){
      this.$emit('pageChange',val)
    },
    pageSelEmit(val){
      let newVal = Number(val.target.value);
      this.$emit('pageChange',newVal)
    }
  },
  computed:{
    totalPage(){
      return Math.ceil(this.dataLength/4)
    },
  },
  watch:{
    nowPage(val){
      this.selPage = val;
    }
  }
}
</script>

<style lang="scss" scoped>
.not-active {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: gray;
}

.page-item{
  cursor: pointer;
  user-select: none;
}

.paginationArea{
  margin: 0px auto;
}

.pageArea{
  margin: 0px auto;
}

.totalpageArea{
  margin: 0px auto;
  text-align: center;
}

</style>