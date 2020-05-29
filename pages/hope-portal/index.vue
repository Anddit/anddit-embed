<template>
  <div class="min-h-screen">
    <div v-if="showMobileMenu">
      <RootMobileMenu />
    </div>

    <div class="flex-1 sm:flex sm:flex-no-wrap sm:justify-center md:justify-around">
      <div class="hidden md:block flex-none xl:w-1/6 sm:w-1/5 w-2/5">
        <RootSidebar />
      </div>

      <div class="flex-1 md:flex md:flex-wrap md:justify-around hp-bg-hp">
        <div class="flex-none w-full lg:w-1/2 md:w-2/3">
          <directory-search
            index-name="org_testindex_production"
            :followups="[]"
            :diagnosis-names="[]"
            :location-names="[]"
            :page-category="{title: 'all'}"
            :current-categories="currentCategories"
          />

          <div class="md:hidden">
            <span
              class="z-50 bg-blue hover:bg-blue-dark rounded-full w-16 h-16 text-center flex items-center justify-center fixed shadow-lg"
              style="right: 30px; bottom: 30px;"
              @click.prevent="toggleMobileMenu"
            >
              <img
                v-if="!showMobileMenu"
                src="https://www.freeiconspng.com/uploads/search-icon-png-21.png"
                class="h-8 w-8"
                alt="Open Search Menu"
              >
              <h1 v-else class="h-12 w-12 text-white font-bold pt-2">GO</h1>
            </span>
          </div>

          <div class="hidden w-full mt-10 info-title">
            <HopePortalLogo />

            <h3 class="font-bold text-xs text-grey-dark">
              RELATED INFO
            </h3>

            <InformationSidebar />
          </div>
        </div>

        <div class="hidden md:block md:w-1/4 md:mt-32 info-title">
          <HopePortalLogo />

          <h3 class="font-bold text-xs text-grey-dark">
            RELATED INFO
          </h3>

          <InformationSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import HopePortalLogo from '@/components/static/HopePortalLogo'

import DirectorySearch from '@/components/hope-portal/DirectorySearch'

import RootSidebar from '@/components/hope-portal/RootSidebar'
import InformationSidebar from '@/components/hope-portal/InformationSidebar'
import RootMobileMenu from '@/components/hope-portal/RootMobileMenu'

export default {
  layout: 'bulma',
  components: {
    HopePortalLogo,
    DirectorySearch,
    RootSidebar,
    RootMobileMenu,
    InformationSidebar
  },
  computed: {
    ...mapGetters({
      currentCategories: 'categoriesFlat',
      showMobileMenu: 'showMobileMenu'
    })
  },
  methods: {
    ...mapActions({
      setCurrentCategories: 'search/setCurrentCategories',
      toggleMobileMenu: 'toggleMobileMenu'
    })
  },
  mounted () {
    // dont facet for any service categories
    // because not all organizations
    // are indexed with one
    this.setCurrentCategories([])
  }
}
</script>
<style>
.info-title h3 {
  font-family: Avenir Next LT W01 Bold, sans-serif;
}
</style>
