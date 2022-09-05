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
        full-name='Александр Валерьевич Пошакинский'
        exercise-type='Лекции'
        email='poshakinskiy@mail.ioffe.ru'
        :graduated="{
          link: 'https://ioffe.ru',
          title: 'ФТИ им. А.Ф. Иоффе',
        }"
      >
        <img
          :class=$style.avatar
          src='../assets/images/lector.jpg'
          alt='Avatar'
        >
      </TeacherCard>
      <TeacherCard
        full-name='Никита Витальевич Леппенен'
        exercise-type='Практика'
        email='leppenen.au@gmail.com'
        :graduated="{
          link: 'https://ioffe.ru',
          title: 'ФТИ им. А.Ф. Иоффе',
        }"
      >
        <img
          :class=$style.avatar
          src='../assets/images/practice.jpg'
          alt='Avatar'
        >
      </TeacherCard>
    </div>
  </PageBlock>
</template>

<style module>
.teachers {
  display: flex;
  flex-direction: column;
  gap: 20px
}
.avatar {
  object-fit: cover;
  width: 140px;
  height: 140px;
  border-radius: 1em;
}

</style>