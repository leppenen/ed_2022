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
    font-size: 84px;
    font-weight: bold;
    text-transform: uppercase;
    word-break: break-word;
  }
  .body {
    margin-top: 12px;
  }

  @media screen and (max-width: 1200px) {
    .title {
      font-size: 32px;
    }
  }
</style>