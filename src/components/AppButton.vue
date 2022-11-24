<template>
  <div class="btn">
    <router-link to="/generator">
      <slot></slot>
    </router-link>
  </div>
</template>

<style lang="scss">
.btn {
  text-align: center;
  background-color: var(--accent-c);
  padding: var(--space);
  border-radius: calc(var(--br-rad) * 2);
  transition: var(--transition);
  cursor: pointer;
}

a, a:visited {
  text-decoration: none;
  color: var(--dark-txt-c);
}

.btn:hover {
  background-color: var(--accent-c-h);
}
</style>