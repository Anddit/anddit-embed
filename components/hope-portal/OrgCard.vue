<template>
  <!-- outer layer that sets the margins and layout -->
  <div class="flex-1 mx-auto mb-4 lg:mb-8 mt-10">
    <!-- border layer that sets the roundedness and shadows" -->

    <div class="rounded-lg h-full card">
      <!-- background image or gradient side -->
      <div
        v-if="hasDefaultImage(result)"
        :class="'relative rounded-t-lg h-48 overflow-hidden flex flex-col justify-center items-center'"
        :style="'background-image: '+bgGradientFor(result)"
      />
      <div class="absolute pin-t pin-r opacity-75">
        <a
          v-if="firstCategory"
          href
          class="match bg-grey-darkest rounded-l rounded-tr py-2 leading-none px-2 uppercase text-grey-light text-xs text-center ml-4 hover-none"
        >Match: {{ firstCategory }}</a>
      </div>
      <div class="absolute pin-t pin-l opacity-75">
        <a
          v-if="result.activestatus === false"
          href
          class="bestknown5 bg-purple-lighter rounded-tl rounded-r py-2 leading-none px-2 uppercase text-purple-darker text-xs text-center hover-none"
        >Hope Portal: Pending Approval</a>
      </div>

      <!-- text side -->
      <div class="px-6 py-6">
        <!-- title and mission -->

        <div class="orgtitle mt-1 ">
          <a :href="'https://anddit.com/orgs/' + result.objectID" class="text-blue hover:underline hover:text-blue align-middle" target="_blank">{{ result.title }}</a>

          <!-- verified icon -->
          <!-- <img
                v-if="result.claimed"
                src="https://img.icons8.com/material/24/000000/verified-account.png"
                class="ml-1 opacity-50 w-4"
              > -->
          <!-- <CheckCircleIcon v-if="result.claimed" class="stroke-current text-blue w-3 h-3 ml-1"/> -->

          <!-- CAC2 image -->

          <span>
            <img
              v-if="result.require_sw"
              class="justify-right"
              src="https://anddit-v3-production.s3.amazonaws.com/coalitions/badges/000/000/001/original/cac2-default.png?1500653420"
              style="width: 25px; height: 25px; border-radius: 100%; float:right;"
            >
          </span>
        </div>

        <div class="text-xs text-grey-dark inline-flex items-center highlightstyle">
          <MapPinIcon class="stroke-current w-3 h-3 mr-1" />Serves {{ displayableLocation }}
        </div>

        <!--  <div v-if="result.mission.length<180" class="text-sm leading-tight text-grey-darker mt-2 mission"> -->
        <div class="mt-2 leading-tight text-sm">
          {{ result.mission }}
          <!-- <span v-for="(cat, i) in categoryData" :key="i">
              <a :href="`/hope-portal/${cat.slug}`" class="card-slug-link">{{ cat.hashTag }}</a>&nbsp;
            </span>-->
        </div>
        <!--  <div v-if="result.mission.length>=180" class="text-sm leading-tight text-grey-darker mt-2 mission" >{{ result.mission.substring(0,180)+"..." }}</div> -->

        <!-- Match Alert:
          <div class="sm:mt-10 md:mt-0">
            <a
              v-if="firstCategory"
              href
              class="expanded-card-skill-button bg-grey-light hover:bg-black-transparent-8 hover:text-grey-dark rounded py-2 leading-none px-4 text-grey-darker uppercase text-xs font-semibold text-center ml-4"
            >Match: {{ firstCategory }}</a>
          </div> -->

        <!-- <div class="mt-5 text-sm">
            <div class="flex flex-row items-center border border-blue rounded py-2 leading-none px-2 hover-none">

              <div class=""><AwardIcon class="stroke-current text-blue w-6 h-6 mr-2"/>
              </div>

              <div class="flex flex-col ">
                <div class="text-blue-lightest text-left bestknown text-xs uppercase">Best Known For</div>
                <div class="highlightstyle text-blue leading-tight text-xs">{{ result.known_for_admins }}</div>

              </div>

              <span v-if="result.highlights.length">
                <p class="uppercase text-grey text-left bestknown text-xs">BEST KNOWN FOR</p>
                <span v-for="highlight in result.highlights" :key="highlight" class="highlightstyle">{{ highlight }}.&nbsp;</span>
              </span>

          </div>
          </div> -->

        <!-- <div class="highlightstyle text-right w-2/5">
              <p class="uppercase text-grey bestknown text-xs bestknown">LOCATION</p>
              {{ displayableLocation }}
            </div> -->
      </div>

      <!-- series episode count -->
      <div v-if="false">
        <a
          href="/hope-portal"
          class="tw-text-grey-dark md:tw-text-xs hover:tw-text-blue md:tw-font-semibold ml-3"
        >500 views</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
import { oldTagsToNew } from '../../utils/oldTags'
import MapPinIcon from '~~/node_modules/vue-feather-icon/components/map-pin.vue'
import CheckCircleIcon from '~~/node_modules/vue-feather-icon/components/check-circle.vue'
import AwardIcon from '~~/node_modules/vue-feather-icon/components/award.vue'

Vue.component('AwardIcon', AwardIcon)
Vue.component('MapPinIcon', MapPinIcon)
Vue.component('CheckCircleIcon', CheckCircleIcon)

export default {
  props: {
    result: {
      type: Object,
      required: true
    },
    pageCategory: {
      type: Object
    }
  },
  computed: {
    displayableLocation () {
      return this.result.location.split(':')[1]
    },
    firstCategory () {
      if (this.pageCategory && !!this.pageCategory.category) {
        return this.pageCategory.category
      }
      return null
    },
    categoryData () {
      return this.result.categories.map((cat) => {
        const catData = { fullName: cat }

        let tempSlug

        if (oldTagsToNew.hasOwnProperty(cat)) {
          catData.fullName = oldTagsToNew[cat].name
          catData.slug = oldTagsToNew[cat].slug
          catData.hashTag = oldTagsToNew[cat].hashTag

          return catData
        }

        tempSlug = this.slugify(catData.fullName)
        catData.hashTag = '#' + tempSlug

        if (this.categorySlugs.includes(tempSlug)) {
          catData.slug = this.categorySlugs.find(s => s === tempSlug)
        }

        return catData
      })
    },
    catHashtags () {
      return this.categoryData.map(cd => cd.hashTag)
    },
    ...mapGetters({
      categorySlugs: 'categorySlugs',
      onlyLocal: 'search/onlyLocal',
      locationSelected: 'search/locationSelected',
      selectedLocation: 'search/selectedLocation'
    })
  },
  methods: {
    hasAvatarImage (result) {
      return (
        result.hasOwnProperty('avatar_url') &&
        result.avatar_url !== '/assets/tmp_hero_group.jpg'
      )
    },
    hasBgImage (result) {
      return (
        result.banner_image_url &&
        result.banner_image_url !== '/assets/tmp_hero_group.jpg'
      )
    },
    hasDefaultImage (result) {
      return result.default_image && result.default_image.length > 0
    },
    bgGradientFor (result) {
      if (this.hasDefaultImage(result)) {
        return `url(${
          result.default_image
        }); background-position: center; background-size: cover; background-repeat: no-repeat; `
      } else if (this.hasBgImage(result)) {
        return `url(${
          result.banner_image_url
        }); background-size: cover; background-position: center; background-repeat: no-repeat;`
      } else if (this.hasAvatarImage(result)) {
        return `url(${
          result.avatar_url
        }); background-position: center; background-size: contain; background-repeat: no-repeat;`
      } else {
        return 'linear-gradient(180deg,#f44881,#ec454f);'
      }
    },
    slugify (category) {
      return category
        .toLowerCase()
        .split(' / ')
        .join('-')
        .split(' ')
        .join('-')
    }

  }
}
</script>

<style lang="scss">
.card {
  box-shadow: rgba(36, 37, 38, 0.08) 0px 6px 15px 0px;

  min-height: 158px;
}

.match {
  font-size:9px !important;
  font-family: Avenir Next LT W01 Demi, sans-serif;
}

.highlightstyle {
font-family: Avenir Next LT W01 Demi, sans-serif;
}

.bestknown
{
  font-family: Avenir Next LT W01 Demi, sans-serif;
  font-size:10px !important;

}

.mission {

  font-family: "AvenirNextLTW01-Regular", sans-serif;
  font-size:13px !important;

}

.bestknown5
{
  font-family: Avenir Next LT W01 Bold, sans-serif;
  font-size:10px !important;
}

</style>

<!--
if (result.title === "Andrew McDonough B+ Foundation") {
        return `url("https://anddit-v3-production.s3.amazonaws.com/groups/banner_images/000/000/069/original/50881513_10155653300496853_2103066109837049856_o.png?1550109888"); background-size: contain; background-position: center; background-repeat: no-repeat;`;
      }

 -->
