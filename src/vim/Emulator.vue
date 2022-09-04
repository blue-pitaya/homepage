<template>
  <div class="container" tabindex="0" @keydown="logMe">
    <span v-for="(elm, idx) in renderElements" :key="idx" :class="renderStyleToCssClass(elm.style)">
      {{ elm.text }}
    </span>
  </div>
  <div class="debugWindow">
    Cursor position: {{ emulator.cursor.x+1 }},{{ emulator.cursor.y+1 }}
    | Mode: {{ emulator.mode }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { Mode } from "@/vim/model";
import { initEmulatorState, processKey } from "@/vim/emulator";
import { render } from "@/vim/renderer";
import { renderStyleToCssClass } from "@/vim/styleMappings";

export default defineComponent({
  props: {},
  setup(props) {
    const emulator = ref(initEmulatorState);
    const logMe = (e: KeyboardEvent) => {
      console.log(e);
      emulator.value = processKey(e.key, e.code, emulator.value);
    }

    const renderElements = computed(() => render(emulator.value.text, emulator.value.cursor));

    return { emulator, logMe, renderElements, renderStyleToCssClass };
  }
});
</script>

<style scoped>
.normalStyle {
}

.cursorStyle {
  background-color: #f0f0f0;
  color: #303030
}


.container {
  text-align: left;
  border: 2px solid #505050;
  padding: 3px;
  line-height: 1.2em;
  white-space: pre;
  background-color: #303030;
  height: 20em;
  outline: none;
  overflow: hidden;
}

.debugWindow {
  padding: 2px;
  text-align: left;
  white-space: pre-line;
  border-left: 2px solid #505050;
  border-right: 2px solid #505050;
  border-bottom: 2px solid #505050;
}

.cursor {
  background-color: red;
}
</style>
