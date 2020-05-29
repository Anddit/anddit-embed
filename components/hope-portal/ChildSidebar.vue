<template>
  <aside class="menu bg-white w-full pt-5 hp-text-color-hp" style="height: 100%;">
    <p class="menu-label md:ml-2 -mb-2 hover:bg-white">
      <a class="backbutton font-bold text-xs" href="/hope-portal">&nbsp;&nbsp;&#60; VIEW ALL</a>
    </p>

    <div class="search-form md:ml-2 bg-grey-panel w-full rounded-full pl-7">
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

    <p class="menu-label md:ml-8 -mb-2 hover:bg-white">
      <span class="text-grey font-bold text-xs">FILTER BY TYPE</span>
    </p>

    <ul class="menu-list w-full">
      <nuxt-link
        :class="'text-sm ml-8'+isActive(currentParent.record.slug)"
        :to="{ name: 'hope-portal-slug', params: { slug: currentParent.record.slug } }"
      >
        {{ currentParent.name }}
      </nuxt-link>
    </ul>

    <ul
      v-if="currentParent.children && currentParent.children[0].name !== currentParent.name"
      class="menu-list text-grey-dark w-full"
    >
      <nuxt-link
        v-for="child in currentParent.children"
        :key="child.record.id"
        :class="'text-sm ml-8'+isActive(child.record.slug)"
        :to="{ name: 'hope-portal-slug', params: { slug: child.record.slug } }"
      >
        {{ child.name }}
      </nuxt-link>
    </ul>

    <p class="menu-label md:ml-8 -mb-2 hover:bg-white">
      <span class="text-grey mt-4 font-bold text-xs">CHECK ELIGIBILITY</span>
    </p>

    <SidebarDiagnosis />

    <SidebarLocation />

    <div class="ml-10 mt-5 text-xs">
      <label class="checkbox" for="include_national">
        <input id="include_national" v-model="onlyLocal" type="checkbox">
        Only Show Local Organizations?
      </label>
    </div>
  </aside>
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
      setTextQuery: 'search/setTextQuery'
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

 <style lang="scss">
.menu-list {
  .is-active {
    background-color: #1062ed !important;
    color: white !important;
    min-width: 100% !important;
  }
}

.menu-list {
  font-family: Avenir Next LT W01 Demi, sans-serif;
}

.backbutton {
  color: #1062ed !important;
  font-family: Avenir Next LT W01 Demi, sans-serif;
}

.ais-input {
  border-radius: 9999px;
  background-color: #f1f5f8;
  width: 90%;
  padding: 0.75rem 1rem;
  margin-right: 1rem;
}

.search-form {
  background-image: url(https://laracasts.com/images/icons/search.svg);
  background-repeat: no-repeat;
  background-position: 2px 12.5px;
  padding-left: 20px;
  background-image: none;
}
</style>
