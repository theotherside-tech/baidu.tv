<template>
  <v-layout class="login-layout"> <!-- :style="{backgroundImage: 'url(' + background + ')'}"> -->
      <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" class="yellow-div">
          <v-col class="login-div" cols="12" sm="9" md="7" lg="6">
            <div class="row">
              <v-form ref="loginForm" class="col-8">
                <div class="text-center">
                  <v-avatar size="100">
                    <img :src="require('../assets/logo.png')"/>
                  </v-avatar>
                </div>
                <div class="text-center mt-5 mb-5">
                  <h1>Login</h1>
                </div>
                <div class="text-center">
                  <p>Please Enter the registration Email Address</p>
                </div>
                <v-text-field
                  class="form-control"
                  label="Email..."
                  name="email"
                  prepend-icon="email"
                  v-model.trim="user.email"
                  :Xrules="[v => !!v || 'Email is required', v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid']"
                  type="text"
                  autofocus
                ></v-text-field>
                <v-text-field
                  id="password"
                  label="Password..."
                  name="password"
                  prepend-icon="lock"
                  v-model.trim="user.password"
                  :rules="[v => !!v || 'Password is required']"
                  type="password"
                ></v-text-field>
                <v-card-actions class="pr-3 pb-3 pt-5">
                  <div class="flex-grow-1"></div>
                  <v-btn color="green" @click="backtohome">back</v-btn>
                  <v-btn color="green" @click="loginHandle">Login</v-btn>
                  <v-btn color="green" @click="toregister">Register</v-btn>
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
        password: ""
      }
    }
  },
  mounted() {
    window.addEventListener("keyup", this.enterHandle)
    let user = this.$store.state.user;
    if (user != null)
      this.user.email = user.email;
  },
  destroyed() {
    window.removeEventListener("keyup", this.enterHandle);
  },
  created() {
    // this.user.email = "test@test.com";
    // this.user.password = "123";
    if (this.$refs.loginForm) this.$refs.loginForm.reset();
  },
  methods: {
    enterHandle(e) {
      if (e.code == "Enter") {
        this.loginHandle();
      }
    },
    backtohome() {
      this.$router.push({name: "aboutUS"})
    },
    toregister() {
      this.$router.push({name: "register"})
    },
    loginHandle() {      
      if (this.$refs.loginForm.validate()) {
        this.$http.post('/users/login', this.user).then(res => {
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
          }
        }, err => {
          this.$toast.error({
            title: "Warning.",
            message: 'Server is not running'
          })
        })
      }
    }
  }
};
</script>
