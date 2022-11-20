<script setup lang='ts'>
import { computed, useCssModule } from 'vue';
import { format } from 'date-fns';
import deadline from '@/assets/images/deadline.svg'
  const styles = useCssModule()

  const props = defineProps({
    taskName: {
      type: String,
      required: true,
    },
    taskFilePath: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    solutionFilePath: {
      type: String,
    },
  })

  const isDeadlinePassed = computed(() => {
    return new Date() > props.deadline
  })

  const stripeClass = computed(() => {
    if (!isDeadlinePassed.value) return styles.awaitedTask
    if (!props.solutionFilePath) return styles.awaitedSolution
    return styles.doneTask
  })

  const formattedDeadline = computed(() => {
    return format(props.deadline, 'dd.MM.yyyy HH:mm')
  })
</script>

<template>
  <div :class='$style.taskCardWrapper'>
    <div :class='$style.taskCard'>
      <a
        :class='[$style.taskName, $style.link]'
        :href='taskFilePath'
        :target='"_blank"'
      >
        {{ taskName }}&nbsp;
      </a>
      <div :class='$style.bodyText'>
        <div
          v-if='!isDeadlinePassed'
        >
          Сдать до: {{formattedDeadline}}
      </div>
        <a
          v-else-if='!!solutionFilePath'
          :class='$style.link'
          :href='solutionFilePath'
          :target='"_blank"'
        >
          Решение
        </a>
        <div v-else>
          Решение скоро появится...
        </div>
      </div>
      <div
        v-if='isDeadlinePassed'
        :class='[$style.bodyText, $style.passedDeadline]'
      >
        <img
          :src='deadline'
          :class='$style.icon'
        >
        <span>
          {{formattedDeadline}}
        </span>
      </div>
    </div>
    <div
      :class='[$style.stripe, stripeClass]'
    ></div>
  </div>
</template>

<style module>
.taskCardWrapper {
  min-width: 268px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.taskCard {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 16px;
  background: var(--textPrimary);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--bgPrimary);
  justify-content: space-between;
}
.taskName {
  font-weight: bold;
}
.passedDeadline {
  display: flex;
  align-items: center;
  gap: 0.4em;
}
.icon {
  width: 20px;
}
.bodyText {
  font-size: 16px;
}
.link {
  color: inherit;
  text-decoration: none;
  width: fit-content;
}
.link:hover {
  color: var(--info);
}
.stripe {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  width: 100%;
  height: 16px;
}
.awaitedTask {
  background: var(--warning);
}
.awaitedSolution {
  background: var(--info);
}
.doneTask {
  background: var(--success);
}
</style>