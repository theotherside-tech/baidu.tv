<template>
  <div>
    <v-custom-header/>
    <v-content>
      <v-container fluid>
      <v-alert type="success" v-if="type">
        Data saved.
      </v-alert>
      </v-container>
      <v-container>          
        <div class="row">
          <div class="col-sm-12 img-baidu">
            <img src="../assets/baidu.png" alt="img"></img>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <h2>BAIDU TV</h2>
            <p>
              With Baidu control, you are in charge of the screen time, and control the amount and types of videos your kids view.
            </p>
            <br />
            <img class="img-baidu1" src="../assets/baidu-1.png" alt="img"></img>
            <br />
          </div>
          <div class="col-sm-6 center-img">
            <img class="img-baidu2" src="../assets/baidu-2.png" alt="img"></img>
          </div>
        </div>
      </v-container>
    </v-content>    
    <v-custom-footer/>
  </div>
</template>
<script>
import VCustomHeader from '../components/Header'
import VCustomFooter from '../components/Footer'
export default {
  components: {
    VCustomHeader,
    VCustomFooter
  }
}
</script>

