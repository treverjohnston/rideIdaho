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
      
    }
  }
</script>

<style>

</style>