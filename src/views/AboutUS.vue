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
          <div class="col-md-12 img-baidu">
            <img src="../assets/baidu.png" alt="img"></img>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h2>ABOUT US</h2>
            <p>
              Baidu TV allows you to limit the screen time of your kids by providing them with a tablet applications that has your kid’s tablet “run out of battery” whenever you need them to stop watching.
        It is different from the concept of many other screen time management systems which us a combination of preset parameters to “lock” the usage – with the kid figuring out pretty much instantly that parents have a control app that allows extension of the screen time, and as a result, parents are being bugged all the time until they give in.
        Baidu TV does not “lock” the tablet by forceful action – the tablet simply runs “out of battery” and needs to be recharged (a perfect excuse to blame the unavailability on the laws of physics and the basic principle that batteries have limited storage).
        When charging turns to supercharging
        Want to still use the reward of screen time as a “bounty” for knowledge and
        skills? Baidu TV allows a “supercharge” mode that allows charging to occur
        faster if your kid excels at some quizzes that are available.
        Know the different between inertia and gravity? Simple math equations? The
        right answer puts the tablet right into supercharge mode, and it is
        available for another time frame the parents define as a reward – without
        letting the kid know that they are the ones in control.
        All of the options are related by you.
            </p>
            <br />
          </div>
          <div class="col-md-6">
            <img class="img-aboutus" src="../assets/aboutus.png" alt="img"></img>
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
