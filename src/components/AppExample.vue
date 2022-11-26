<template>
  <div class="example">
    <slot name="img"></slot>
    <slot name="name"></slot>
    <slot name="desc"></slot>
  </div>
</template>

<style lang="scss">
.example {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space);
  padding: var(--space);

  svg {
    height: 100px;
    width: auto;
  }
}
</style>