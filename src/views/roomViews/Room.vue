<script>
import UserTile from "@/views/roomViews/userTile.vue";
import DataTile from "@/views/roomViews/dataTile.vue";

export default {
  name: "Room-File",
  components: { DataTile, UserTile },
  data() {
    return {
      users: [
        { id: "cgfhcgh", name: "User 1" },
        { id: "jhbjhbv", name: "User 2" },
        { id: "jhtyjvkbjhbv", name: "User 3" },
        { id: "jhtyjvkbjhsubsjbv", name: "User 4" },
      ],
      data: Object,
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
      <p><b>Status : </b>{{ status }}</p>
      <br /><br />
      <data-tile :data="data" :percentage="50" class="data" />
      <br />
      <div v-for="user in users" :key="user.id" class="user">
        <UserTile :user="user" />
      </div>
      <br />
      <button style="background-color: #4caf50" v-if="on_off_bool">
        Start
      </button>
      <button style="background-color: #bf3c3c" v-else>Stop</button>
    </div>
  </div>
</template>

<style scoped>
.user {
  margin: 0;
  padding: 0 30px 0 0;
  justify-content: center;
  width: calc(80% - 30px);
}
.data {
  margin: 0;
  padding: 0;
  justify-content: center;
  width: 80%;
  overflow: hidden;
}
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
  border-color: black;
}
input {
  display: none;
}
@media only screen and (max-width: 820px) {
  .content {
    width: 95%;
  }
}
</style>
