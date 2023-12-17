<script>
export default {
  name: "Receive-File",
  data() {
    return {
      room: null,
    };
  },
};
</script>

<template>
  <div class="centered-container">
    <div class="content">
      <h1>Receive File</h1>
      <br /><br />
      <form @submit.prevent="createPost">
        <div class="form-group">
          <input type="text" id="file" required placeholder="Room No." />
        </div>
        <button type="submit">Join Room &rarr;</button>
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
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
