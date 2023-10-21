<template>
  <UiBlock type="section" layout="row">
    <UiBlock :center="true" class="end">
      <UiText type="h4" text="Made with" />
      <UiIcon><HeartIcon /></UiIcon>
      <UiText type="h4" text="by" />
      <UiLink to="https://t.me/afterallspace" mode="text" :title="$i18n('links.telegram')">
        <UiText type="h4" text="Daniil Sukharnikov" />
      </UiLink>
    </UiBlock>
    <UiBlock layout="row" class="tip">
      <div class="br"></div>
      <UiBlock :center="true" class="end">
        <UiText type="h4" text="Зажмите" />
        <UiBlock :center="true" class="key"><UiText text="Shift" /></UiBlock>
        <UiText type="h4" text="+" />
        <UiBlock :center="true" class="key"><UiText text="K" /></UiBlock>
        <UiText type="h4" text=", чтобы увидеть список горячих клавиш" />
      </UiBlock>
    </UiBlock>
  </UiBlock>
</template>

<style scoped lang="scss">
.end {
  gap: toRem(5);
  flex-wrap: wrap;

  svg {
    fill: red;
  }
}

.key {
  display: flex;
  align-items: center;
  height: toRem(25);
  padding: 0 var(--space);
  border-radius: var(--br-rad);
  background-color: var(--btn-bg-m);
  color: var(--fg-m) !important;
  transition: var(--tr-fg);
  border: toRem(1) solid var(--btn-bg-m);
}

.br {
  transition: var(--tr);
  height: toRem(25);
  width: toRem(1);
  background-color: var(--txt-m);
}

.tip {
  @media (max-width: $lg) {
    display: none;
  }
}
</style>
