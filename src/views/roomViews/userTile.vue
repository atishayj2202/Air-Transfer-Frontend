<script>
export default {
  name: `UserTile`,
  props: {
    user: Object,
  },
};
</script>

<template>
  <div class="user-tile">
    <p>{{ user.name }}</p>
    <button>Remove</button>
  </div>
</template>

<style scoped>
.user-tile {
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: #3c58e9;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin: 0;
}

button {
  background-color: #bf3c3c; /* Google blue */
  color: white;
  border: solid 1px #dae3f2;
  display: block;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin: 5px 0;
  padding: 15px;
}

button:hover {
  border-color: black;
  background-color: #932828;
}
</style>
