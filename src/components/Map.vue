<template>

        <l-map id="mapBody" ref="myMap" :zoom="zoom" :center="center">

          <l-tile-layer :url="url" :attribution="attribution" :noWrap="noWrap"/>
          <v-marker-cluster>
          <l-marker ref="location" :lat-lng="CorrectCoord(item.geometry.coordinates)" v-for="item in StoreIndex" :key="item.properties.id">
            <l-icon :icon-url="item.properties.name ===Search?icon.type.gold:icon.type.black"
                    :shadow-url="icon.shadowUrl"
                    :icon-size="icon.iconSize"
                    :icon-anchor="icon.iconAnchor"
                    :popup-anchor="icon.popupAnchor"
                    :shadow-size="icon.shadowSize"
            />
            <l-popup>

              <div class="card" style="width: 18rem;">
                <div class="card-header  bg-success text-light" style="font-size:20px">
                  {{item.properties.name}}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><strong>地址: </strong><br>{{item.properties.address}}</li>
                  <li class="list-group-item"><strong>電話: </strong><br>{{item.properties.phone}}</li>
                  <li class="list-group-item"><strong>備註: </strong><br>{{item.properties.note}}</li>
                </ul>
                <div class="card-body text-center">
                  <table>
                    <td width="500px"><span  id="maskCounter" class="btn btn-lg" :class="maskColor(item.properties.mask_adult)"><strong>成人 </strong><br>{{item.properties.mask_adult}}</span></td>
                    <td width="500px"><span  id="maskCounter" class="btn btn-lg" :class="maskColor(item.properties.mask_child)"><strong>小孩 </strong><br>{{item.properties.mask_child}}</span></td>
                  </table>
                </div>
              </div>

            </l-popup>
          </l-marker>
          </v-marker-cluster>

        </l-map>
</template>

<script>
export default {
  data(){
    return{
      url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
      zoom:7,
      noWrap:true,
      center:[23.583234, 120.582597],
      Search:'',
      icon: {
        type: {
          black:
            "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
          gold:
            "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
        },
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }
    }
  },
  props:{
    StoreIndex:{
      type:Array,
      required:true
    },
    selStore:{
      type:Object
    }
  },
  methods:{
    CorrectCoord(val){
      let Result=[];

      Result = [val[1],val[0]];

      return Result
    },
    maskColor(val){
        if(val === 0){
          return 'btn-danger';
        }
        else if(val <= 100){
          return 'btn-warning';
        }
        else{
          return 'btn-info';
        }             
      }
  },
  watch:{
    StoreIndex:function(val){
      if(val.length>0){
        const coords = [val[0].geometry.coordinates[1],val[0].geometry.coordinates[0]]
        const option = {
          duration:2
        }

        this.$nextTick(()=>{
          this.$refs.myMap.mapObject.setView(
            coords,
            11.5,
            option
          )
        })
      }
    },
    selStore:function(val){
      const coords = [val.geometry.coordinates[1],val.geometry.coordinates[0]]
      const option = {
          duration:2
      }

      this.$nextTick(() => {
        this.$refs.myMap.mapObject.setView(
          coords,
          25,
          option
        )
        this.Search = val.properties.name
      })
    }
  }
}
</script>

<style lang="scss" scoped>

#maskCounter{
  padding: 0px 30px;
  pointer-events: none;
  cursor: default;
}

#mapBody{
  height: 100vh;
  width: 100%;
}

</style>



