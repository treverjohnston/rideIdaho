<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      let closeDate = new Date("June 7, 2019 00:00:00")
      let openDate = new Date("January 1, 2019 00:00:00")

      let date = new Date();
      console.log(date)
      if (date > openDate && date < closeDate) {
        this.$store.state.state.openRegistration = true;
      }
      let startEarly = new Date("April 1 2019 01:00:00")
      let endEarly = new Date("April 30 2019 11:59:59")

      if (date > startEarly && date < endEarly) {
        this.$store.state.state.earlyRegistration = true;
      }
      console.log(this.$store.state.state.openRegistration)

    }
  }
</script>

<style>

</style>