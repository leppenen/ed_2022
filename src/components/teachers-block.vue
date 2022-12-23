<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue';
import TeacherCard from './ui/teacher-card.vue';
import lectorAvatar from '@/assets/images/lector.jpg'
import practiceAvatar from '@/assets/images/practice.jpg'
const ioffeLink = 'http://www.ioffe.ru/coherent/index.html/Coherent/Main.html'
</script>

<template>
  <PageBlock
    title='Преподаватели'
    can-collapse
  >
    <div :class=$style.teachers>
      <TeacherCard
        full-name='Александр Валерьевич Пошакинский'
        exercise-type='Лекции'
        email='poshakinskiy@mail.ioffe.ru'
        :avatar-src='lectorAvatar'
        :graduated="{
          link: ioffeLink,
          title: 'ФТИ им. А.Ф. Иоффе',
        }"
      />
      <TeacherCard
        full-name='Никита Витальевич Леппенен'
        exercise-type='Практика'
        email='leppenen.au@gmail.com'
        :avatar-src='practiceAvatar'
        :graduated="{
          link: ioffeLink,
          title: 'ФТИ им. А.Ф. Иоффе',
        }"
      />
    </div>
  </PageBlock>
</template>

<style module>
.teachers {
  display: flex;
  flex-wrap: wrap;
  gap: 20px
}
.teachers > * {
  flex-basis: 300px;
  flex-grow: 1;
}
</style>