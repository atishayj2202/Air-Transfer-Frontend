<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { saveUser } from "@/handler/authUtils";
import axios from "axios";

export default {
  name: "SignIn",
  data() {
    return {
      buttonBorderColor: "blue",
      buttonShadow: "0 0 20px blue",
    };
  },
  mounted() {
    // Set up an interval to change the border color every second
    setInterval(this.changeBorderColor, 1000);
  },
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
    changeBorderColor() {
      // Generate a random color (you can customize this logic)
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

      // Update the data property to change the border color
      this.buttonBorderColor = randomColor;
      this.buttonShadow = `0 0 20px ${randomColor}`;
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
      <h1>Login In</h1>
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
        Register &rarr;</button
      ><br />
    </div>
  </div>
</template>

<style scoped>
.login-button {
  background-color: white; /* Google blue */
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
  border-width: 1px;
  border-style: solid;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  align-items: center;
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
