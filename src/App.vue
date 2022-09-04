<template>
  <img src="@/assets/shaggy.png" class="shaggy" />
  <Navigation />
  <router-view />
</template>

<script lang="ts" setup>
import Navigation from "@/components/Navigation.vue";
</script>

<style>
@font-face {
  font-family: "Iosevka Web";
  font-display: swap;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  src: url("/fonts/iosevka/iosevka-regular.woff2") format("woff2");
}

@font-face {
  font-family: "Iosevka Web";
  font-display: swap;
  font-weight: 400;
  font-stretch: normal;
  font-style: italic;
  src: url("/fonts/iosevka/iosevka-italic.woff2") format("woff2");
}

@font-face {
  font-family: "Iosevka Web";
  font-display: swap;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  src: url("/fonts/iosevka/iosevka-bold.woff2") format("woff2");
}

@font-face {
  font-family: "Iosevka Web";
  font-display: swap;
  font-weight: 700;
  font-stretch: normal;
  font-style: italic;
  src: url("/fonts/iosevka/iosevka-bolditalic.woff2") format("woff2");
}

html {
  background: #0f0f0f;
  font-size: 1.1rem;
  width: 100%;
}

#app {
  font-family: Iosevka Web, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f0f0f0;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  margin: auto;
}

h1 {
  font-size: 2.2rem;
  color: #f0c3f0;
  font-weight: bold;
}

h2 {
  color: #c28246;
  font-weight: bold;
}

p {
  text-align: justify;
}

a {
  font-weight: bold;
  color: #fff7bd;
  text-decoration: none;
}

a.router-link-active {
  color: #42b983;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(100px);
  }
}

.shaggy {
  width: 100px;
  position: fixed;
  top: 0;
  left: -100px;
  animation: slideInFromLeft linear 5s forwards;
}

:root {
  --gray: #202020;
}
</style>
