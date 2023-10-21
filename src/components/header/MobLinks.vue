<template>
  <div class="mob-links">
    <UiButton @trigger="showLinks = !showLinks" :title="$i18n('header.link')" mode="icon">
      <LinksIcon />
      <div :class="{ 'link-arrow': true, act: showLinks }">
        <UiIcon size="min"><ArrowIcon /></UiIcon>
      </div>
    </UiButton>
    <Transition name="main" mode="out-in">
      <UiBlock layout="row" :wp="true" v-if="showLinks" ref="linkTarget" class="hidden-links">
        <TheLinks />
      </UiBlock>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const showLinks = ref<boolean>(false)
const linkTarget = ref<HTMLDivElement | null>(null)

onClickOutside(linkTarget, (evt) => {
  if (!(evt.target as HTMLElement).closest('.mob-links')) {
    showLinks.value = false
  }
})
</script>

<style scoped lang="scss">
.mob-links {
  display: none;
  position: relative;

  @media (max-width: $sm) {
    display: flex;
  }
}

.link-arrow {
  position: absolute;
  bottom: toRem(-4);
  right: toRem(-4);

  svg {
    transition: var(--tr);
  }

  &.act {
    svg {
      transform: rotate(180deg);
    }
  }
}

.hidden-links {
  position: absolute;
  right: 0;
  top: toRem(63.5);
}
</style>
