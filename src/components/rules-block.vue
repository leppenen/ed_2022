<script setup lang='ts'>
  import PageBlock from '@/components/ui/page-block.vue';
  import BadgeWrapper from './ui/badge-wrapper.vue';
import LineSeparator from './ui/line-separator.vue';
import LinkWrapper from './ui/link-wrapper.vue';
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
      Отправлять на почту
      <LinkWrapper
        href='mailto:leppenen.au@gmail.com'
        target='_blank'
      >
        leppenen.au@gmail.com
      </LinkWrapper>
      до дедлайна
    </p>
    <ul>
      <li>
        Формат решения задач: LaTEX <BadgeWrapper>.tex</BadgeWrapper> и <BadgeWrapper>.pdf</BadgeWrapper>
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
    <p>Вопросы по домашним заданиям присылайте на почту
      <LinkWrapper
        href='mailto:leppenen.au@gmail.com'
        target='_blank'
      >
        leppenen.au@gmail.com
      </LinkWrapper>
      c темой: <span :class=$style.highlighted>ED2022_Question</span></p>
    <p>Итоговая оценка за курс выставляется из числа набранных баллов за домашние задания и контрольные в соотношении:</p>
    <ul>
      <li><BadgeWrapper :class=$style.success>5 – 65%</BadgeWrapper></li>
      <li><BadgeWrapper :class=$style.warning>4 – 50%</BadgeWrapper></li>
      <li><BadgeWrapper :class=$style.alert>3 – 30%</BadgeWrapper></li>
    </ul>
    <LineSeparator />
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
  .success {
    background: var(--success);
  }
  .warning {
    background: var(--warning);
  }
  .alert {
    background: var(--alert);

  }
</style>

