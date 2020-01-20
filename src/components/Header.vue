<template>
  <div>
    <div id="logobar">
      <img class="logo" src="../assets/logo.png" alt="Smiley face"></img>
    </div>
    <div id="nav">
      <v-toolbar id="nav-menu">
        <v-toolbar-title class="baidu-title">BAIDU TV</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <router-link v-if="session.email != ''" class="baidu-menu" to="/baiduControl"><v-btn text>BaiduControl</v-btn></router-link>
        <router-link to="/aboutUS"><v-btn text>AboutUS</v-btn></router-link>
        <router-link v-if="session.email != ''" to="/legal"><v-btn text>Legal</v-btn></router-link>
        <router-link v-if="session.email == ''" to="/login"><v-btn text>Login</v-btn></router-link>
        <v-btn v-if="session.email != ''" text height="64" tile @click="logoutHandle">
            <span>Logout</span>
        </v-btn>
        <router-link v-if="session.email == ''" to="/register"><v-btn text>Register</v-btn></router-link>
        <v-btn text class="mobile-menu" onclick="myFunction()"><i class="fa fa-bars"></i></v-btn>
      </v-toolbar>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      session: {
        email: "",
        password: "",
        username: "",
        kidName: "",
        age: "",
        gender: "",
        morekids: "",
        interest: 1
      }
    }
  },
  mounted() {
    window.addEventListener("keyup", this.enterHandle)
    let user = this.$store.state.user;
    if (user != null)
      this.session = user;
  },
  methods: {
    logoutHandle() {
      this.$store.commit('LOGOUT');
      this.$router.push({name: 'login'});
    }
  }
}
</script>
