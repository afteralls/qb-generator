<template>
  <div class="_wrapper">
    <TheHomeSection />
    <TheTemplatesSection />
    <TheLibrarySection />
    <div class="madeby">
      <small>Made with</small>
      <HeartIcon />
      <small>by <a href="https://t.me/afterallspace" :title="$i18n('home.madeByLinkTitle')">Daniil Sukharnikov</a></small>
    </div>
  </div>
</template>

<script setup>
import TheHomeSection from '@/components/HomeView/TheHomeSection.vue'
import TheTemplatesSection from '@/components/HomeView/TheTemplatesSection.vue'
import TheLibrarySection from '@/components/HomeView/TheLibrarySection.vue'
import HeartIcon from '@/assets/svg/HeartIcon.vue'
</script>

<style scoped lang="scss">
.madeby {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;

  svg {
    fill: var(--txt-c);
    fill: red;
  }

  a { transition: var(--transition); }
  a:hover { color: var(--accent-c); }
}
</style>
