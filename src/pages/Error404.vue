<template>
  <div class="fixed-center text-center">
    <p>
      <q-img src="../statics/logos/RFHIdahoLogo.png" />
    </p>
    <p class=" text-faded">Sorry, nothing here...<strong>(404)</strong></p>
    <q-btn color="black" outline no-caps style="width:200px;" @click="$router.push('/')">Go back</q-btn>
  </div>
</template>

<script>
  export default {
    name: 'Error404'
  }
</script>