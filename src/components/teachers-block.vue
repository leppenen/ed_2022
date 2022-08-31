<script setup lang='ts'>
  import PageBlock from '@/components/ui/page-block.vue';
  import TeacherCard from './ui/teacher-card.vue';
</script>

<template>
  <PageBlock>
    <template v-slot:heading>
      Преподаватели
    </template>
    <div :class=$style.teachers>
      <TeacherCard
        avatarSrc='https://picsum.photos/200'
        full-name='Александр Валерьевич Пошакинский'
        exercise-type='Лекции'
        email='poshakinskiy@mail.ioffe.ru'
        :graduated="{
          link: 'https://ioffe.ru',
          title: 'ФТИ им. А.Ф. Иоффе',
        }"
      />
      <TeacherCard
        avatarSrc='https://picsum.photos/300'
        full-name='Никита Витальевич Леппенен'
        exercise-type='Практика'
        email='leppenen.au@gmail.com'
        :graduated="{
          link: 'https://ioffe.ru',
          title: 'ФТИ им. А.Ф. Иоффе',
        }"
      />
    </div>
  </PageBlock>
</template>

<style module>
.teachers {
  display: flex;
  flex-direction: column;
  gap: 20px
}
</style>