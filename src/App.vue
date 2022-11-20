<script setup lang="ts">
import PaddedPage from './components/ui/padded-page.vue';
import MainBlock from './components/main-block.vue';
import NewsBlock from './components/news-block.vue';
import RulesBlock from './components/rules-block.vue';
import NavigationBar from './components/navigation-bar.vue';
import TeachersBlock from './components/teachers-block.vue';
import MaterialsBlock from './components/materials-block.vue';
import TasksBlock from './components/tasks-block.vue';
import ProgressTable from './components/progress-table.vue';
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
    <TasksBlock
      :class='$style.block'
      id="tasks"
    />
    <ProgressTable
      :class='$style.block'
      id="progress-table"
    />
    <TeachersBlock
      :class='$style.block'
      id="teachers"
    />
    <MaterialsBlock
      id="materials"
      :class='$style.block'
    />
  </PaddedPage>
</template>

<style module>
.block {
  margin-top: 24px;
}
</style>
