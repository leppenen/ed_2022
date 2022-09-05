<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue';
import task1 from '@/assets/files/tasks/e1_2022.pdf'
import LinkWrapper from './ui/link-wrapper.vue';
import BadgeWrapper from './ui/badge-wrapper.vue';

function openFile(filePath: string) {
  window.open(filePath, 'fullscreen=yes')
  return false
}
</script>

  <template>
    <PageBlock>
      <template v-slot:heading>
        Задания
      </template>
      <ul>
        <li>
          <LinkWrapper
            href=''
            @click='openFile(task1)'
          >
            Задание №1
          </LinkWrapper>&nbsp;
          <BadgeWrapper>Дедлайн: 12.09.2022 23:59</BadgeWrapper>
        </li>
      </ul>

    </PageBlock>
  </template>
