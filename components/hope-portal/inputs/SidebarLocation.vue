<template>
  <div class="ml-8">
    <multiselect
      v-model="localLocation"
      class="mr-2 mt-2"
      :options="locationStrings"
      :searchable="true"
      placeholder="Add Location"
      @input="updateSelected"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
  data () {
    return {
      localLocation: ''
    }
  },
  computed: {
    ...mapGetters({
      locationFacets: 'search/locationFacets',
      selectedLocation: 'search/selectedLocation',
      locationOptions: 'locations'
    }),
    locationStrings () {
      const strings = this.locationOptions
        .map(opt => opt.name)
        .filter(o => o !== 'National' && o !== 'Canada')
        .sort()
      strings.unshift('National')
      strings.push('Canada')

      return strings
    }
  },
  methods: {
    ...mapActions({
      setLocationQuery: 'search/setLocationQuery',
      setLocFacets: 'search/setLocationFacets'
    }),
    updateSelected (e) {
      console.log(e)

      let submission = this.locationOptions.find((opt) => {
        return opt.name === e
      })

      if (submission) {
        submission = submission.value
      } else {
        submission = 'National'
      }

      this.setLocFacets([submission])
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
<style>
.multiselect {
  width: auto !important;
}
</style>
