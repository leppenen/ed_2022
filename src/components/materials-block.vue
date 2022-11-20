<script setup lang='ts'>
import PageBlock from '@/components/ui/page-block.vue';
import LinkWrapper from './ui/link-wrapper.vue'
import coursePlan from '@/assets/files/materials/course_plan.pdf'
import references from '@/assets/files/materials/references.pdf'
</script>

  <template>
    <PageBlock
      can-collapse
      title='Материалы'
    >
      <ul>
        <li>
          <LinkWrapper
            :href='coursePlan'
            target='_blank'
          >
            План курса
          </LinkWrapper>
        </li>
        <li>
          <LinkWrapper
            :href='references'
            target='_blank'
          >
            Список литературы
          </LinkWrapper>
        </li>
      </ul>
    </PageBlock>
  </template>

