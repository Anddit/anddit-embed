<template>
  <div class="min-h-screen">
    <div v-if="showMobileMenu">
      <MobileMenu :current-category="category" />
    </div>

    <div class="flex flex-no-wrap justify-start">
      <div class="hidden md:block flex-none w-1/5 text-white">
        <ChildSidebar :current-category="category" class />
      </div>

      <div class="flex-1 md:flex md:flex-wrap md:justify-around hp-bg-hp">
        <div class="flex-none w-full lg:w-1/2 md:w-2/3">
          <nav
            v-if="!showMobileMenu"
            class="uppercase breadcrumb mt-8 ml-4"
            aria-label="breadcrumbs"
          >
            <ul>
              <li>
                <a class="text-xs" href="/">All</a>
              </li>
              <li v-if="category.parent" class="text-xs">
                <nuxt-link
                  :to="{ name: 'hope-portal-slug', params: { slug: category.parent.slug } }"
                >
                  {{ category.parent.category }}
                </nuxt-link>
              </li>
              <li class="is-active text-xs">
                <nuxt-link
                  :to="{ name: 'hope-portal-slug', params: { slug: category.slug } }"
                >
                  {{ category.category }}
                </nuxt-link>
              </li>
            </ul>
          </nav>

          <directory-search
            :index-name="indexName"
            :followups="[]"
            :page-category="category"
            :diagnosis-names="[]"
            :location-names="[]"
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

          <div class="sm:hidden w-2/3 mx-auto mt-10 info-title">
            <h3 class="font-bold text-xs text-grey-darker">
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
import { mapActions, mapGetters } from 'vuex'
import HopePortalLogo from '@/components/static/HopePortalLogo'
import ChildSidebar from '@/components/hope-portal/ChildSidebar'
import DirectorySearch from '@/components/hope-portal/DirectorySearch'
import InformationSidebar from '@/components/hope-portal/InformationSidebar'
import MobileMenu from '@/components/hope-portal/MobileMenu'

export default {
  layout: 'bulma',
  components: {
    HopePortalLogo,
    ChildSidebar,
    DirectorySearch,
    InformationSidebar,
    MobileMenu
  },
  async asyncData ({ params, app }) {
    const category = await app.$axios.$get(
      `https://anddit.com/api/common_field_names/${params.slug}`
    )

    return {
      category
    }
  },
  data () {
    return {
      slug: this.$route.params.slug,
      category: { title: 'all' }
    }
  },
  mounted () {
    if (this.currentCategories) {
      this.setCurrentCategories(this.currentCategories)
    }
  },
  computed: {
    ...mapGetters({
      showMobileMenu: 'showMobileMenu'
    }),
    currentCategories () {
      if (this.category && !this.category.parent) {
        const cat = this.$store.getters.getCategoryAndChildrenById(
          this.category.id
        )
        return [cat, ...cat.children]
      } else {
        const cat = this.$store.getters
          .getCategoryAndChildrenById(this.category.parent.id)
          .children.find(c => c.name === this.category.title)
        return [cat]
      }
    },
    indexName () {
      return 'org_testindex_production'
    }
  },
  methods: {
    ...mapActions({
      setCurrentCategories: 'search/setCurrentCategories',
      toggleMobileMenu: 'toggleMobileMenu'
    })
  },
  watch: {
    currentCategories (newCats, oldCats) {
      this.setCurrentCategories(newCats)
    }
  }
}
</script>

<style>
.info-title h3 {
  font-family: Avenir Next LT W01 Bold, sans-serif;
}

.breadcrumb {
  font-family: Avenir Next LT W01 Demi, sans-serif;
}
</style>
