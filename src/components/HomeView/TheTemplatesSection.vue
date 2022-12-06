<template>
  <section class="templates">
    <div class="templates__container">
      <div class="templates__wrapper">
        <RouterLink to="/generator" class="templates__new" :title="$i18n('home.tempSec.linkTitles.new')">
          <CreateIcon />
          <h3>{{ $i18n('home.tempSec.create') }}</h3>
        </RouterLink>
        <RouterLink
          v-for="(temp, idx) in templates"
          :to="temp.path"
          :title="$i18n('home.tempSec.linkTitles.temp')"
        >
          <TheTemplate :idx="idx" :link="temp.href" @del-temp="(idx) => templates.splice(idx, 1)">
            <template #codename><h3>{{ temp.name }}</h3></template>
            <template #desc><p>{{ temp.desc ? temp.desc : $i18n('home.tempSec.noDesc') }}</p></template>
            <template #date><small>{{ temp.date }}</small></template>
          </TheTemplate>
        </RouterLink>
        <div v-if="!templates.length" class="templates__tip">
          <InfoIcon />
          <h3>{{ $i18n('home.tempSec.tip.title') }}</h3>
          <p>{{ $i18n('home.tempSec.tip.desc') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TheTemplate from './TheTemplate.vue'
import CreateIcon from '@/assets/svg/CreateIcon.vue'
import InfoIcon from '@/assets/svg/InfoIcon.vue'
import { useDataStore } from '@/stores/dataStore.js'

const { templates } = useDataStore()
</script>

<style scoped lang="scss">
.templates {
  overflow-x: scroll;
  width: 100%;
  max-width: 100%;
  padding: 0 var(--space);

  svg {
    width: 50px;
    height: auto;
  }

  mask-image: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 1) 3%,
    rgba(0, 0, 0, 1) 93%,
    transparent
  );

  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, 1) 3%,
    rgba(0, 0, 0, 1) 93%,
    transparent
  );

  &__container { display: inline-block; }

  &__wrapper {
    display: flex;
    width: 100%;
    gap: var(--space);
  }

  &__new {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: var(--space);
    background-color: var(--wrapper-c);
    border-radius: var(--br-rad);
    padding: var(--space);
    height: var(--template-size);
    min-width: var(--template-size);
    transition: var(--transition);
    cursor: pointer;
    color: var(--txt-c);
    text-align: center;

    &:hover {
      background-color: var(--wrapper-c-h);
    }

    @media (max-width: 750px) {
      height: calc(var(--template-size) / 1.1);
      min-width: calc(var(--template-size) / 1.1);
    }
  }

  &__tip {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: var(--space);
    max-width: 350px;
    min-width: 350px;
  }
}
</style>