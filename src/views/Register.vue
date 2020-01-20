<template>
  <v-layout class="login-layout"> <!-- :style="{backgroundImage: 'url(' + background + ')'}"> -->
      <v-content>
      <v-container class="fill-height" fluid>
        <v-row class="yellow-div" align="center" justify="center">
          <v-col class="register-div" cols="12" sm="9" md="7" lg="6">
            <div class="row">
              <v-form ref="registerForm" class="col-10">
                <div class="text-center">
                  <v-avatar size="100">
                    <img :src="require('../assets/logo.png')"/>
                  </v-avatar>
                </div>
                <div class="text-center">
                  <h1>Register</h1>
                </div>
                <div v-if="currentPage == 1" class="page1">                  
                  <div class="text-center">
                    <p>Create New Account</p>
                  </div>
                  <div class="col-10 main-form">
                  <v-text-field
                    label="Email..."
                    name="email"
                    prepend-icon="email"
                    v-model.trim="user.email"
                    :Xrules="[v => !!v || 'Email is required', v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid']"
                    type="text"
                    autofocus
                    required
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password..."
                    name="password"
                    prepend-icon="lock"
                    v-model.trim="user.password"
                    :rules="[v => !!v || 'Password is required']"
                    type="password"
                    required
                  ></v-text-field>
                  </div>
                  <div class="or-div">
                    <hr/>
                    <h3>Or Using</h3>
                    <hr/>
                  </div>      
                  <v-card-actions class="pr-3 pb-3 pt-5">
                    <v-btn class="btn-facebook" color="primary" @click="loginWithFacebook" dark><v-icon>mdi-facebook-box</v-icon>| Facebook</v-btn>
                    <v-btn class="btn-google" color="error" @click="loginWithGoogle" dark><v-icon>mdi-google</v-icon>+ | Google</v-btn>
                  </v-card-actions>        
                </div>
                <div v-if="currentPage == 2" class="page2">
                  <div class="col-6 border-form left-form">
                    <v-text-field
                      label="Your Name..."
                      name="name"
                      v-model.trim="user.username"
                      type="text"
                      autofocus
                    ></v-text-field>
                    <v-text-field
                      id="kidName"
                      label="Name of your kid..."
                      name="kidName"
                      v-model.trim="user.kidName"
                      type="text"
                    ></v-text-field>
                  </div>
                  <div class="col-6 right-form">
                    <v-text-field
                      label="Age..."
                      name="age"
                      v-model.trim="user.age"
                      type="number"
                      autofocus
                      min=0
                      max=100
                    ></v-text-field>
                    <p>Gender</p>
                    <div class="row">
                      <v-checkbox v-model="boySelect" label="Boy" value="Boy"></v-checkbox>
                      <v-checkbox v-model="girlSelect" label="Girl" value="Girl"></v-checkbox>
                    </div>
                    <p>More kids</p>
                    <div class="row">
                      <v-checkbox class="pr-10" v-model="boyMoreSelect" label="BoyMore" value="BoyMore"></v-checkbox>
                      <v-checkbox v-model="girlMoreSelect" label="GirlMore" value="GirlMore"></v-checkbox>
                    </div>
                  </div>
                </div>
                <div v-if="currentPage == 3" class="page3">
                  <div class="col-sm-6">
                    <p>EACH KID INTERESTS</p>
                    <div class="row">
                      <div class="col-4 text-center interest" v-bind:class="{' selected':selectedCartoon, '':!selectedCartoon}" @click="selectCartoon">
                        <img class="cartoon" :src="require('../assets/funny-img.png')"/>
                        <p>Cartoons</p>
                      </div>
                      <div class="col-4 text-center interest" v-bind:class="{' selected':selectedGame, '':!selectedGame}" @click="selectGame">
                        <img class="game" :src="require('../assets/game-img.png')"/>
                        <p>Games</p>
                      </div>
                    </div>
                  </div>                  
                </div>
                <v-card-actions class="pr-3 pb-3 pt-5">
                  <div class="flex-grow-1"></div>
                  <v-btn v-if="currentPage != 3" color="green" @click="nextPage">Next</v-btn>
                  <v-btn v-if="currentPage == 3" color="green" @click="loginHandle">Submit</v-btn>
                </v-card-actions>
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
        username: "",
        kidName: "",
        age: "",
        gender: "",
        morekids: "",
        interest: 1
      },
      currentPage: 0,
      boySelect: false,
      girlSelect: false,
      boyMoreSelect: false,
      girlMoreSelect: false,
      selectedCartoon: true,
      selectedGame: false,
    }
  },
  mounted() {
    window.addEventListener("keyup", this.enterHandle)
    this.currentPage = 1;
  },
  destroyed() {
    window.removeEventListener("keyup", this.enterHandle);
  },
  created() {
    this.user.email = "test@test.com";
    this.user.password = "123";
    if (this.$refs.registerForm) this.$refs.registerForm.reset();
  },
  methods: {
    enterHandle(e) {
      if (e.code == "Enter") {
        if (this.currentPage !== 3)
          this.nextPage();
        else
          this.loginHandle();
      }
    },
    nextPage() {      
      if (this.currentPage == 1)
      {        
        if (this.user.email == "") {
          this.$toast.error({
            title: "Warning.",
            message: 'Insert email.'
          })
          return;
        }
        if (this.user.password == "") {
          this.$toast.error({
            title: "Warning.",
            message: 'Insert password.'
          })
          return;
        }
      } else if (this.currentPage == 2) {
        if (this.user.username == "") {
          this.$toast.error({
            title: "Warning.",
            message: 'Insert your name.'
          })
          return;
        }
        if (this.user.kidName == "") {
          this.$toast.error({
            title: "Warning.",
            message: 'Insert your kid name.'
          })
          return;
        }
        if (this.user.age == "") {
          this.$toast.error({
            title: "Warning.",
            message: 'Insert your age.'
          })
          return;
        }
        if (!this.boySelect && !this.girlSelect) {
          this.$toast.error({
            title: "Warning.",
            message: 'Select gender.'
          })
          return;
        }
        if (this.boySelect) this.user.gender = 1;
        if (this.girlSelect) this.user.gender = 2;
        if (this.boyMoreSelect) this.user.morekids = 1;
        if (this.girlMoreSelect) this.user.morekids = 2;
        if (!this.girlMoreSelect && !this.boyMoreSelect) this.user.morekids = 3;
      }      
      if (this.currentPage < 3)
        this.currentPage+=1;
    },
    loginHandle() {
      if (this.$refs.registerForm.validate()) {
        this.$http.post('/users/register', this.user).then(res => {
          if (res.data.error) {
            this.$toast.error({
              title: "Warning.",
              message: res.data.error
            })
          } else {
            this.$store.commit("SET_USERDATA", res.data);
            setTimeout(() => {
              this.$router.push({name: "baiduControl"})
            }, 100);
            this.$toast.success({
              title: "Success.",
              message: 'Successfully registered.'
            })
          }
        }, err => {
          this.$toast.error({
            title: "Warning.",
            message: 'Server is not running'
          })
        })
      }
    },
    loginWithFacebook() {
    },
    loginWithGoogle() {
    },
    selectCartoon() {
      this.user.interest = 1;
      this.selectedCartoon = true;
      this.selectedGame = false;
    },
    selectGame() {
      this.user.interest = 2;
      this.selectedCartoon = false;
      this.selectedGame = true;
    }
  }
};
</script>
