<template>
  <div id="paginationArea" class="col-8 col-sm-5 col-md-4 col-lg-3 col-xl-7">

    <div id="totalpageArea">
      {{selPage}} of {{totalPage}}
    </div>

    <div id="pageArea">
      <ul class="pagination pagination-sm">
        <li class="page-item" :class="{'not-active': nowPage === 1}" @click.prevent="pageChangeEmit(nowPage-1)">
          <a class="page-link">
            <span>&lt;</span>
          </a>
        </li>

        <select class="form-control form-control-sm" v-model="selPage" @change="pageSelEmit">
          <option v-for="(item,index) in totalPage" :key="index">{{item}}</option>
        </select>

        <li class="page-item" :class="{'not-active': nowPage === totalPage}" @click.prevent="pageChangeEmit(nowPage+1)">
          <a class="page-link">
            <span>&gt;</span>
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
      return Math.ceil(this.dataLength / 5)
    }
  },
  watch:{
    nowPage(val){
      this.selPage = val;
    }
  }
}
</script>

<style lang="scss" scoped>
#paginationArea{
  margin: 0px auto;
}

#totalpageArea{
  margin: 0px auto;
  text-align: center;
}

#pageArea{
  margin: 0px auto;
  .page-item{
    cursor: pointer;
    user-select: none;
  }
  .not-active {
    visibility:hidden;
  }
}
</style>