<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      this.$store.commit('state/setOpenReg');
      this.$store.dispatch('dates/getDates')
    }
  }
</script>

<style>

</style>