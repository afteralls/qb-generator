<template>
  <div class="_wrapper">
    <TheHomeSection />
    <TheTemplatesSection />
    <TheLibrarySection />
    <div class="madeby">
      <h4>Made with</h4><HeartIcon /><h4>by Daniil Sukharnikov</h4>
    </div>
  </div>
</template>

<script setup>
import TheHomeSection from '@/components/TheHomeSection.vue'
import TheTemplatesSection from '@/components/TheTemplatesSection.vue'
import TheLibrarySection from '@/components/TheLibrarySection.vue'
import HeartIcon from '@/assets/svg/HeartIcon.vue'
</script>

<style lang="scss">
.madeby {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  svg {
    fill: var(--txt-c);
    fill: red;
  }
}
</style>