<template>
<Teleport to="body">
  <Transition name="main">
    <div v-if="isOpen" class="modal">
      <div class="window">
        <div class="modal-template">
          <BarcodeIcon />
          <small>{{ $i18n('generator.modal.name') }}</small>
          <h3>{{ templateName ? templateName : $i18n('generator.modal.exName') }}</h3>
          <small>{{ $i18n('generator.modal.desc') }}</small>
          <p>{{ templateDesc ? templateDesc : $i18n('generator.modal.exDesc') }}</p>
        </div>
        <div class="modal-column">
          <div class="_column">
            <small>{{ $i18n('generator.modal.tempName') }}</small>
            <input type="text" maxlength="12" :placeholder="$i18n('generator.modal.tempName_ph')" v-model="templateName">
          </div>
          <div class="_column">
            <small>{{ $i18n('generator.modal.tempDesc') }}</small>
            <input
              type="text"
              maxlength="15"
              :placeholder="$i18n('generator.modal.temDesc_ph')"
              v-model="templateDesc"
            >
          </div>
          <div class="_row">
            <div 
              :class="{_btn: true, 'save-btn': true, _disabled: templateName === ''}" @click="saveTemplate"
            ><small>{{ $i18n('generator.modal.saveBtn') }}</small></div>
            <div class="_btn" @click="$emit('closeModal')"><small>{{ $i18n('generator.modal.cancelBtn') }}</small></div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</Teleport>
</template>

<script setup>
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
}

.window {
  display: flex;
  gap: var(--space);
  background-color: var(--bg-c);
  backdrop-filter: blur(8px);
  padding: var(--space);
  border-radius: var(--br-rad);

  @media (max-width: 900px) {
    flex-direction: column;

    input {
      box-sizing: border-box;
      width: 100%;
    }
  }
}

.modal-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space);

  @media (max-width: 900px) {
    gap: var(--space);
  }
}

.modal-template {
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

.save-btn {
  flex: 1 1;
  background-color: var(--circle-c);
  small { color: var(--light-txt-c-h) !important; }
  &:hover { background-color: var(--circle-c-tp); }
}
</style>
