<template>
  <div class="ml-8 mb-5">
    <multiselect
      v-model="localDiag"
      class="mr-2"
      :options="diagnosisNames"
      :searchable="true"
      placeholder="Add Diagnosis"
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
      localDiag: ''
    }
  },
  computed: {
    ...mapGetters({
      selectedDiagnosis: 'search/selectedDiagnosis',
      diagnosisOptions: 'diagnoses'
    }),
    diagnosisNames () {
      return this.diagnosisOptions.map(diagOpt => diagOpt.name)
    }
  },
  methods: {
    ...mapActions({
      setDiagnosisQuery: 'search/setDiagnosisQuery'
    }),
    updateSelected (diagName) {
      console.log(diagName)
      let submission = this.diagnosisOptions.find((diagOpt) => {
        return diagOpt.name === diagName
      })
      console.log(submission)
      if (submission && submission.value) {
        submission = submission.value
      } else {
        submission = ''
      }

      this.setDiagnosisQuery(submission)
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
<style lang="scss">
.multiselect__placeholder {
    color: #30333b;
    font-family: Avenir Next LT W01 Demi;
}

.multiselect {
    width: auto !important;
}

.multiselect__element span {
    font-size: 12px !important;
}

.multiselect__option--highlight {
    background-color: rgb(16, 98, 237) !important;
    background: #1062ed;
}

.multiselect__single span {
font-size: 12px;
}
</style>
