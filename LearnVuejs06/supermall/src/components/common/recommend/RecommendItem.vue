<!--  -->
<template>
  <div class="rec-item">
    <a :href="linkUrl">
      <img :src="imageUrl"/>
      <p>{{title}}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "RecommendItem",
  data() {
    return {};
  },
  props: {
    imageUrl: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    linkUrl: {
      type: String,
      default: ''
    }
  },
};
</script>

<style  scoped>
.rec-item {
  text-align: center;
}
.rec-item img {
  height: 70px;
  width: 70px;
  margin-bottom: 5px;
}
.rec-item p {
  font-size: 12px;
}
</style>
