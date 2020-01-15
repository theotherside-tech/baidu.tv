<template>
  <div>
    <div id="logobar">
      <img class="logo" src="../assets/logo.png" alt="Smiley face"></img>
    </div>
    <div id="nav">
      <v-toolbar id="nav-menu">
        <v-toolbar-title class="baidu-title">BAIDU TV</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <router-link  class="baidu-menu" to="/"><v-btn text>BaiduControl</v-btn></router-link>
        <router-link to="/aboutUS"><v-btn text>AboutUS</v-btn></router-link>
        <router-link to="/legal"><v-btn text>Legal</v-btn></router-link>
        <router-link to="/login"><v-btn text>Login</v-btn></router-link>
        <router-link to="/register"><v-btn text>Register</v-btn></router-link>
        <v-btn text class="mobile-menu" onclick="myFunction()"><i class="fa fa-bars"></i></v-btn>
      </v-toolbar>
    </div>
  </div>
</template>


