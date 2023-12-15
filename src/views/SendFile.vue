<script>
import { authUser } from "@/handler/authUtils";
import axios from "axios";

export default {
  name: "Send-File",
  data() {
    return {
      file: null,
    };
  },
  methods: {
    createPost() {
      const temp = authUser();
      if (temp.status) {
        axios
          .post(
            "https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/user/get_user/",
            null,
            {
              params: { id: temp.uid },
            }
          )
          .then((response) => {
            const parsedData = JSON.parse(response.data);
            const author = parsedData.Data.name;
            axios
              .post(
                "https://server.yellowbush-cadc3844.centralindia.azurecontainerapps.io/post/add_post/",
                null,
                {
                  params: {
                    title: this.newPost.title,
                    body: this.newPost.body,
                    author_name: author,
                    author_id: temp.uid,
                  },
                }
              )
              .then((response) => {
                const parsedData = JSON.parse(response.data);
                if (parsedData.Status === "Success") {
                  alert("Posted");
                  this.$router.push("/");
                } else {
                  alert("Unexpected Error, Unable to post");
                }
              })
              .catch((error) => {
                alert("Unexpected Error, Unable to post");
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert("Pls login to post");
      }
    },
  },
};
</script>

<template>
  <div class="centered-container">
    <div class="content">
      <h1>Send File</h1>
      <br /><br />
      <form @submit.prevent="createPost">
        <div class="form-group">
          <input type="file" id="file" required placeholder="File to Send" />
        </div>
        <button type="submit">Send File &rarr;</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.centered-container {
  display: grid;
  place-items: center;
  height: 60vh;
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
.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  color: white;
  background-color: #3c58e9;
  border: solid 1px #dae3f2;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
  padding: 15px 0 15px 0;
  width: 60%;
}

button:hover {
  border-color: black;
  background-color: rgb(21, 46, 208);
}

input {
  background-color: white;
  color: #3c58e9;
  border: solid 1px #dae3f2;
  font-size: 20px;
  margin: 10px 0;
  padding: 15px 0 15px 0;
  width: 70%;
  font-weight: bold;
}
@media only screen and (max-width: 820px) {
  .content {
    width: 80%;
  }
}
</style>
