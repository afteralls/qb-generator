<template>
<a href="https://github.com/post-apocalypse" :title="$i18n('nav.linkTitles.git')"><GitHubIcon /></a>
<a href="https://t.me/afterallspace" :title="$i18n('nav.linkTitles.telegram')"><TelegramIcon /></a>
</template>

<script setup>
import TelegramIcon from '@/assets/svg/TelegramIcon.vue'
import GitHubIcon from '@/assets/svg/GitHubIcon.vue'
</script>
