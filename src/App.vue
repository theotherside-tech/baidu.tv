<template>
  <v-app>
    <div id="app">
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import './assets/scss/custom.css';
export default {
  data: () => ({
    type: false
  }),
  methods: {
    showAlertHandler (message) {
      this.type = true;
      setTimeout(() =>{
        this.type = false;
      }, 1000)
    }
  }
}
</script>
<style>

</style>
