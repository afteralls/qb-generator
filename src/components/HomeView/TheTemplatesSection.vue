<template>
  <section class="templates">
    <div class="templates__wrapper">
      <div class="tp-wrapper">
        <router-link to="/generator">
          <div class="template">
            <CreateIcon />
            <h3>Create a new template</h3>
          </div>
        </router-link>
        <div v-for="template in templates" class="template">
          <h3>{{ template.name }}</h3>
        </div>
        <div v-if="!templates.value" class="template__tip">
          <InfoIcon />
          <h3>The templates you create will appear in this section, try creating the first one!</h3>
          <p>Just generate several types of Qr or barcodes and the system will prompt you to save the settings</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CreateIcon from '@/assets/svg/CreateIcon.vue'
import InfoIcon from '@/assets/svg/InfoIcon.vue'
import { ref } from 'vue'
const templates = ref([])
</script>

<style lang="scss">
.templates {
  overflow-x: scroll;
  width: 100%;
  max-width: 100%;
  padding: 0 calc(var(--space) * 2.5);

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

  &__wrapper {
    display: inline-block;
  }
}

.tp-wrapper {
  display: flex;
  width: 100%;
  gap: var(--space);
}

.template {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: var(--space);
  background-color: var(--wrapper-c);
  border-radius: var(--br-rad);
  padding: var(--space);
  height: 250px;
  min-width: 250px;
  transition: var(--transition);
  cursor: pointer;
  color: var(--txt-c);

  &:hover {
    background-color: var(--wrapper-c-h);
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