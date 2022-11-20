<script setup lang="ts">
import PaddedPage from './components/ui/padded-page.vue';
import MainBlock from './components/main-block.vue';
import NewsBlock from './components/news-block.vue';
import RulesBlock from './components/rules-block.vue';
import NavigationBar from './components/navigation-bar.vue';
import TeachersBlock from './components/teachers-block.vue';
import MaterialsBlock from './components/materials-block.vue';
import TasksBlock from './components/tasks-block.vue';
</script>

<template>
  <PaddedPage>
    <template v-slot:header>
      <NavigationBar />
    </template>

    <MainBlock />
    <NewsBlock
      id="news"
      :class='$style.block'
    />
    <RulesBlock
      id="rules"
      :class='$style.block'
    />
    <TeachersBlock
      :class='$style.block'
      id="teachers"
    />
    <MaterialsBlock
      id="materials"
      :class='$style.block'
    />
    <TasksBlock
      :class='$style.block'
      id="tasks"
    />

    <iframe
      :class='$style.table'
      src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSw9_JZHp9RnJCSSh_MSnXaByLqy5CGJbnHMQU0znZAlqFeffa48B4-E2pZKsCvNF_RF4sQBCoHKdww/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
    />
  </PaddedPage>
</template>

<style module>
.block {
  margin-top: 24px;
}
.table {
  margin-top: 24px;
  width: 100%;
  height: 340px;
  border: none;
}
</style>
