<template>
  <section class="templates">
    <div class="_row">
      <RouterLink to="/generator" class="template _center _column _ui" :title="$i18n('home.new')">
        <div class="_i mx"><CreateIcon /></div>
        <h3>{{ $i18n('home.create') }}</h3>
      </RouterLink>
      <!-- <div v-for="i in 10" :key="i" class="template _center _column _ui">
        <div class="_i mx"><CreateIcon /></div>
        <h3>{{ $i18n('home.create') }}</h3>
      </div> -->
      <div class="tip _column">
        <div class="_i lg"><InfoIcon /></div>
        <h4>{{ $i18n('home.tipTitle') }}</h4>
        <p class="txt">{{ $i18n('home.tipDesc') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.templates {
  overflow-x: scroll;
  width: 100%;
}

.template {
  height: toRem(250);
  width: toRem(250);
  min-width: toRem(250);
  cursor: pointer;
  text-align: center;
}

.tip {
  justify-content: center;
  max-width: toRem(350);
  min-width: toRem(350);
}
</style>
