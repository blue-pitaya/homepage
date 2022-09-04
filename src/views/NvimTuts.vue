<template>
  <div class="container">
    <h1>Neovim master race</h1>
    <h2>Why</h2>
    <a href="https://www.youtube.com/watch?v=84qoMxS-iqQ">WATCH THIS</a>
    <p>
      You can try my
      <router-link class="imageRouterLink" to="/vim_emulator"
        >vim pseudo-emulator</router-link
      >. It's trying to copy very basic features of vim for tutorial purposes.
      If you want full expirence dowload neovim and try it yourself.
    </p>
    <h2>Configuration</h2>
    All dotfiles, including nvim configs, can be found on my
    <a href="https://github.com/blue-pitaya/dotfiles">github</a>.
    <h2>
      Nvim-tree
      <a href="https://github.com/kyazdani42/nvim-tree.lua"
        ><img
          class="github-icon"
          src="@/assets/github-green-64px.png"
          alt="Github page"
      /></a>
    </h2>
    <p>
      Nvim-tree is file explorer for vim. I don't any special config of this
      plugin.
    </p>
    <h2>
      Telescope.nvim
      <a href="https://github.com/nvim-telescope/telescope.nvim"
        ><img
          class="github-icon"
          src="@/assets/github-green-64px.png"
          alt="Github page"
      /></a>
    </h2>
    <p>Fuzzy finder. I use it to jump between files/buffers and for greping.</p>
    <h2>
      Vsnip
      <a href="https://github.com/hrsh7th/vim-vsnip"
        ><img
          class="github-icon"
          src="@/assets/github-green-64px.png"
          alt="Github page"
      /></a>
    </h2>
    <p>Snippets plugin.</p>
    <h2>
      Nvim-cmp
      <a href="https://github.com/hrsh7th/nvim-cmp"
        ><img
          class="github-icon"
          src="@/assets/github-green-64px.png"
          alt="Github page"
      /></a>
    </h2>
    <p>
      Autocompletion. Can be integrated with LSP (for code suggestions) and with
      snippets plugin.
    </p>
    <h2>
      Vim fugitive
      <a href="https://github.com/tpope/vim-fugitive"
        ><img
          class="github-icon"
          src="@/assets/github-green-64px.png"
          alt="Github page"
      /></a>
    </h2>
    <p>Comfy git plugin for vim.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Emulator from "@/vim/Emulator.vue";

export default defineComponent({
  props: {},
  setup(props) {
    return {};
  },
});
</script>

<style scoped>
.container {
  text-align: left;
}

.margined {
  margin-top: 50px;
}

.github-icon {
  width: 24px;
  height: 24px;
}
</style>
