<template>
  <aside class="menu w-full bg-white pt-5 hp-text-color-hp" style="height: 100%;">
    <div class="search-form md:ml-2 bg-grey-panel w-full rounded-full pl-7 mb-5">
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

    <!-- <span v-for="(parentData, parentName) in categories" :key="parentName">
      <p class="menu-label ml-2 mb-2 hover:bg-white hover:text-blue ml-10">
        <nuxt-link
          class="md:text-sm sm:text-base"
          :to="{ name: 'hope-portal-slug', params: { slug: parentData.record.slug } }"
        >{{ parentName }}</nuxt-link>
      </p>

      <ul class="menu-list" v-if="showChildrenOf(parentData)">
        <nuxt-link
          v-for="child in parentData.children"
          :key="child.record.id"
          :to="{ name: 'hope-portal-slug', params: { slug: child.record.slug } }"
          :class="slugMatches(child.record.slug) + ' ml-4'"
        >{{ child.name }}</nuxt-link>
      </ul>
    </span> -->

    <span>

      <ul class="text-base ml-10 ml-2 menu-label">
        <li>
          <a class="hover:text-blue" href="https://anddit.com/hope-portal?menu%5Bcollection%5D=Financial%20Assistance" target="_blank"> Financial Assistance
          </a>
        </li>
        <li>
          <a class="hover:text-blue" href="https://anddit.com/hope-portal?menu%5Bcollection%5D=Coping%20Support" target="_blank"> Coping Support
          </a>
        </li>
        <li>
          <a class="hover:text-blue" href="https://anddit.com/hope-portal?menu%5Bcollection%5D=Travel%20for%20Treatment" target="_blank"> Travel for Treatment
          </a>
        </li>
        <li>
          <a class="hover:text-blue" href="https://anddit.com/hope-portal?menu%5Bcollection%5D=Wishes%20%26%20Gifts" target="_blank"> Wishes & Gifts
          </a>
        </li>
        <li>
          <a class="hover:text-blue" href="https://anddit.com/hope-portal?menu%5Bcollection%5D=Camps%20%26%20Events" target="_blank"> Camps & Events
          </a>
        </li>
        <li>
          <a class="hover:text-blue text-blue" href="https://anddit.com/hope-portal" target="_blank"> See All
          </a>
        </li>

      </ul>

    </span>

    <!-- <p class="menu-label md:ml-8 -mb-2 hover:bg-white">
      <span class="text-grey font-bold text-xs">CHECK ELIGIBILITY</span>
    </p> -->

    <!-- <SidebarDiagnosis/>

    <SidebarLocation/>
 -->
    <!-- <div class="ml-10 mt-5 text-xs">
      <label class="checkbox" for="include_national">
        <input type="checkbox" id="include_national" v-model="onlyLocal">
        Only Show Local Organizations?
      </label>
    </div> -->
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    onlyLocal: false,
    localTextQuery: ''
  }),
  computed: {
    ...mapGetters(['categories'])
  },
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

<style>
.menu-label {
  text-transform: none !important;
  letter-spacing: 0em;
  font-family: Avenir Next LT W01 Demi;
  color: #30333b;
  margin-bottom: 1rem !important;
  line-height: 2rem;
  font-size: .95rem;
}

.ais-input {
  border-radius: 9999px;
  background-color: #f1f5f8;
  width: 90%;
  padding: 0.75rem 1rem;
  margin-right: 1rem;
}

</style>
