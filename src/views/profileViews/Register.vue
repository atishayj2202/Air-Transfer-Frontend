<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { saveUser } from "@/handler/authUtils";
import axios from "axios";

export default {
  name: "Register-User",
  methods: {
    loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;
          const data = {
            name: user.displayName.toString(),
            uid: user.uid.toString(),
          };
          axios
            .post(
              "https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/user/create_user/",
              null,
              { params: data }
            )
            .then((response) => {
              const parsedData = JSON.parse(response.data);
              saveUser(parsedData.Data.toString());
              window.location.reload();
            })
            .catch((error) => {
              console.log(error);
            });
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          // ...
        });
    },
  },
};
</script>

<template>
  <div class="centered-container">
    <div class="content">
      <h1>Register</h1>
      <br />
      <button class="login-button" @click="loginWithGoogle">
        <img src="@/assets/google.png" class="logo" />Google
      </button>
      <button class="login-button" @click="loginWithGoogle">
        <img src="@/assets/github.png" class="logo" />Github
      </button>
      <button class="login-button" @click="loginWithGoogle">
        <img src="@/assets/facebook.png" class="logo" />Facebook
      </button>
      <button class="login-button" @click="loginWithGoogle">
        <img src="@/assets/apple.png" class="logo" />Apple
      </button>
      <button
        class="login-button"
        @click="loginWithGoogle"
        style="
          display: block;
          font-weight: bold;
          color: white;
          background-color: #3c58e9;
        "
      >
        Sign In &rarr;</button
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
  background-color: white;
  border-radius: 12px;
  padding: 8px;
}
.centered-container {
  display: grid;
  place-items: center;
  height: 80vh;
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
