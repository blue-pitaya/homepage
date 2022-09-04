<template>
  <div class="container">
    <h2 class="colored">Random video from my important videos collection.</h2>
    <iframe width="560" height="315" :src="src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p class="centered">{{currNum}}/{{impVideosLen}}<br /><a href="" >Refresh</a> for more.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { impVideosIds } from "@/foos/funStuffLinks.ts";

export default defineComponent({
  props: {},
  setup(props) {
    const impVideosLen = impVideosIds.length;
    const currNum = Math.floor(Math.random() * impVideosLen); 
    const randomElement = impVideosIds[currNum];
    const src = "https://www.youtube-nocookie.com/embed/" + randomElement;
    return { src, currNum, impVideosLen }
  }
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

p.centered {
  text-align: center;
}

h2.colored {
  color: #f0c3f0
}
</style>
