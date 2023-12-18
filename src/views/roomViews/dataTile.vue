<script>
export default {
  name: "dataTile",
  props: {
    data: {
      type: Object,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <div class="grid-container">
    <div class="info">
      <p><b>File Name : </b>{{ data.fileName }}</p>
      <p><b>File Size : </b>{{ data.fileSize }}</p>
      <p><b>File Owner : </b>{{ data.fileOwner }}</p>
    </div>
    <div class="data">
      <p>{{ percentage }}%</p>
      <div class="progress-bar">
        <div class="progress" :style="{ width: percentage + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  width: 100%;
  display: grid;
  align-items: center;
  padding: 0;
  grid-template-columns: 50% 50%;
}

.info {
  border: none;
  display: block;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  text-align: left;
  padding: 0 15px;
  width: calc(100% - 30px);
}

.data {
  padding: 0 15px;
  width: calc(100% - 30px);
}

.progress-bar {
  width: 100%;
  height: 20px;
  border-width: 3px;
  background-color: #f0f0f0; /* Light background color */
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #3c58e9;
  transition: width 0.3s ease-in-out;
}

@media only screen and (max-width: 820px) {
  .grid-container {
    grid-template-columns: 100%;
  }
}
</style>
