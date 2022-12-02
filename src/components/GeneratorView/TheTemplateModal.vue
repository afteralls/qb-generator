<template>
  <Teleport to="body">
    <Transition name="main">
      <div v-if="isOpen" class="modal">
        <div class="modal__window">
          <div class="modal__template">
            <BarcodeIcon />
            <small>Name</small>
            <h3>{{ templateName ? templateName : 'Example Name' }}</h3>
            <small>Description</small>
            <p>{{ templateDesc ? templateDesc : 'Example Description' }}</p>
          </div>
          <div class="modal__column">
            <div class="_column">
              <small>Template Name</small>
              <input type="text" maxlength="12" placeholder="Name (12)" v-model="templateName">
            </div>
            <div class="_column">
              <small>Template Description</small>
              <input
                type="text"
                maxlength="15"
                placeholder="Important info (or not...)"
                v-model="templateDesc"
              >
            </div>
            <div class="_row">
              <div 
                :class="{_btn: true, 'save-btn': true, _disabled: templateName === ''}" @click="saveTemplate"
              ><small>Save</small></div>
              <div class="_btn" @click="$emit('closeModal')"><small>Cancel</small></div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import BarcodeIcon from '@/assets/svg/BarcodeIcon.vue'
import { useDataStore } from '@/stores/dataStore.js'
import { useRouter } from 'vue-router'

defineProps(['isOpen'])
const emit = defineEmits(['closeModal'])

const { set, templates } = useDataStore()
const templateName = ref('')
const templateDesc = ref('')
const router = useRouter()

const saveTemplate = () => {
  templates.push({
    name: templateName.value,
    desc: templateDesc.value,
    standart: set.standart,
    href: window.location.href,
    path: router.options.history.location,
    date: new Date().toLocaleDateString()
  })
  emit('closeModal')
}
</script>

<style scoped lang="scss">
.modal {
  background-color: var(--tp-c);
  backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;

  &__window {
    display: flex;
    gap: var(--space);
    background-color: var(--wrapper-c-h);
    backdrop-filter: blur(8px);
    padding: var(--space);
    border-radius: var(--br-rad);
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: calc(var(--space) * 2);
  }

  &__template {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: var(--space);
    background-color: var(--wrapper-c);
    border-radius: var(--br-rad);
    padding: var(--space);
    height: var(--template-size);
    min-width: var(--template-size);
    max-width: var(--template-size);
    transition: var(--transition);
    cursor: pointer;
    color: var(--txt-c);

    svg {
      width: 6rem;
      height: auto;
    }

    &:hover {
      background-color: var(--wrapper-c-h);
    }
  }
}

.save-btn {
  flex: 1 1;
  background-color: var(--circle-c);
  small { color: var(--light-txt-c-h) !important; }
  &:hover { background-color: var(--circle-c-tp); }
}
</style>
