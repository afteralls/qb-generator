<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'header' | 'small' | 'label'
    mode?: 'lg' | 'md' | 'bg' | 'wp'
    text: string
    for?: string
  }>(),
  { type: 'p' }
)

const CreateText = () => h(props.type, { class: props.mode, for: props.for }, props.text)
</script>

<template>
  <CreateText />
</template>

<style scoped lang="scss">
* {
  transition: color 0.5s ease;
}

header {
  font-weight: bold;
  font-size: 1.5rem;
}

small,
label {
  font-size: smaller;
  font-weight: bold;
}

h1 {
  line-height: 1;
  font-size: toRem(72);

  @media (max-width: $lg) {
    font-size: toRem(60);
  }

  @media (max-width: $md) {
    font-size: toRem(48);
  }

  @media (max-width: $sm) {
    line-height: 1;
  }

  @media (max-width: $zf) {
    font-size: toRem(34);
  }
}

h2 {
  &.lg {
    line-height: 1;
    font-size: toRem(48);

    @media (max-width: $lg) {
      font-size: toRem(36);
    }

    @media (max-width: $md) {
      font-size: toRem(30);
    }
  }

  &.md {
    font-size: toRem(30);

    @media (max-width: $lg) {
      font-size: toRem(24);
    }

    @media (max-width: $md) {
      font-size: toRem(18);
    }
  }
}

p {
  &.bg {
    font-size: toRem(20);

    @media (max-width: $sm) {
      font-size: toRem(18);
    }

    @media (max-width: $zf) {
      font-size: toRem(16);
    }
  }

  &.wp {
    font-size: toRem(18);

    @media (max-width: $md) {
      font-size: toRem(16);
    }
  }
}
</style>
