<template>
  <div class="storeMenu">

    <div class="card storeCard" 
         :class="item.properties.name === TargetStore? 'bg-danger':'bg-success'" 
         v-for="item in StoreIndex" 
         :key="item.properties.id" 
         @click.prevent="selStoreHandler(item)">

       <div class="card-header text-light storeName">
         {{item.properties.name}}
       </div>

       <ul class="list-group list-group-flush storeInfo">

         <li class="list-group-item" :class="item.properties.name === TargetStore? 'list-group-item-danger':'' ">
           <strong>地址: </strong><br>{{item.properties.address}}
         </li>

         <li class="list-group-item" :class="item.properties.name === TargetStore? 'list-group-item-danger':'' ">
           <strong>電話: </strong>
           <br>{{item.properties.phone}}
         </li>

         <li class="list-group-item" :class="item.properties.name === TargetStore? 'list-group-item-danger':'' ">
           <strong>備註: </strong>
           <br>{{item.properties.note}}
         </li>

         <li class="list-group-item" :class="maskColor(item.properties.mask_adult)">
           <strong>成人口罩: </strong>{{item.properties.mask_adult}}
         </li>

         <li class="list-group-item" :class="maskColor(item.properties.mask_child)">
           <strong>小孩口罩: </strong>{{item.properties.mask_child}}
         </li>

       </ul>

    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      TargetStore:"",
    }
  },
  props:{
    StoreIndex:{
      type:Array,
      required:true
    }
  },
  methods:{
    maskColor(val){
      if(val === 0){
        return 'list-group-item-danger';
      }
      else if(val <= 100){
        return 'list-group-item-warning';
      }
      else{
        return 'list-group-item-info';
      }             
    },
    selStoreHandler(val){
      this.TargetStore = val.properties.name;
      this.$store.commit('search_Handler',val)
    }
  }
}
</script>

<style lang="scss" scoped>
.storeMenu{
  margin: 10px auto;
}

.storeCard {
  cursor: pointer;
  max-width: 20rem;
  margin: 10px auto;
  opacity: .4;
  .storeName{
    font-size:20px
  }
}

.storeCard:hover{
  opacity: 1;
  transition: .5s;
}

.bg-danger{
  opacity: 1;
}
</style>