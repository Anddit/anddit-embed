<template>
  <div class="hp-text-color-hp mt-4 w-5/6">
    <p class="menu-label md:ml-2 -mb-2 hover:bg-white">
      <a class="backbutton text-xs mb-2 ml-4" href="/hope-portal">&#60; VIEW ALL</a>
    </p>

    <div class="search-form bg-grey-panel w-full ml-8 rounded-full">
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
      <span class="text-grey font-bold text-sm">FILTER BY TYPE</span>
    </p>

    <ul class="menu-list text-grey">
      <nuxt-link
        :class="'text-sm ml-12'+isActive(currentParent.record.slug)"
        :to="{ name: 'hope-portal-slug', params: { slug: currentParent.record.slug } }"
      >
        {{ currentParent.name }}
      </nuxt-link>
    </ul>

    <ul
      v-if="currentParent.children && currentParent.children[0].name !== currentParent.name"
      class="menu-list text-grey-dark"
    >
      <nuxt-link
        v-for="child in currentParent.children"
        :key="child.record.id"
        :class="'text-sm ml-12'+isActive(child.record.slug)"
        :to="{ name: 'hope-portal-slug', params: { slug: child.record.slug } }"
      >
        {{ child.name }}
      </nuxt-link>
    </ul>
    <section class="w-5/6 mt-4">
      <p class="menu-label ml-8 mb-2 hover:bg-white">
        <span class="text-grey font-bold text-sm">CHECK ELIGIBILITY</span>
      </p>

      <SidebarDiagnosis />

      <SidebarLocation />
    </section>
    <div class="ml-10 mt-5 mb-5 text-sm">
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
import { mapActions, mapGetters } from 'vuex'

import SidebarDiagnosis from '@/components/hope-portal/inputs/SidebarDiagnosis'
import SidebarLocation from '@/components/hope-portal/inputs/SidebarLocation'

export default {
  components: {
    SidebarDiagnosis,
    SidebarLocation
  },
  props: ['currentCategory'],
  data () {
    const localCurrentCategory = this.currentCategory
    localCurrentCategory.record = { slug: this.currentCategory.slug }

    return {
      onlyLocal: false,
      houseHoldSize: null,
      houseHoldIncome: null,
      treatmentStatus: null,
      localCurrentCategory,
      localTextQuery: ''
    }
  },
  computed: {
    ...mapGetters({
      currLocations: 'search/locationFacets'
    }),
    currentParent () {
      if (this.currentCategory.parent) {
        return this.$store.getters.getCategoryAndChildrenById(
          this.currentCategory.parent.id
        )
      } else {
        return this.$store.getters.getCategoryAndChildrenById(
          this.localCurrentCategory.id
        )
      }
    }
  },
  methods: {
    isActive (slug) {
      if (this.$route.params.slug === slug) {
        return ' my-active-link'
      } else {
        return ''
      }
    },
    ...mapActions({
      setOnlyLocal: 'search/setOnlyLocal',
      setTextQuery: 'search/setTextQuery',
      toggleMobileMenu: 'toggleMobileMenu'
    })
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

<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>

<style scoped lang="scss">
.menu-list {
  .is-active {
    background-color: #1062ed !important;
    color: white !important;
    min-width: 100% !important;
  }
}

.backbutton {
  color: #1062ed !important;
  font-family: Avenir Next LT W01 Demi, sans-serif;
}
</style>
