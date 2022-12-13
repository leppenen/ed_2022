<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue';
import TeacherCard from './ui/teacher-card.vue';
import lectorAvatar from '@/assets/images/lector.jpg'
import practiceAvatar from '@/assets/images/practice.jpg'
import practiceGif from '@/assets/images/leppenen.webp'
import { ref } from 'vue';

const ioffeLink = 'http://www.ioffe.ru/coherent/index.html/Coherent/Main.html'

const practiceAvatarSrc = ref(practiceAvatar)

// NOTE: test
setTimeout(() => {
  practiceAvatarSrc.value = practiceGif
}, 1000 * 60 * 20)
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
        :avatar-src='practiceAvatarSrc'
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