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
    font-size: 4em;
    font-weight: bold;
    text-transform: uppercase;
    word-break: break-word;
  }
  .body {
    padding-top: 16px;
  }

  @media screen and (max-width: 1200px) {
    .title {
      font-size: 2em;
    }
  }
  @media screen and (max-width: 600px) {
    .body {
      padding-top: 8px;
    }
  }
</style>