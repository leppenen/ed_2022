<script setup lang='ts'>
import PageBlock from './ui/page-block.vue';
</script>

<template>
  <PageBlock
    can-collapse
    title='Таблица успеваемости'
    is-initially-shown
  >
    <iframe
      :class='$style.iframe'
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSw9_JZHp9RnJCSSh_MSnXaByLqy5CGJbnHMQU0znZAlqFeffa48B4-E2pZKsCvNF_RF4sQBCoHKdww/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
    />
  </PageBlock>
</template>

<style module>
.iframe {
  width: 100%;
  height: 340px;
  border: none;
}
</style>