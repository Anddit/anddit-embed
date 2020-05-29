export const state = () => ({
  categories: [],
  diagnoses: [],
  locations: [],
  infoOrgs: [],
  showMobileMenu: false
})

// these are like Redux reducers
export const mutations = {
  SET_CATEGORIES (state, categories) {
    state.categories = categories
  },
  SET_DIAGNOSES (state, diagnoses) {
    state.diagnoses = diagnoses
  },
  SET_LOCATIONS (state, locations) {
    state.locations = locations
  },
  SET_INFO_ORGS (state, orgs) {
    state.infoOrgs = orgs
  },
  TOGGLE_MOBILE_MENU (state) {
    state.showMobileMenu = !state.showMobileMenu
  }
}

const flattenCategories = (categories) => {
  const firstLevel = Object.values(categories)
  const l = firstLevel.length
  for (let i = 0; i < l; i++) {
    firstLevel[i].children.forEach(child => firstLevel.push(child))
  }

  return firstLevel
}

export const getters = {
  categoriesFlat (state) {
    return flattenCategories(state.categories)
  },
  categories (state) {
    return state.categories
  },
  categorySlugs (state) {
    return flattenCategories(state.categories).map(
      flatCat => flatCat.record.slug
    )
  },
  diagnoses (state) {
    return state.diagnoses
  },
  locations (state) {
    return state.locations
  },
  getCategoryAndChildrenById: state => id =>
    Object.values(state.categories).find(cat => cat.record.id === id),
  infoOrgs (state) {
    return state.infoOrgs
  },
  showMobileMenu (state) {
    return state.showMobileMenu
  }
}

// these are like Redux action creators
export const actions = {
  toggleMobileMenu ({ commit }) {
    commit('TOGGLE_MOBILE_MENU')
  },
  async nuxtServerInit ({ commit, dispatch }, { app }) {
    const response = await app.$axios.$get(
      'https://anddit.com/api/common_field_names'
    ) // fetches response.data, which is our json

    commit('SET_CATEGORIES', response.data.categories)
    commit('SET_DIAGNOSES', response.data.diagnoses)
    commit('SET_LOCATIONS', response.data.locations)
    commit('SET_INFO_ORGS', response.data.infoOrgs)
  },
  async nuxtClientInit ({ commit, dispatch }, { app }) {
    const response = await app.$axios.$get(
      'https://anddit.com/api/common_field_names'
    ) // fetches response.data, which is our json

    commit('SET_CATEGORIES', response.data.categories)
    commit('SET_DIAGNOSES', response.data.diagnoses)
    commit('SET_LOCATIONS', response.data.locations)
    commit('SET_INFO_ORGS', response.data.infoOrgs)
  }
}
