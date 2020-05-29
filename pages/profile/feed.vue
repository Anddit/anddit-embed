<template>
  <div class="min-h-screen flex flex-col">
    <OrgCard v-for="org in feedItems" :key="org.id" :result="org" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OrgCard from '@/components/hope-portal/OrgCard'

export default {
  layout: 'bulma',
  components: { OrgCard },
  async asyncData ({ params, app }) {
    const { data } = await app.$axios.$get('/profile/feed')

    return {
      feedItems: data
    }
  },
  computed: {
    ...mapState(['auth'])
  }
}
</script>
