<template>
  <div class="bg"></div>
  <router-view></router-view>
</template>

<style lang="scss">
.bg {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #08AEEA;
  background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
  z-index: -1;
}
</style>
