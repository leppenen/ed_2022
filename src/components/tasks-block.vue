<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue';
import task1 from '@/assets/files/tasks/e1_2022.pdf'
import task2 from '@/assets/files/tasks/e2.pdf'
import task3 from '@/assets/files/tasks/e_3.pdf'
import task4 from '@/assets/files/tasks/e4.pdf'
import task5 from '@/assets/files/tasks/e5.pdf'
import solve1 from '@/assets/files/tasks/e1a.pdf'
import solve2 from '@/assets/files/tasks/e2a.pdf'
import LinkWrapper from './ui/link-wrapper.vue';
import BadgeWrapper from './ui/badge-wrapper.vue';
import {computed} from "vue";

const createDate = (year: number, month: number, day: number, hour?: number, minute?: number) => {
  // NOTE: month - 1 нужно, потому что месяцы в js с 0
  return new Date(year, month - 1, day, hour, minute)
}

const isSolution1Shown = computed(() => (
  // new Date() - текущая дата
  // createDate() принимает аргументы: год, месяц, день, час(опционально), минуты(опционально)
  new Date() > createDate(2022, 9, 13, 0, 5)
))

const isSolution2Shown = computed(() => (
  new Date() > createDate(2022, 9, 14, 0, 5)
))
const isSolution3Shown = computed(() => (
  new Date() > createDate(2022, 9, 20, 0, 5)
))
const isSolution4Shown = computed(() => (
  new Date() > createDate(2022, 9, 27, 0, 5)
))

const isSolution5Shown = computed(() => (
  new Date() > createDate(2022, 9, 28, 0, 5)
))
</script>

  <template>
    <PageBlock>
      <template v-slot:heading>
        Задания
      </template>
      <ul>
        <li>
          <LinkWrapper :href='task1' target='_blank'>Задание №1</LinkWrapper>&nbsp;
          <!-- Поменять в v-show='true' на v-show='false', чтобы скрыть и наоборот -->
          <BadgeWrapper v-show='!isSolution1Shown'>Дедлайн: 12.09.2022 23:59</BadgeWrapper>&nbsp;

          <!-- ! Не забыть заполнить href -->
          <LinkWrapper
            v-show='isSolution1Shown'
            :href='solve1'
            target='_blank'
          >
            Решение №1
          </LinkWrapper>&nbsp;
        </li>
        <li>
          <LinkWrapper :href='task2' target='_blank'>Задание №2</LinkWrapper>&nbsp;
          <BadgeWrapper v-show='!isSolution2Shown'>Дедлайн: 13.09.2022 23:59 </BadgeWrapper>&nbsp;

          <!-- ! Не забыть заполнить href -->
          <LinkWrapper
            v-show='isSolution2Shown'
            :href='solve2'
            target='_blank'
          >
            Решение №2
          </LinkWrapper>&nbsp;
        </li>
        <li>
          <LinkWrapper :href='task3' target='_blank'>Задание №3</LinkWrapper>&nbsp;
          <BadgeWrapper v-show='!isSolution3Shown'>Дедлайн: 19.09.2022 23:59 </BadgeWrapper>&nbsp;

          <!-- ! Не забыть заполнить href -->
          <LinkWrapper
            v-show='isSolution3Shown'
            href=''
            target='_blank'
          >
            Решение №3
          </LinkWrapper>&nbsp;
        </li>
        <li>
          <LinkWrapper :href='task4' target='_blank'>Задание №4</LinkWrapper>&nbsp;
          <BadgeWrapper v-show='!isSolution4Shown'>Дедлайн: 26.09.2022 23:59 </BadgeWrapper>&nbsp;

          <!-- ! Не забыть заполнить href -->
          <LinkWrapper
            v-show='isSolution4Shown'
            href=''
            target='_blank'
          >
            Решение №4
          </LinkWrapper>&nbsp;
        </li>
        <li>
          <LinkWrapper :href='task5' target='_blank'>Задание №5</LinkWrapper>&nbsp;
          <BadgeWrapper v-show='!isSolution5Shown'>Дедлайн: 27.09.2022 23:59 </BadgeWrapper>&nbsp;

          <!-- ! Не забыть заполнить href -->
          <LinkWrapper
            v-show='isSolution5Shown'
            href=''
            target='_blank'
          >
            Решение №5
          </LinkWrapper>&nbsp;
        </li>
      </ul>
    </PageBlock>
  </template>
