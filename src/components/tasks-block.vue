<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue';
import file from '@/assets/files/tasks/e1_2022.pdf'
import LinkWrapper from './ui/link-wrapper.vue';
import BadgeWrapper from './ui/badge-wrapper.vue';

function openFile() {
    window.open(file, 'fullscreen=yes')
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
            href='#'
            target='_blank'
            @click='openFile'
          >
            Задание №1
          </LinkWrapper>&nbsp;
          <BadgeWrapper>Дедлайн: 12.09.2022 23:59</BadgeWrapper>
        </li>
      </ul>

    </PageBlock>
  </template>

