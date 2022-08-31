<script setup lang='ts'>
</script>

<template>
  <div>
    <div :class=$style.title>
      Электродинамика сплошных сред
    </div>
    <div :class=$style.body>
      Курс по электродинамике сплошных сред, читаемый студентам третьего курса Алферовского университета
    </div>
  </div>
</template>

<style module>
  .title {
    font-family: 'Neutral face';
    font-size: 96px;
  }
  .body {
    padding-top: 16px;
  }

  @media screen and (max-width: 1200px) {
    .title {
      font-size: 48px;
    }
  }
  @media screen and (max-width: 600px) {
    .title {
      font-size: 24px;
    }
    .body {
    padding-top: 8px;
  }

  }
</style>