<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue';
import task1 from '@/assets/files/tasks/e1_2022.pdf'
import task2 from '@/assets/files/tasks/e2.pdf'
// import solve1 from '@/assets/files/tasks/e1a.pdf'
import LinkWrapper from './ui/link-wrapper.vue';
import BadgeWrapper from './ui/badge-wrapper.vue';

function openFile(filePath: string) {
  window.open(filePath, 'fullscreen=yes')
  return false
}
</script>

  <template>
    <PageBlock>
      <template v-slot:heading>
        Задания
      </template>
      <ul>
        <li>
          <LinkWrapper href='' @click='openFile(task1)'>Задание №1</LinkWrapper>&nbsp;
          <!-- Поменять в v-show='true' на v-show='false', чтобы скрыть и наоборот -->
          <BadgeWrapper v-show='true'>Дедлайн: 12.09.2022 23:59</BadgeWrapper>
          <LinkWrapper v-show='false' href='' @click='openFile("")'>Решение №1</LinkWrapper>&nbsp;
        </li>
        <li>
          <LinkWrapper href='' @click='openFile(task2)'>Задание №2</LinkWrapper>&nbsp;
          <BadgeWrapper v-show='true'>Дедлайн: 13.09.2022 23:59 </BadgeWrapper>
          <LinkWrapper v-show='false' href='' @click='openFile("")'>Решение №2</LinkWrapper>&nbsp;
        </li>
      </ul>
    </PageBlock>
  </template>
