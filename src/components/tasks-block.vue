<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue';
import task1 from '@/assets/files/tasks/e1_2022.pdf'
import task2 from '@/assets/files/tasks/e2.pdf'
import task3 from '@/assets/files/tasks/e_3.pdf'
import task4 from '@/assets/files/tasks/e4.pdf'
import task5 from '@/assets/files/tasks/e5.pdf'
import task6 from '@/assets/files/tasks/e6.pdf'
import task7 from '@/assets/files/tasks/e7.pdf'
import task8 from '@/assets/files/tasks/e8.pdf'
import task9 from '@/assets/files/tasks/e9.pdf'
import task10 from '@/assets/files/tasks/e10.pdf'
import task11 from '@/assets/files/tasks/e11.pdf'
import test1 from '@/assets/files/tasks/test1new_NL.pdf'
import task12 from '@/assets/files/tasks/e12.pdf'
import task13 from '@/assets/files/tasks/e13.pdf'
import task14 from '@/assets/files/tasks/e14.pdf'
import task15 from '@/assets/files/tasks/e15.pdf'
import task16 from '@/assets/files/tasks/e16.pdf'
import task17 from '@/assets/files/tasks/e17.pdf'
import task18 from '@/assets/files/tasks/e18.pdf'
import task19 from '@/assets/files/tasks/e19.pdf'
import task20 from '@/assets/files/tasks/e20.pdf'
import task21 from '@/assets/files/tasks/e21.pdf'
import task22 from '@/assets/files/tasks/e22.pdf'
import task23 from '@/assets/files/tasks/e23.pdf'
import task24 from '@/assets/files/tasks/e24.pdf'
import task25 from '@/assets/files/tasks/e25.pdf'
import task26 from '@/assets/files/tasks/e26.pdf'
import task27 from '@/assets/files/tasks/e27.pdf'
import task28 from '@/assets/files/tasks/e28.pdf'
import solve1 from '@/assets/files/tasks/e1a.pdf'
import solve2 from '@/assets/files/tasks/e2a.pdf'
import solve3 from '@/assets/files/tasks/e3a.pdf'
import solve4 from '@/assets/files/tasks/e4a.pdf'
import solve5 from '@/assets/files/tasks/e5a.pdf'
import solve6 from '@/assets/files/tasks/e6a.pdf'
import solve7 from '@/assets/files/tasks/e7a.pdf'
import solve8 from '@/assets/files/tasks/e8a.pdf'
import solve9 from '@/assets/files/tasks/e9a.pdf'
import solve10 from '@/assets/files/tasks/e10a_2.pdf'
import solve11 from '@/assets/files/tasks/e11a.pdf'
import solve13 from '@/assets/files/tasks/e13a.pdf'
import solve14 from '@/assets/files/tasks/e14a.pdf'
import solve15 from '@/assets/files/tasks/e15a.pdf'
import solve16 from '@/assets/files/tasks/e16a.pdf'
import solve17 from '@/assets/files/tasks/e17a.pdf'
import solve18 from '@/assets/files/tasks/e18a.pdf'
import solve19 from '@/assets/files/tasks/e19a.pdf'
import solve21 from '@/assets/files/tasks/e21a.pdf'
import solve22 from '@/assets/files/tasks/e22a.pdf'
import solve23 from '@/assets/files/tasks/e23a.pdf'
import solve24 from '@/assets/files/tasks/e24a.pdf'
import solve25 from '@/assets/files/tasks/e25a.pdf'
import solve26 from '@/assets/files/tasks/e26a.pdf'
import solve27 from '@/assets/files/tasks/e27a.pdf'
import solve_test1 from '@/assets/files/tasks/test1_sol.pdf'
import TaskCard from './task-card.vue';
import { computed, ref } from 'vue';

export interface Task {
  taskName: string
  taskFilePath: string
  deadline: Date
  solutionFilePath: string
}
export interface Filter {
  name: string
  callback: (task: Task) => boolean
}

const createDate = (year: number, month: number, day: number, hour?: number, minute?: number) => {
  // NOTE: month - 1 ??????????, ???????????? ?????? ???????????? ?? js ?? 0
  return new Date(year, month - 1, day, hour, minute)
}

const createDeadlineDate = (year: number, month: number, day: number) => {
  return createDate(year, month, day, 23, 59)
}

const tasks: Task[] = [
  {
    taskName: '?????????????? ???1',
    deadline: createDeadlineDate(2022, 9, 12),
    taskFilePath: task1,
    solutionFilePath: solve1,
  },
  {
    taskName: '?????????????? ???2',
    deadline: createDeadlineDate(2022, 9, 13),
    taskFilePath: task2,
    solutionFilePath: solve2,
  },
  {
    taskName: '?????????????? ???3',
    deadline: createDeadlineDate(2022, 9, 19),
    taskFilePath: task3,
    solutionFilePath: solve3,
  },
  {
    taskName: '?????????????? ???4',
    deadline: createDeadlineDate(2022, 9, 26),
    taskFilePath: task4,
    solutionFilePath: solve4,
  },
  {
    taskName: '?????????????? ???5',
    deadline: createDeadlineDate(2022, 9, 27),
    taskFilePath: task5,
    solutionFilePath: solve5,
  },
  {
    taskName: '?????????????? ???6',
    deadline: createDeadlineDate(2022, 9, 28),
    taskFilePath: task6,
    solutionFilePath: solve6,
  },
  {
    taskName: '?????????????? ???7',
    deadline: createDeadlineDate(2022, 10, 3),
    taskFilePath: task7,
    solutionFilePath: solve7,
  },
  {
    taskName: '?????????????? ???8',
    deadline: createDeadlineDate(2022, 10, 10),
    taskFilePath: task8,
    solutionFilePath: solve8,
  },
  {
    taskName: '?????????????? ???9',
    deadline: createDeadlineDate(2022, 10, 11),
    taskFilePath: task9,
    solutionFilePath: solve9,
  },
  {
    taskName: '?????????????? ???10',
    deadline: createDeadlineDate(2022, 10, 17),
    taskFilePath: task10,
    solutionFilePath: solve10,
  },
  {
    taskName: '?????????????? ???11',
    deadline: createDeadlineDate(2022, 10, 17),
    taskFilePath: task11,
    solutionFilePath: solve11,
  },
  {
    taskName: '?????????????????????? ???????????? ???1',
    deadline: createDeadlineDate(2022, 10, 17),
    taskFilePath: test1,
    solutionFilePath: solve_test1,
  },
  {
    taskName: '?????????????? ???12',
    deadline: createDeadlineDate(2022, 10, 25),
    taskFilePath: task12,
    solutionFilePath: 'https://colab.research.google.com/drive/1N6kxRYOqKWsGZPQ-dWjLzEizd_dyft6V?usp=sharing',
  },
  {
    taskName: '?????????????? ???13',
    deadline: createDeadlineDate(2022, 10, 31),
    taskFilePath: task13,
    solutionFilePath: solve13,
  },
  {
    taskName: '?????????????? ???14',
    deadline: createDeadlineDate(2022, 11, 1),
    taskFilePath: task14,
    solutionFilePath: solve14,
  },
  {
    taskName: '?????????????? ???15',
    deadline: createDeadlineDate(2022, 11, 7),
    taskFilePath: task15,
    solutionFilePath: solve15,
  },
  {
    taskName: '?????????????? ???16',
    deadline: createDeadlineDate(2022, 11, 8),
    taskFilePath: task16,
    solutionFilePath: solve16,
  },
  {
    taskName: '?????????????? ???17',
    deadline: createDeadlineDate(2022, 11, 14),
    taskFilePath: task17,
    solutionFilePath: solve17,
  },
  {
    taskName: '?????????????? ???18',
    deadline: createDeadlineDate(2022, 11, 15),
    taskFilePath: task18,
    solutionFilePath: solve18,
  },
  {
    taskName: '?????????????? ???19',
    deadline: createDeadlineDate(2022, 11, 21),
    taskFilePath: task19,
    solutionFilePath: solve19,
  },
  {
    taskName: '?????????????? ???20',
    deadline: createDeadlineDate(2022, 11, 21),
    taskFilePath: task20,
    solutionFilePath: 'https://drive.google.com/file/d/1vuaMYywmHo_8v2ii7W_K8-2BWhhJ5tpL/view?usp=sharing',
  },
  {
    taskName: '?????????????? ???21',
    deadline: createDeadlineDate(2022, 11, 29),
    taskFilePath: task21,
    solutionFilePath: solve21,
  },
  {
    taskName: '?????????????? ???22',
    deadline: createDeadlineDate(2022, 12, 5),
    taskFilePath: task22,
    solutionFilePath: solve22,
  },
  {
    taskName: '?????????????? ???23',
    deadline: createDeadlineDate(2022, 12, 6),
    taskFilePath: task23,
    solutionFilePath: solve23,
  },
  {
    taskName: '?????????????? ???24',
    deadline: createDeadlineDate(2022, 12, 13),
    taskFilePath: task24,
    solutionFilePath: solve24,
  },
  {
    taskName: '?????????????? ???25',
    deadline: createDeadlineDate(2022, 12, 14),
    taskFilePath: task25,
    solutionFilePath: solve25,
  },
  {
    taskName: '?????????????? ???26',
    deadline: createDeadlineDate(2022, 12, 19),
    taskFilePath: task26,
    solutionFilePath: solve26,
  },
  {
    taskName: '?????????????? ???27',
    deadline: createDeadlineDate(2022, 12, 20),
    taskFilePath: task27,
    solutionFilePath: solve27,
  },
  {
    taskName: '?????????????? ???28',
    deadline: createDeadlineDate(2022, 12, 30),
    taskFilePath: task28,
    solutionFilePath: '',
  },
]

const filters: Filter[] = [
  {
    name: '?????? ??????????????',
    callback: () => true
  },
  {
    name: '??????????????',
    callback: (task) => task.deadline > new Date()
  },
  {
    name: '??????????????????????',
    callback: (task) => task.deadline < new Date()
  },
]

const activeFilterIndex = ref(1)
const activeFilter = computed(() => filters[activeFilterIndex.value])

const filteredTasks = computed(() => tasks.filter(activeFilter.value.callback))
</script>

<template>
  <PageBlock
    can-collapse
    is-initially-shown
    title='??????????????'
  >
    <div :class='$style.filters'>
      <button
        v-for='(filter, index) in filters'
        :key="index"
        :class='[$style.filter, activeFilterIndex === index ? $style.activeFilter : undefined]'
        @click='activeFilterIndex = index'
      >
        {{filter.name}}
      </button>
    </div>
    <div :class='$style.tasks'>
      <TaskCard
        v-for="(task, index) in filteredTasks"
        :key='index'
        :deadline="task.deadline"
        :solution-file-path='task.solutionFilePath'
        :task-name='task.taskName'
        :task-file-path='task.taskFilePath'
      />
    </div>
  </PageBlock>
</template>

<style module>
.tasks {
  display: grid;
  margin-top: 20px;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
}
.filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.filter {
  min-width: 40px;
  padding: 8px 12px;
  text-align: left;
  border: 2px solid var(--textPrimary);
  border-radius: 12px;
  cursor: pointer;
}
.filter:hover {
  border-color: var(--textSecondary);
}
.activeFilter {
  color: var(--textSecondary);
  border-color: var(--textSecondary);
}
</style>
