<template>
  <div class="templates">
    <div class="templates__wrapper">
      <div class="_row">
        <div class="template">
          <h3>Create a new template</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.templates {
  text-align: center;
  overflow-x: scroll;
  width: 100%;
  max-width: 100%;
  padding: 0 calc(var(--space) * 1.5);

  -webkit-mask: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 3%,
    rgba(0, 0, 0, 1) 97%,
    rgba(0, 0, 0, 0) 100%
  );

  &__wrapper {
    display: inline-block;
  }
}

.template {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--wrapper-c);
  border-radius: var(--br-rad);
  padding: var(--space);
  height: 250px;
  min-width: 250px;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    background-color: var(--wrapper-c-h);
  }
}
</style>