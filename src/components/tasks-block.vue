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
import solve_test1 from '@/assets/files/tasks/test1_sol.pdf'
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
    solutionFilePath: solve4,
    showSolution: new Date() > createDate(2022, 10, 3, 18, 5),
  },
  {
    taskName: 'Задание №5',
    deadline: '27.09.2022 23:59',
    taskFilePath: task5,
    solutionName: 'Решение №5',
    solutionFilePath: solve5,
    showSolution: new Date() > createDate(2022, 10, 4, 9, 30),
  },
  {
    taskName: 'Задание №6',
    deadline: '28.09.2022 23:59',
    taskFilePath: task6,
    solutionName: 'Решение №6',
    solutionFilePath: solve6,
    showSolution: new Date() > createDate(2022, 10, 4, 18, 5),
  },
  {
    taskName: 'Задание №7',
    deadline: '03.10.2022 23:59',
    taskFilePath: task7,
    solutionName: 'Решение №7',
    solutionFilePath: solve7,
    showSolution: new Date() > createDate(2022, 10, 10, 23, 30),
  },
  {
    taskName: 'Задание №8',
    deadline: '10.10.2022 23:59',
    taskFilePath: task8,
    solutionName: 'Решение №8',
    solutionFilePath: solve8,
    showSolution: new Date() > createDate(2022, 10, 12, 15, 55),
  },
  {
    taskName: 'Задание №9',
    deadline: '11.10.2022 23:59',
    taskFilePath: task9,
    solutionName: 'Решение №9',
    solutionFilePath: solve9,
    showSolution: new Date() > createDate(2022, 10, 12, 15, 55),
  },
  {
    taskName: 'Задание №10',
    deadline: '17.10.2022 23:59',
    taskFilePath: task10,
    solutionName: 'Решение №10',
    solutionFilePath: solve10,
    showSolution: new Date() > createDate(2022, 10, 19, 0, 5),
  },
  {
    taskName: 'Задание №11',
    deadline: '17.10.2022 23:59',
    taskFilePath: task11,
    solutionName: 'Решение №11',
    solutionFilePath: solve11,
    showSolution: new Date() > createDate(2022, 10, 18, 0, 5),
  },
  {
    taskName: 'Контрольная работа №1',
    deadline: '17.10.2022 23:59',
    taskFilePath: test1,
    solutionName: 'Решение',
    solutionFilePath: solve_test1,
    showSolution: new Date() > createDate(2022, 10, 18, 0, 5),
  },
  {
    taskName: 'Задание №12',
    deadline: '25.10.2022 23:59',
    taskFilePath: task12,
    solutionName: 'Решение №12',
    solutionFilePath: 'https://colab.research.google.com/drive/1N6kxRYOqKWsGZPQ-dWjLzEizd_dyft6V?usp=sharing',
    showSolution: new Date() > createDate(2022, 10, 26, 0, 5),
  },
  {
    taskName: 'Задание №13',
    deadline: '31.10.2022 23:59',
    taskFilePath: task13,
    solutionName: 'Решение №13',
    solutionFilePath: solve13,
    showSolution: new Date() > createDate(2022, 11, 5, 0, 5),
  },
  {
    taskName: 'Задание №14',
    deadline: '1.11.2022 23:59',
    taskFilePath: task14,
    solutionName: 'Решение №14',
    solutionFilePath: solve14,
    showSolution: new Date() > createDate(2022, 11, 5, 0, 5),
  },
  {
    taskName: 'Задание №15',
    deadline: '7.11.2022 23:59',
    taskFilePath: task15,
    solutionName: 'Решение №15',
    solutionFilePath: solve15,
    showSolution: new Date() > createDate(2022, 11, 10, 0, 5),
  },
  {
    taskName: 'Задание №16',
    deadline: '8.11.2022 23:59',
    taskFilePath: task16,
    solutionName: 'Решение №16',
    solutionFilePath: solve16,
    showSolution: new Date() > createDate(2022, 11, 10, 0, 5),
  },
  {
    taskName: 'Задание №17',
    deadline: '14.11.2022 23:59',
    taskFilePath: task17,
    solutionName: 'Решение №17',
    solutionFilePath: '',
    showSolution: new Date() > createDate(2022, 11, 20, 0, 5),
  },
  {
    taskName: 'Задание №18',
    deadline: '15.11.2022 23:59',
    taskFilePath: task18,
    solutionName: 'Решение №18',
    solutionFilePath: '',
    showSolution: new Date() > createDate(2022, 11, 20, 0, 5),
  },
  {
    taskName: 'Задание №19',
    deadline: '21.11.2022 23:59',
    taskFilePath: task19,
    solutionName: 'Решение №19',
    solutionFilePath: '',
    showSolution: new Date() > createDate(2022, 11, 25, 0, 5),
  },
  {
    taskName: 'Задание №20',
    deadline: '22.11.2022 23:59',
    taskFilePath: task20,
    solutionName: 'Решение №20',
    solutionFilePath: '',
    showSolution: new Date() > createDate(2022, 11, 25, 0, 5),
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
