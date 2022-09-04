<script setup lang='ts'>
  import PageBlock from '@/components/ui/page-block.vue';
  import file from '@/assets/files/materials/course_plan.pdf'
import LinkWrapper from './ui/link-wrapper.vue'

  function openFile() {
    window.open(file, 'fullscreen=yes')
    return false
  }
</script>

  <template>
    <PageBlock>
      <template v-slot:heading>
        Материалы
      </template>

      <ul>
        <li>
          <LinkWrapper
            href='#'
            target='_blank'
            @click='openFile'
          >
            План курса
          </LinkWrapper>
        </li>
      </ul>
    </PageBlock>
  </template>

