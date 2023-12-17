<script>
import { getAuth } from "firebase/auth";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar_Full",
  data() {
    return {
      isAuthenticated: true,
    };
  },
  created() {
    getAuth().onAuthStateChanged((user) => {
      this.isAuthenticated = !!user;
    });
  },
};
</script>

<template>
  <div class="navbar">
    <div>
      <router-link to="/"
        ><img src="../assets/logo.png" style="height: 80px"
      /></router-link>
    </div>
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/send">Send</router-link></li>
        <li><router-link to="/receive">Receive</router-link></li>
        <li>
          <router-link to="/profile" v-if="this.isAuthenticated"
            >Profile</router-link
          >
          <router-link to="/login" v-else>Sign In</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: inline-block;
  color: #3c58e9;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: bold;
}

li a:hover {
  background-color: #3c58e9;
  color: #f9fafe;
}

li {
  display: inline-block;
}
.navbar {
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90px;
}
</style>
