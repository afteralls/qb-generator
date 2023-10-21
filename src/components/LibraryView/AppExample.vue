<template>
<div class="example">
  <div class="example-img-wp _center">
    <slot name="img"></slot>
  </div>
  <slot name="name"></slot>
  <div class="example-section">
    <small>{{ $i18n('library.desc') }}</small>
    <slot name="desc"></slot>
  </div>
  <div class="example-section">
    <small>{{ $i18n('library.structure') }}</small>
    <slot name="structure"></slot>
  </div>
</div>
</template>

<script setup></script>
<style scoped lang="scss">
.example {
  display: flex;
  flex-direction: column;
  background-color: var(--wrapper-c);
  padding: var(--space);
  gap: var(--space);
  width: 370px;
  min-height: 510px;
  border-radius: var(--br-rad);
  align-items: flex-start;
  gap: var(--space);
  padding: var(--space);

  @media (max-width: 900px) {
    width: 300px;
  }

  @media (max-width: 500px) {
    width: 100%;
    min-height: auto;
  }
}

.example-img-wp {
  width: 100%;
  background-color: var(--wrapper-c-h);
  border-radius: var(--br-rad);
}

.example-section {
  display: flex;
  flex-direction: column;
  gap: calc(var(--space) / 2);

  small {
    text-transform: uppercase;
    color: var(--txt-c-h);
  }
}
</style>
