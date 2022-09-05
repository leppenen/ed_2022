<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue';
import coursePlan from '@/assets/files/materials/course_plan.pdf'
import references from '@/assets/files/materials/references.pdf'
import LinkWrapper from './ui/link-wrapper.vue'

function openFile(filePath: string) {
  window.open(filePath, 'fullscreen=yes')
  return
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
            href=''
            @click='openFile(coursePlan)'
          >
            План курса
          </LinkWrapper>
        </li>
        <li>
          <LinkWrapper
            href=''
            @click='openFile(references)'
          >
            Список литературы
          </LinkWrapper>
        </li>
      </ul>
    </PageBlock>
  </template>

