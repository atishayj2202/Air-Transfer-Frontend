<script>
export default {
  name: "Send-File",
  data() {
    return {
      file: null,
      fileName: "",
      buttonBorderColor: "blue",
      buttonShadow: "0 0 20px blue",
    };
  },
  mounted() {
    // Set up an interval to change the border color every second
    setInterval(this.changeBorderColor, 1000);
  },
  methods: {
    browseFile() {
      this.$refs.fileInput.click();
    },
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
      <h1>Send File</h1>
      <br /><br />
      <input
        type="file"
        id="file"
        required
        placeholder="File to Send"
        ref="fileInput"
        @change="handleFileInputChange"
      />
      <button @click="browseFile">Browse File</button>
      <p>{{ fileName }}</p>
      <button
        style="font-weight: bold; color: white; background-color: #3c58e9"
      >
        Send File &rarr;
      </button>
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
  color: #3c58e9;
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
  border-color: rgb(21, 46, 208);
}
input {
  display: none;
}
@media only screen and (max-width: 820px) {
  .content {
    width: 80%;
  }
}
</style>
