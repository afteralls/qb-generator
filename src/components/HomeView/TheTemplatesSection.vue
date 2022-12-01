<template>
  <section class="templates">
    <div class="templates__container">
      <div class="templates__wrapper">
        <router-link to="/generator" class="templates__new">
          <CreateIcon />
          <h3>Create a new template</h3>
        </router-link>
        <router-link  :to="template.path" v-for="template in templates">
          <AppTemplate :templateStandart="template.templateStandart">
            <template #codename><h3>{{ template.templateName }}</h3></template>
            <template #desc><p>{{ template.templateDesc }}</p></template>
            <template #date><small>{{ template.date }}</small></template>
          </AppTemplate>
        </router-link>
        <div v-if="!templates.length" class="templates__tip">
          <InfoIcon />
          <h3>The templates you create will appear in this section, try creating the first one!</h3>
          <p>Just generate several types of barcodes and the system will prompt you to save the settings</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppTemplate from '../AppTemplate.vue';
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

  &__container {
    display: inline-block;
  }

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

    &:hover {
      background-color: var(--wrapper-c-h);
    }
  }

  &__tip {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: var(--space);
    max-width: 350px;
  }
}
</style>
