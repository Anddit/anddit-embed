<template>
  <div class="flex flex-col items-left mt-4 w-5/6">
    <div class="search-form md:ml-2 bg-grey-panel w-full rounded-full ml-8 mb-5">
      <input
        v-model="localTextQuery"
        type="search"
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="false"
        placeholder="Search"
        autofocus="autofocus"
        class="text-sm ais-input rounded-full px-1 py-2 mr-1"
      >
    </div>

    <p class="menu-label ml-8 hover:bg-white">
      <span class="text-grey font-bold text-sm">TYPE</span>
    </p>

    <span v-for="(parentData, parentName) in categories" :key="parentName">
      <p class="menu-label ml-12 mb-2 hover:bg-white">
        <nuxt-link
          class="text-sm"
          :to="{ name: 'hope-portal-slug', params: { slug: parentData.record.slug } }"
        >{{ parentName }}</nuxt-link>
      </p>

      <ul v-if="showChildrenOf(parentData)" class="menu-list">
        <nuxt-link
          v-for="child in parentData.children"
          :key="child.record.id"
          :to="{ name: 'hope-portal-slug', params: { slug: child.record.slug } }"
          :class="slugMatches(child.record.slug) + ' ml-4'"
        >{{ child.name }}</nuxt-link>
      </ul>
    </span>
    <section class="w-5/6 mt-4 text-sm">
      <p class="menu-label ml-8 -mb-2 hover:bg-white">
        <span class="text-grey font-bold text-sm">ELIGIBILITY</span>
      </p>

      <SidebarDiagnosis />

      <SidebarLocation />
    </section>

    <div class="ml-10 mt-5 text-sm mb-4">
      <label class="checkbox" for="include_national">
        <input id="include_national" v-model="onlyLocal" type="checkbox">
        Only Show Local Organizations?
      </label>
    </div>

    <div class="ml-10 mt-5 mb-4">
      <a
        class="bg-is-primary mb-2 lg:mr-2 shadow text-white py-2 px-4 rounded flex justify-center items-center hover:text-white"
        @click.prevent="toggleMobileMenu"
      >
        <strong>GO!</strong>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SidebarDiagnosis from '@/components/hope-portal/inputs/SidebarDiagnosis'
import SidebarLocation from '@/components/hope-portal/inputs/SidebarLocation'

export default {
  name: 'RootMobileMenue',
  computed: {
    ...mapGetters(['categories'])
  },
  components: {
    SidebarLocation,
    SidebarDiagnosis
  },
  data: () => ({
    onlyLocal: false,
    localTextQuery: ''
  }),
  methods: {
    ...mapActions({
      setOnlyLocal: 'search/setOnlyLocal',
      setTextQuery: 'search/setTextQuery',
      toggleMobileMenu: 'toggleMobileMenu'
    }),
    showChildrenOf (parentData) {
      return parentData.showChildren === true
    },
    toggleShowChildrenOf (parentData) {
      if (!parentData.showChildren) {
        parentData.showChildren = true
      } else {
        parentData.showChildren = false
      }
    },
    slugMatches (slug) {
      if (this.$route.params.slug === slug) {
        return 'is-active'
      } else {
        return ''
      }
    }
  },
  watch: {
    onlyLocal (newBool, oldBool) {
      this.setOnlyLocal(newBool, this.currLocations)
    },
    localTextQuery (newQuery, oldQuery) {
      this.setTextQuery(newQuery)
    }
  }
}
</script>

<style scoped>
</style>
