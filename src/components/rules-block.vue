<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue';
import BadgeWrapper from './ui/badge-wrapper.vue';
import CopiedText from './ui/copied-text.vue';
</script>

<template>
  <PageBlock>
    <template v-slot:heading>
      Правила курса
    </template>
    <h2>Лекции</h2>
    <ul>
      <li>Понедельник - 16:00, аудитория 204</li>
      <li>Вторник - 10:00, аудитория 206</li>
    </ul>
    <h2>Домашние задания</h2>
    <p>
      Отправлять на почту <CopiedText text='leppenen.au@gmail.com' /> до дедлайна
    </p>
    <ul>
      <li>
        Формат решения задач LaTEX. Присылайте <BadgeWrapper>.tex</BadgeWrapper> и <BadgeWrapper>.pdf</BadgeWrapper> файлы.
      </li>
      <li>
        Формат названия файла: <span :class=$style.highlighted>familiya_N.tex/familiya_N.pdf</span> , где <BadgeWrapper>N</BadgeWrapper> - номер задания.
        Пример: <span :class=$style.highlighted>Ivanov_1.tex/Ivanov_1.pdf</span>
      </li>
      <li>
        Формат темы письма <span :class=$style.highlighted>ED2022_HW_N</span>, где <BadgeWrapper>N</BadgeWrapper> - номер задания.
        Пример: <span :class=$style.highlighted>ED2022_HW_1</span>
      </li>
    </ul>
    <p>
      Вопросы по домашним заданиям присылайте на почту
      <CopiedText text='leppenen.au@gmail.com' /> c темой:
      <span :class=$style.highlighted>ED2022_Question</span>
    </p>
    <p>Итоговая оценка за курс выставляется из числа набранных баллов за домашние задания и контрольные в соотношении:</p>
    <ul>
      <li>5 – 65%</li>
      <li>4 – 50%</li>
      <li>3 – 30%</li>
    </ul>
    <!-- <LineSeparator /> -->
    <h2>Будьте внимательны!</h2>
    <p>Решения с неправильной темой будут утеряны.</p>
    <p>Домашние задания, присланные после дедлайна, не оцениваются.</p>
  </PageBlock>
</template>

<style module>
  .highlighted {
    font-family: var(--monospaceFont);
    color: var(--textSecondary);
  }
</style>

