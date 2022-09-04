<template>
  <div>
    <div class="text-nav">
      <router-link to="/coding/about">About</router-link>
      <span>•</span>
      <router-link to="/coding/projects">Projects</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.text-nav {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 20px;
  background-color: var(--gray);
  padding: 10px;
}
</style>
