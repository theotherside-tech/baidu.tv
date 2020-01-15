<template>
  <v-layout class="login-layout"> <!-- :style="{backgroundImage: 'url(' + background + ')'}"> -->
      <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="login-div" cols="12" sm="9" md="7" lg="4">
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
                  label="Email..."
                  name="email"
                  prepend-icon="email"
                  :Xrules="[v => !!v || 'Email is required', v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid']"
                  type="text"
                  autofocus
                ></v-text-field>
                <v-text-field
                  id="password"
                  label="Password..."
                  name="password"
                  prepend-icon="lock"
                  :rules="[v => !!v || 'Password is required']"
                  type="password"
                ></v-text-field>
                <v-card-actions class="pr-3 pb-3 pt-5">
                  <div class="flex-grow-1"></div>
                  <v-btn color="green" @click="loginHandle">Login</v-btn>
                </v-card-actions>
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-layout>
</template>


