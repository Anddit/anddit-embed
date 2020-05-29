<template>
  <div class="ml-6 mr-6 lg:mr-10 lg:ml-10 mx-auto">
    <div class="column">
      <div v-for="(followup, i) in followups" :key="i" class="field">
        <label class="label">{{ followup.question }}</label>

        <div class="control">
          <div class="select">
            <select id="" name="">
              <option v-for="(option, j) in followup.options" :key="j" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <br><br>

    <div v-if="displayableTags.length">
      <span
        v-for="(tag, i) in displayableTags"
        :key="i"
        data-color="#E05676"
        class="invisible hover:text-white md:w-28 md:ml-4 button text-center inline-block px-5 py-25 md:py-2 tracking-normal font-bold"
      >
        {{ tag }}
      </span>

      <br>
      <button
        class="invisible bg-grey hover:bg-grey-darkest text-white text-xs mt-2 py-2 px-4 rounded-full"
        @click="reloadPage"
      >
        Clear Eligibility Tags
      </button>
    </div>

    <ais-index
      app-id="F62MOPA7KR"
      api-key="e848776c664750604e4fac57fab5b12d"
      :index-name="indexName"
      :query="finalSearch"
      :query-parameters="queryParams"
    >
      <ais-stats>
        <template slot-scope="{ totalResults }">
          {{ totalResults }} results
        </template>
      </ais-stats>

      <ais-results>
        <template slot-scope="{ result }">
          <OrgCard :result="result" :page-category="pageCategory" />
          <br><br>
        </template>
      </ais-results>

      <ais-no-results>
        <template slot-scope="props">
          No organizations found for this category.
        </template>
      </ais-no-results>

      <div v-if="!onlyNearby" class="row">
        <ais-pagination
          ref="paginator"
          :class-names="{
            'ais-pagination':'pagination-list',
            'ais-pagination__item--previous': 'pagination-previous',
            'ais-pagination__item--next': 'pagination-next',
            'ais-pagination__item': '',
            'ais-pagination__item--active ais-pagination__link': 'is-current',
            'ais-pagination__link': 'pagination-link'
          }"

          @page-change="scrollToTop"
        />
      </div>
    </ais-index>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import OrgCard from './OrgCard.vue'

export default {
  components: { OrgCard },
  props: {
    currentCategories: {
      type: Array
    },
    diagnosisNames: {
      type: Array
    },
    locationNames: {
      type: Array
    },
    followups: {
      type: Array,
      required: false
    },
    indexName: {
      type: String,
      required: true
    },
    pageCategory: {
      type: Object
    }
  },
  data () {
    return {
      tempSearchQuery: '',
      onlyNearby: ''
    }
  },
  computed: {
    ...mapGetters({
      currentLocs: 'search/locationFacets',
      facetFilters: 'search/facetFilters',
      finalSearch: 'search/fullSearchQuery',
      selectedDiagnosis: 'search/selectedDiagnosis',
      selectedLocation: 'search/selectedLocation'
    }),
    displayableTags () {
      const final = []

      if (this.facetFilters && this.facetFilters.length > 0) {
        final.concat(this.facetFilters)
      }

      final.push(this.selectedDiagnosis)

      return final.filter(t => t !== undefined && typeof t === 'string')
        .map((t) => {
          if (t && t.split(':').length > 1) {
            return t.split(':')[1]
          }
          return t
        }).filter(t => t.trim() !== '')
    },
    queryParams () {
      return {
        facetFilters: this.facetFilters
      }
    }
  },
  watch: {
    tempSearchQuery (newQuery, oldQuery) {
      this.setTextQuery(newQuery)
    }
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    tagify (str) {
      return str.toLowerCase().split(' ').join('-')
    },
    ...mapActions({
      resetSearchState: 'search/resetState',
      setCurrentCategories: 'search/setCurrentCategories',
      setTextQuery: 'search/setTextQuery'
    }),
    reloadPage () {
      window.location.reload(true)
    }
  }
}
</script>

<style lang="scss">
    .menu-list {
        a {
            &.is-active {
                width: 66%;
            }

            &:hover {
                width: 66%;
            }
        }

        .dropdown-trigger {
            .button {
                width: 117%;
            }
        }

        .dropdown-item {
            &.is-active {
                width: 80%;
            }

            &:hover {
                width: 80%;
            }
        }
    }

</style>
