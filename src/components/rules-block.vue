<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue';
import Badge from './ui/badge.vue';
import CopyText from './ui/copy-text.vue';
</script>

<template>
  <PageBlock
    can-collapse
    title='Правила курса'
  >
    <div :class='$style.block'>
      <div :class='$style.heading'>Лекции</div>
      <p>Понедельник - 16:00, аудитория 204</p>
      <p>Вторник - 10:00, аудитория 206</p>
    </div>

    <div :class='$style.block'>
      <div :class='$style.heading'>Домашние задания</div>
      <ul>
        <li>
          Отправлять на почту <CopyText text='leppenen.au@gmail.com' /> до дедлайна
        </li>
        <li>
          Формат решения задач LaTEX. Присылайте <Badge>.tex</Badge> и <Badge>.pdf</Badge> файлы
        </li>
        <li>
          Формат названия файла: <span :class=$style.highlighted>familiya_N.tex/familiya_N.pdf</span> , где <Badge>N</Badge> - номер задания.
          Пример: <span :class=$style.highlighted>Ivanov_1.tex/Ivanov_1.pdf</span>
        </li>
      </ul>
      <p>
        Формат темы письма <span :class=$style.highlighted>ED2022_HW_N</span>, где <Badge>N</Badge> - номер задания.
        Пример: <span :class=$style.highlighted>ED2022_HW_1</span>
      </p>
      <p>
        Вопросы по домашним заданиям присылайте на почту
        <CopyText text='leppenen.au@gmail.com' /> c темой:
        <span :class=$style.highlighted>ED2022_Question</span>
      </p>
      <p>Итоговая оценка за курс выставляется из числа набранных баллов за домашние задания и контрольные в соотношении:</p>
      <ul>
        <li>5 – 65%</li>
        <li>4 – 50%</li>
        <li>3 – 30%</li>
      </ul>
    </div>

    <div :class='$style.block'>
      <div :class='$style.heading'>Будьте внимательны!</div>
      <p>Решения с неправильной темой будут утеряны.</p>
      <p>Домашние задания, присланные после дедлайна, не оцениваются.</p>
    </div>
  </PageBlock>
</template>

<style module>
.heading {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
}
.block {
  margin-top: 12px;
}
.highlighted {
  font-family: var(--monospaceFont);
  color: var(--textSecondary);
}
</style>

