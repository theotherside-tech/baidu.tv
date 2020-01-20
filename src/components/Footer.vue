<template>
  <v-footer app>
    <small>&copy; Baidu TV</small>
  </v-footer>
</template>

<script>
export default {
    computed: {
      user() {
        return this.$store.state.user;
      }
    }
}
</script>
