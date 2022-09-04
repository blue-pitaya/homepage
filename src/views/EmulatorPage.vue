<template>
  <div class="container">
    <h1>Vim pseudo-emulator</h1>
    <Emulator />
    <p>
    <b>Features:</b><br />
    <ul>
      <li>Navigating with h,j,k,l</li>
      <li>Insert mode and writing (but almost everything dont work)</li>
    </ul>
    <b>Next to add:</b><br />
    <ul>
      <li>Navigating with arrows</li>
      <li>Y column position remember on shorter lines</li>
      <li>Backspace</li>
      <li>emptyLine extra space</li>
      <li>extra space after insert remove (change model)</li>
    </ul>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Emulator from "@/vim/Emulator.vue";

export default defineComponent({
  components: {
    Emulator
  },
  props: {},
  setup(props) {
    return { }
  }
});
</script>

<style scoped>
.container {
  text-align: left;
}
</style>
