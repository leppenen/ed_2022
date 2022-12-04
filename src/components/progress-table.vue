<script setup lang='ts'>
import LinkWrapper from './ui/link-wrapper.vue';
import PageBlock from './ui/page-block.vue';
</script>

<template>
  <PageBlock
    can-collapse
    title='Таблица успеваемости'
    is-initially-shown
  >
    <LinkWrapper
      href='https://docs.google.com/spreadsheets/d/1XGE2k66kW0ScC4e77iCuTawgTqse37cjvxLiJyzWaqo/edit#gid=0'
      target='_blank'
    >
      Открыть таблицу в новой вкладке
    </LinkWrapper>
    <iframe
      :class='$style.iframe'
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSw9_JZHp9RnJCSSh_MSnXaByLqy5CGJbnHMQU0znZAlqFeffa48B4-E2pZKsCvNF_RF4sQBCoHKdww/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
    />
  </PageBlock>
</template>

<style module>
.iframe {
  margin-top: 20px;
  width: 100%;
  height: 340px;
  border: none;
}
</style>