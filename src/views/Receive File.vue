<script>
export default {
  name: "Receive-File",
  data() {
    return {
      room: null,
      buttonBorderColor: "blue",
      buttonShadow: "0 0 20px blue",
    };
  },
  mounted() {
    // Set up an interval to change the border color every second
    setInterval(this.changeBorderColor, 1000);
  },
  methods: {
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
  display: block;
  border-radius: 5px;
  width: 80%;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin: 10px 0;
  padding: 15px 0 15px 0;
}

button:hover {
  border-color: black;
  background-color: rgb(21, 46, 208);
}

input {
  background-color: white;
  color: #3c58e9;
  border: solid 1px #dae3f2;
  display: block;
  border-radius: 5px;
  width: calc(80% - 30px);
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin: 10px 0;
  padding: 15px 15px 15px 15px;
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
