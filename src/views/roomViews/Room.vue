<script>
export default {
  name: "Room-File",
  data() {
    return {
      users: [],
      status: "",
      room_id: "",
      on_off_bool: true,
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
    handleFileInputChange(e) {
      const tempfile = e.target.files[0];
      if (tempfile) {
        this.file = tempfile;
        this.fileName = "Selected File : " + tempfile.name;
      } else {
        this.file = null;
        this.fileName = null;
      }
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
      <h1>Room : {{ room_id }}</h1>
      <p>Status : {{ status }}</p>
      <br /><br />
      <button style="background-color: #4caf50" v-if="on_off_bool">
        Start
      </button>
      <button style="background-color: #bf3c3c" v-else>Stop</button>
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
  width: 80%;
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
p {
  font-size: 18px;
  color: #3c58e9;
  display: block;
}

button {
  background-color: white; /* Google blue */
  color: white;
  border: solid 1px #dae3f2;
  display: block;
  border-radius: 5px;
  width: 80%;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin: 10px 0;
  padding: 15px 0 15px 0;
}

button:hover {
  border-color: rgb(21, 46, 208);
}
input {
  display: none;
}
@media only screen and (max-width: 820px) {
  .content {
    width: 100%;
  }
}
</style>
