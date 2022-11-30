<template>
  <Teleport to="body">
    <Transition name="route">
      <div v-if="isOpen" class="modal">
        <div class="modal__window">
          <AppTemplate
            :templateName="templateName"
            :templateDesc="templateDesc"
            :templateStandart="templateStandart"
          >
            <template #codename><h3>{{ templateName }}</h3></template>
            <template #desc><p>{{ templateDesc }}</p></template>
          </AppTemplate>
          <div class="modal__column">
            <div class="_column">
              <small>Template Name</small>
              <input type="text" maxlength="20" placeholder="Name (20)" v-model="templateName">
            </div>
            <div class="_column">
              <small>Template Description</small>
              <input
                type="text"
                maxlength="20"
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
import AppTemplate from '@/components/AppTemplate.vue'
import { ref } from 'vue'
import { useMainStore } from '@/stores/mainStore.js'
import { useDataStore } from '@/stores/dataStore.js'

defineProps(['isOpen', 'templateStandart'])
defineEmits(['closeModal'])

const { state } = useMainStore()
const { set } = useDataStore()
const templateName = ref('')
const templateDesc = ref('')

const saveTemplate = () => {
  state.push({
    templateName,
    templateDesc,
    content: set.content,
    standart: set.standart,
    quantity: set.quantity,
    bgColor: set.bgColor,
    showData: set.showData,
  })
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
}

.save-btn {
  flex: 1 1;
  background-color: var(--circle-c);
  small { color: var(--light-txt-c-h) !important; }
  &:hover { background-color: var(--circle-c-tp); }
}
</style>