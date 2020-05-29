<template>
  <div>
    <div class="border-b border-grey mt-4 mb-4" />

    <a
      v-for="org in featuredInfoOrgs"
      :key="org.group_id"
      :href="`https://www.anddit.com/groups/${org.group_id}`"
      target="_blank"
      class="block hover:text-blue no-underline text-grey-darkest text-sm"
    >
      {{ org.title }}
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      infoOrgs: 'infoOrgs'
    }),
    featuredInfoOrgs () {
      return this.infoOrgs.slice(0, 9)
    }
  }
}
</script>

<style>

</style>
