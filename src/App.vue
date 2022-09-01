<script setup lang="ts">
import { ref } from 'vue';
import PaddedPage from './components/ui/padded-page.vue';
import MainBlock from './components/main-block.vue';
import NewsBlock from './components/news-block.vue';
import RulesBlock from './components/rules-block.vue';
import NavigationBar from './components/navigation-bar.vue';
import TeachersBlock from './components/teachers-block.vue';
import MaterialsBlock from './components/materials-block.vue';
import TasksBlock from './components/tasks-block.vue';

const isSideBarShown = ref(false)
function toggleSideBarShown() {
  isSideBarShown.value = !isSideBarShown.value
}
</script>

<template>
  <PaddedPage>
    <template v-slot:header>
      <NavigationBar @burgerClick='toggleSideBarShown' />
    </template>

    <MainBlock />
    <NewsBlock id="news" />
    <RulesBlock id="rules"/>
    <TeachersBlock id="teachers"/>
    <MaterialsBlock id="materials"/>
    <TasksBlock id="tasks"/>

    <template v-slot:footer>
    </template>
  </PaddedPage>
</template>

<style module>
</style>
