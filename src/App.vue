<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      let closeDate = new Date("June 19, 2020 00:00:00")
      let openDate = new Date("January 1, 2020 00:00:00")

      let date = new Date();
      if (date > openDate && date < closeDate) {
        this.$store.commit('state/setOpenReg', true);
      }
      let startEarly = new Date("April 1 2020 01:00:00")
      let endEarly = new Date("April 30 2020 11:59:59")

      if (date > startEarly && date < endEarly) {
        this.$store.commit('state/setEarly', true);
      }

    }
  }
</script>

<style>

</style>