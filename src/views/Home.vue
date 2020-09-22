<template>

  <main class="container-fluid">
    <div class="col-12 col-xl-6">
      <h4>★ 練習項目</h4>
      <ul>
        <li>leaflet 應用</li>
        <li>axios(AJAX) 應用</li>
      </ul>
    </div>
    <div class="col-12 col-xl-6">
      <h4>★ 功能簡述</h4>
      <ul>
        <li>選擇縣市後，再選擇行政區，下表便會顯示店家資料</li>
        <li>點擊顯示的店家資料後，地圖會自動將座標鎖定在該店家，並用紅色座標標示</li>
        <li>點擊座標會顯示該店家的詳細資料，並表示出成人口罩、小孩口罩的數量</li>
        <li>該網站支援RWD功能，一旦進入RWD模式，可以透過箭頭顯示或隱藏店家列表</li>
      </ul>
    </div>
    <div class="col-12 col-xl-6">
      <h4>★ 更新履歷</h4>
      <ul>
        <li>9/30 初次上傳到github</li>
      </ul>
    </div>
  </main>

</template>

<style lang="scss" scoped>
main div{
  margin: 30px auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}

main div li{
  margin: 10px auto;
}

</style>

