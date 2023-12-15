<template>
  <Navbar_Full />
  <router-view />
</template>

<script>
import Navbar_Full from "@/components/Navbar_Full.vue";
export default {
  name: "App",
  components: {
    Navbar_Full,
  },
  mounted() {
    document.body.style.backgroundColor = "#f9fafe";
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3c58e9;
  margin: auto;
  margin-top: 0;
  padding: 0px;
  height: 100vh;
  width: 80%;
}
@media only screen and (max-width: 820px) {
  #app {
    width: 98%;
  }
}
</style>
