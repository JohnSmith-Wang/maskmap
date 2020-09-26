<template>
  <div id="main" class="container-fluid">
    <div class="col-12 col-xl-6 content">
      <h4>★ 練習項目</h4>
      <ul>
        <li>leaflet 應用</li>
        <li>axios(AJAX) 應用</li>
      </ul>
    </div>
    <div class="col-12 col-xl-6 content">
      <h4>★ 功能簡述</h4>
      <ul>
        <li>選擇縣市後，再選擇行政區，下表便會顯示店家資料</li>
        <li>點擊顯示的店家資料後，地圖會自動將座標鎖定在該店家，並用紅色座標標示</li>
        <li>點擊座標會顯示該店家的詳細資料，並表示出成人口罩、小孩口罩的數量</li>
        <li>該網站支援RWD功能，一旦進入RWD模式，可以透過箭頭顯示或隱藏店家列表</li>
        <li class="text-danger">聲明:該網站僅限用於學術、練習使用，請勿使用於商業行為</li>
      </ul>
    </div>
    <div class="col-12 col-xl-6 content">
      <h4>★ 更新履歷</h4>
      <ul>
        <li>9/30 初次上傳到github</li>
      </ul>
    </div>
    <div class="col-12 col-xl-6 content">
      <h4>★ 資料來源</h4>
      <ul>
        <li>口罩資訊: https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json</li>
        <li>地圖工具: leaflet  (https://leafletjs.com/)</li>
        <li>地圖: OpenStreetMap  (https://www.openstreetmap.org)</li>
      </ul>
    </div>
  </div>

</template>

<style lang="scss" scoped>
#main{
  height: 100%;
  padding: 10px;
  background-color: rgb(92, 91, 91);
  .content{
    background-color: white;
    margin: 30px auto;
    padding: 20px;
    border-radius: 10px;
  }
}
</style>

