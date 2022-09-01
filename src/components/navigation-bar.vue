<script setup lang='ts'>
import { defineEmits } from 'vue';
import LinkWrapper from '@/components/ui/link-wrapper.vue';
import NavigationLinks from './navigation-links.vue';

defineEmits(['burgerClick'])
</script>

<template>
  <div :class=$style.navigationBar>
    <LinkWrapper
      href='https://spbau.ru'
      target='_blank'
      :class=$style.logoWrapper
    >
      <img src='@/assets/images/au-logo.svg' :class=$style.logo>
    </LinkWrapper>
    <nav :class=$style.navigationLinks>
      <NavigationLinks />
    </nav>
    <img
      @click="$emit('burgerClick')"
      :class=$style.burger
      src='@/assets/images/burger.svg'
    >
  </div>
</template>

<style module>
  .logoWrapper {
    display: flex;
    place-items: center;
  }
  .logo {
    object-fit: cover;
    height: 20px;
  }
  .navigationBar {
    width: 100%;;
    display: flex;
    gap: 40px;
  }
  .navigationLinks {
    width: 100%;;
    display: flex;
    justify-content: space-between;
  }

  .burger {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    .navigationLinks {
      display: none;
    }
    .burger {
      display: block;
      margin-left: auto;
      height: 20px;
      transform: scale(1.5);

      display: none;
    }
  }
</style>