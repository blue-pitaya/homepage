<template>
  <div id="nav">
    <router-link class="imageRouterLink" to="/">
      <img src="@/assets/blue_pitaya_320px.png" />
      <span>Home</span>
    </router-link>
    <router-link class="imageRouterLink" to="/nvim_blog">
      <img src="@/assets/ide_vim_plugin_320px.png" />
      <span>(Neo)vim master race</span>
    </router-link>
    <router-link class="imageRouterLink" to="/linux">
      <img src="@/assets/linux_cry_320px.png" />
      <span>Linux master race</span>
    </router-link>
    <router-link class="imageRouterLink" to="/coding">
      <img id="funStuffImg" src="@/assets/monke_coding.png" />
      <span>My coding experience</span>
    </router-link>
    <router-link class="imageRouterLink" to="/fun_stuff">
      <img id="funStuffImg" src="@/assets/fun_stuff_i_guess.png" />
      <span>Fun stuff</span>
    </router-link>
  </div>
</template>

<style scoped>
#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  flex-wrap: wrap;
}

.imageRouterLink {
  display: flex;
  flex-direction: column;
  width: 180px;
  gap: 10px;
  background-color: var(--gray);
  padding: 10px;
}

@media all and (max-width: 600px) {
  .imageRouterLink {
    display: flex;
    flex-direction: column;
    width: 150px;
    gap: 5px;
    background-color: var(--gray);
    padding: 10px;
  }
}
</style>
