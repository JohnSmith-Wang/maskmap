<template>

    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <span class="navbar-brand">簡易口罩地圖</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact>介紹</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/maskmap">成品</router-link>
          </li>
        </ul>
      </div>
    </nav>

</template>