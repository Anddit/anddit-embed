import locations from '@/utils/locations'

export const state = () => ({
  categories: [],
  diagnosisQuery: '',
  diagnosisSelected: false,
  locationFacets: [],
  locationQuery: '',
  locationSelected: false,
  onlyLocal: false,
  textQuery: ''
})

export const mutations = {
  RESET_STATE (currState) {
    currState = state()
  },
  SET_CURRENT_CATEGORIES (state, cats) {
    state.categories = cats
  },
  SET_DIAGNOSIS_QUERY (state, searchTerm) {
    if (searchTerm && searchTerm.length > 0) {
      state.diagnosisQuery = searchTerm
      state.diagnosisSelected = true
    } else {
      state.diagnosisQuery = ''
      state.diagnosisSelected = false
    }
  },
  SET_LOCATION_FACETS (state, locationFacets) {
    state.locationFacets = locationFacets

    if (state.onlyLocal !== true) {
      const locKey = state.locationFacets
        .filter(loc => loc !== 'location_facets:National')
        .join(' ')
      state.locationQuery = locations[locKey]
    } else {
      state.locationQuery = ''
    }
  },
  SET_LOCATION_QUERY (state, searchTerm) {
    if (searchTerm && searchTerm.length > 0) {
      state.locationQuery = searchTerm
      state.locationSelected = true
    } else {
      state.locationQuery = ''
      state.locationSelected = false
    }
  },
  SET_ONLY_LOCAL (state, bool) {
    state.onlyLocal = bool
  },
  SET_TEXT_QUERY (state, searchTerm) {
    if (searchTerm && searchTerm.length > 0) {
      state.textQuery = searchTerm
    } else {
      state.textQuery = ''
    }
  }
}

export const getters = {
  facetFilters (state) {
    const mainFacets = state.categories.map(cat => `categories:${cat.name}`)

    const facetFilters = [mainFacets]

    const locFacets = state.locationFacets
      .filter(loc => loc !== 'location_facets:National')
      .map(loc => `location_facets:${loc}`)

    if (!state.onlyLocal) {
      // mainFacets.unshift(...locFacets)
      // mainFacets.unshift("location_facets:National")
      return [mainFacets]
    }

    facetFilters.push(locFacets[0])

    return facetFilters
  },
  selectedDiagnosis (state) {
    return state.diagnosisQuery
  },
  selectedLocation (state) {
    return state.locationQuery
  },
  currentTextQuery (state) {
    return state.textQuery
  },
  fullSearchQuery (state) {
    let query = ''

    query =
      query +
      ' ' +
      state.diagnosisQuery +
      ' ' +
      state.locationQuery +
      ' ' +
      state.textQuery

    return query.trim()
  },
  locationFacets (state) {
    return state.locationFacets
  },
  locationSelected (state) {
    return state.locationSelected
  },
  onlyLocal (state) {
    return state.onlyLocal
  }
}

export const actions = {
  resetState ({ commit }) {
    commit('RESET_STATE')
  },
  setCurrentCategories ({ commit }, cats) {
    commit('SET_CURRENT_CATEGORIES', cats)
  },
  setDiagnosisQuery ({ commit }, searchTerm) {
    commit('SET_DIAGNOSIS_QUERY', searchTerm)
  },
  setLocationFacets ({ commit, state }, locFacets) {
    commit('SET_LOCATION_FACETS', locFacets)
  },
  setLocationQuery ({ commit }, searchTerm) {
    commit('SET_LOCATION_QUERY', searchTerm)
  },
  setOnlyLocal ({ commit, state, dispatch }, bool) {
    commit('SET_ONLY_LOCAL', bool)
    dispatch('setLocationFacets', state.locationFacets)
  },
  setTextQuery ({ commit }, searchTerm) {
    commit('SET_TEXT_QUERY', searchTerm)
  }
}
