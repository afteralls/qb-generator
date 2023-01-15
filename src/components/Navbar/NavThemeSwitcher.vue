<template>
<div class="_row">
  <small>{{ $i18n('nav.darkMode') }}</small>
  <div class="switch">
    <input id="switch" class="input" name="switch" type="checkbox" v-model="isDark">
    <label class="toggler" for="switch"></label>
  </div>
</div>
</template>

<script setup>
const isDark = useDark({ selector: 'body', attribute: 'class', valueDark: 'dark', valueLight: 'light' })
const curColor = computed(() => isDark.value ? '#242424' : '#ffffff')
const selector = 'meta[name="theme-color"]'
const docMeta = () => document.querySelector(selector).setAttribute('content', curColor.value)
watch(isDark, () => { docMeta() })
onMounted(() => { docMeta() })
</script>

<style scoped lang="scss">
.switch {
  position: relative;
}

.input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.toggler {
  display: flex;
  width: 46px;
  height: 22px;
  background-color: #f1f1f1;
  border-radius: var(--br-rad);
  transition: var(--transition);
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: var(--light-bg-c);
    color: var(--light-wrapper-c);
    transition: var(--transition);
    box-sizing: border-box;
  }
}

.input:checked + .toggler {
  background-color: #3a3a3a;

  &::before {
    left: 25px;
    background-color: var(--dark-bg-c);
  }
}
</style>
