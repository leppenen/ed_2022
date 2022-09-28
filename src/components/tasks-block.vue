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
import solve1 from '@/assets/files/tasks/e1a.pdf'
import solve2 from '@/assets/files/tasks/e2a.pdf'
import solve3 from '@/assets/files/tasks/e3a.pdf'
import LinkWrapper from './ui/link-wrapper.vue';
import BadgeWrapper from './ui/badge-wrapper.vue';

export interface Task {
  taskName: string
  deadline: string
  taskFilePath: string
  solutionName: string
  solutionFilePath: string
  showSolution: boolean
}

const createDate = (year: number, month: number, day: number, hour?: number, minute?: number) => {
  // NOTE: month - 1 нужно, потому что месяцы в js с 0
  return new Date(year, month - 1, day, hour, minute)
}

const tasks: Task[] = [
  {
    taskName: 'Задание №1',
    deadline: '12.09.2022 23:59',
    taskFilePath: task1,
    solutionName: 'Решение №1',
    solutionFilePath: solve1,
    showSolution: new Date() > createDate(2022, 9, 13, 0, 5),
  },
  {
    taskName: 'Задание №2',
    deadline: '13.09.2022 23:59',
    taskFilePath: task2,
    solutionName: 'Решение №2',
    solutionFilePath: solve2,
    showSolution: new Date() > createDate(2022, 9, 14, 0, 5),
  },
  {
    taskName: 'Задание №3',
    deadline: '19.09.2022 23:59',
    taskFilePath: task3,
    solutionName: 'Решение №3',
    solutionFilePath: solve3,
    showSolution: new Date() > createDate(2022, 9, 20, 5, 5),
  },
  {
    taskName: 'Задание №4',
    deadline: '26.09.2022 23:59',
    taskFilePath: task4,
    solutionName: 'Решение №4',
    solutionFilePath: '',
    showSolution: new Date() > createDate(2022, 9, 29, 18, 5),
  },
  {
    taskName: 'Задание №5',
    deadline: '27.09.2022 23:59',
    taskFilePath: task5,
    solutionName: 'Решение №5',
    solutionFilePath: '',
    showSolution: new Date() > createDate(2022, 9, 29, 18, 5),
  },
  {
    taskName: 'Задание №6',
    deadline: '28.09.2022 23:59',
    taskFilePath: task6,
    solutionName: 'Решение №6',
    solutionFilePath: '',
    showSolution: new Date() > createDate(2022, 9, 29, 18, 5),
  },
  {
    taskName: 'Задание №7',
    deadline: '03.10.2022 23:59',
    taskFilePath: task7,
    solutionName: 'Решение №7',
    solutionFilePath: '',
    showSolution: new Date() > createDate(2022, 10, 4, 0, 5),
  },
  {
    taskName: 'Задание №8',
    deadline: '10.10.2022 23:59',
    taskFilePath: task8,
    solutionName: 'Решение №8',
    solutionFilePath: '',
    showSolution: new Date() > createDate(2022, 10, 11, 0, 5),
  },
  {
      taskName: 'Задание №9',
      deadline: '11.10.2022 23:59',
      taskFilePath: task9,
      solutionName: 'Решение №9',
      solutionFilePath: '',
      showSolution: new Date() > createDate(2022, 10, 12, 0, 5),
    },
]
</script>

  <template>
    <PageBlock>
      <template v-slot:heading>
        Задания
      </template>
      <ul>
        <li v-for="(task, index) in tasks" :key='index'>
          <LinkWrapper
            :href='task.taskFilePath'
            target='_blank'
          >
            {{task.taskName}}
          </LinkWrapper>&nbsp;
          <BadgeWrapper
            v-show='!task.showSolution'
          >
            Дедлайн: {{task.deadline}}
          </BadgeWrapper>&nbsp;
          <LinkWrapper
            v-show='task.showSolution'
            :href='task.solutionFilePath'
            target='_blank'
          >
            {{task.solutionName}}
          </LinkWrapper>&nbsp;
        </li>
      </ul>
    </PageBlock>
  </template>
