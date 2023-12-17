<script>
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { login } from "@/handler/login";

export default {
  name: "Register-User",
  data() {
    return {
      buttonBorderColor: "blue",
      buttonShadow: "0 0 20px blue",
    };
  },
  mounted() {
    setInterval(this.changeBorderColor, 1000);
  },
  methods: {
    async loginHandle(provider) {
      const auth = await login(provider);
      if (auth === false) {
        alert(" Login Error");
      } else {
        this.$router.push("/profile");
      }
    },
    loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      this.loginHandle(provider);
    },
    loginWithGithub() {
      const provider = new GithubAuthProvider();
      this.loginHandle(provider);
    },
    loginWithFacebook() {
      const provider = new FacebookAuthProvider();
      this.loginHandle(provider);
    },
    changeBorderColor() {
      // Generate a random color (you can customize this logic)
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

      // Update the data property to change the border color
      this.buttonBorderColor = randomColor;
      this.buttonShadow = `0 0 20px ${randomColor}`;
    },
    redirectTologin() {
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <div class="centered-container">
    <div
      class="content"
      :style="{ borderColor: buttonBorderColor, boxShadow: buttonShadow }"
    >
      <h1>Register</h1>
      <br />
      <button class="login-button" @click="loginWithGoogle">
        <img src="@/assets/google.png" class="logo" />Google
      </button>
      <button class="login-button" @click="loginWithGithub">
        <img src="@/assets/github.png" class="logo" />Github
      </button>
      <button class="login-button" @click="loginWithFacebook">
        <img src="@/assets/facebook.png" class="logo" />Facebook
      </button>
      <button
        class="login-button"
        @click="redirectTologin"
        style="
          display: block;
          font-weight: bold;
          color: white;
          background-color: #3c58e9;
        "
      >
        Login &rarr;</button
      ><br />
    </div>
  </div>
</template>

<style scoped>
.login-button {
  background-color: white;
  color: #8d9599;
  border: solid 1px #dae3f2;
  border-radius: 5px;
  width: 80%;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin: 10px 0;
  padding: 15px 0 15px 0;
}

.login-button:hover {
  border-color: rgb(21, 46, 208);
}
.content {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
  border-radius: 12px;
  padding: 8px;
}
.centered-container {
  display: grid;
  place-items: center;
  height: 80vh;
  padding-bottom: 110px;
}
.logo {
  margin-right: 15%;
  margin-left: 15%;
  height: 45px;
}
@media only screen and (max-width: 820px) {
  .content {
    width: 80%;
  }
}
</style>
