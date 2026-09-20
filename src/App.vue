<template>
  <Navbar/>
  <router-view/>
</template>

<script>
  import '@/css/layout.css';
  import Navbar from "@/components/NavbarMenu.vue";

  export default {
    components: {
      Navbar,
    },
  };
</script>

<style>
  #app {
  }
</style>
