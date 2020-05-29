<script src="https://unpkg.com/feather-icons"></script>

<template>
  <div class="organization">
    <section class="flex">
      <div class="w-full mx-auto">
        <div class="md:w-1/2 md:float-left md:mt-4">
          <!-- <button @click.prevent="followOrg">Follow this org</button> -->
          <!-- {{message}} -->
          <div class="mx-auto md:w-4/5 md:mt-6 md:float-right bg-white pb-4 border rounded border-grey-lighter-2 relative">
            <div class="w-full mx-auto justify-center rounded overflow-hidden items-center">
              <div class="mx-auto justify-center" :style="heroImage" />

              <div class="flex text-left">
                <p
                  class="orgtitle leading-none font-bold m-3 text-2xl text-grey-darkest lg:mt-4 px-2"
                >
                  {{ org.title }}
                </p>
              </div>

              <div class="text-base leading-tight px-2 py-3 text-grey-darkest ml-3 mr-3 mission mb-16">
                {{ org.mission }}
              </div>

            <!-- <div class="bestknownfor py-4 text-center">
              <p class="text-grey-dark font-bold text-xs">BEST KNOWN FOR</p>
              <a
                class="mb-4 align-middle text-xs text-grey-darkest"> {{org.known_for_admins}}</a>
              <a
                class="mb-4 align-middle text-xs text-grey-darkest"
                v-for="(topThing, i) in knownFor"
                :key="i"
              >&nbsp;&nbsp;{{ topThing }}&nbsp;&nbsp;</a>
            </div> -->
            <!-- <div class="flex flex-wrap justify-center mb-2">
              <p v-if="org.claimed == true" class="cta text-blue p-2 m-1 text-sm inline-flex"><CheckCircleIcon class="stroke-current w-5 h-5 mr-2 ml-1"/>Active</p>
              <a v-else class="cta text-blue p-2 m-1 text-sm" href="https://about.anddit.com/hope-portal#claim-an-organization" target="_blank">Claim This Organization</a></div> -->
              <!-- <a
                class="cta lg:w-1/4 w-full m-4 py-2 px-4 rounded text-sm font-bold leading-normal bg-blue border border-blue text-white text-center inline-flex items-center lg:hover:bg-white lg:hover:text-blue lg:hover:border lg:hover:border-blue shadow-lg"
                :href="org.website"
                target="_blank"
              ><ExternalLinkIcon class="stroke-current w-4 h-4 mr-2"/>Website</a> -->
            </div>
            <div v-if="org.require_sw" class="absolute pin-b w-full bg-grey-lighter rounded-b py-2">
              <div class="justify-center text-center text-grey ml-3 mr-3 px-2 py-1">
                <div class="highlightstyle inline text-center text-xs text-grey-darker">
                  <img
                    src="https://anddit-v2-production.s3.amazonaws.com/coalitions/badges/000/000/001/original/cac2-default.png?1500653420"
                    style="width: 25px; height: 25px; vertical-align: middle; border-radius: 100%;"
                  > Member Organization | Coalition Against Childhood Cancer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 md:float-right w-full mx-auto">
          <!-- <div class="mx-auto">
          <div class="flex justify-center mt-2">
            <h3
              class="no-underline text-grey-dark border-b-2 border-grey-dark uppercase tracking-wide text-xs py-3"
            >INFO</h3>
          </div>
        </div> -->
          <div class="md:w-3/5 mx-auto mt-4 lg:mt-6">
            <div class="infocard2 mb-4 ml-1 mr-1 rounded ">
              <div class="flex flex-col text-sm py-4 mt-2 mb-2 text-center lg:text-left">
                <div class="w-full cta text-xl lg:text-lg text-grey-darkest">
                  {{ org.title }}
                </div>
                <!-- <div class="">
              <div v-if="org.claimed == true" class="w-full">
                <div class="w-full lg:align-left lg:justify-left">

              <div class="flex flex-row justify-center lg:justify-start items-center mt-1 mb-2 lg:align-middle">
                <div class="text-blue items-center align-middle">
                <CheckCircleIcon class="stroke-current align-middle text-blue w-4 h-4 mr-1"/>
                </div>
                 -->
                <!-- <div class="text-blue-lightest text-left cta text-sm mr-1 ">Status</div> -->
                <!-- <div class="cta text-right text-blue leading-tight text-sm"> Active
                  </div>

              </div>
            </div>
            </div>

            <a v-else class="w-full cta text-blue mr-3 text-xs text-left" href="https://about.anddit.com/hope-portal#claim-an-organization lg:justify-start justify-center" target="_blank">Claim This Organization</a>
            </div> -->
              </div>

              <div class="flex flex-row items-center text-sm py-4 mt-2 ">
                <div class="w-1/2 justify-left mr-3">
                  <a
                    :href="'http://www.facebook.com/sharer.php?u=' + org.website"
                    target="_blank"
                  >
                    <button class="w-full cta btn text-grey-darker py-2 px-8 items-center justify-center rounded text-sm leading-normal border border-grey shadow flex flex-row inline text-center lg:hover:shadow-lg"><FacebookIcon class="stroke-current w-5 h-5 mr-3" />
                      Share</button>
                  </a>
                </div>

                <!-- <div>
              <p v-if="org.claimed == true" class="cta text-blue py-2 px-4 text-sm inline-flex">
                <CheckCircleIcon class="stroke-current w-5 h-5 mr-1"/>
              Active</p>
              <a v-else class="cta text-blue p-2 m-1 text-sm" href="https://about.anddit.com/hope-portal#claim-an-organization" target="_blank">Claim This Organization</a>
            </div> -->

                <div class="w-1/2 inline leading-none ml-3 items-center justify-right">
                  <a :href="org.website" target="_blank" class="">

                    <button
                      class="web w-full cta btn text-white py-2 px-8 items-center rounded text-sm leading-normal shadow-md inline align-middle text-center lg:hover:shadow-lg"
                      style="background-image: linear-gradient(90deg, rgb(24, 163, 245), rgb(41, 72, 255));"
                    >

                      <ExternalLinkIcon class="align-middle items-center inline stroke-current w-5 h-5 mr-3" />Website</button></a>
                </div>
              </div>

              <div class="flex justify-between flex-row items-center text-xs mb-2">
                <div class="highlightstyle text-grey">
                  Show love by sharing
                </div>
                <div class="highlightstyle text-grey">
                  Explore more
                </div>
              </div>
            </div>

            <div class="flex flex-row items-center pin-t pin-l ml-1 lg:ml-none pb-2 uppercase cta text-xs text-grey-dark mt-6 mt-8">
              <!-- <MessageSquareIcon class="stroke-current w-4 h-4 mr-2"/> -->Highlights
            </div>
            <div class="infocard mb-6 bg-white border border-grey-lighter-2 rounded ml-1 mr-1">
              <div class="flex flex-col mx-auto items-center">
                <div class="text-sm w-5/6 mx-auto py-2 leading-none px-1 mt-2 mb-2">
                  <div class="flex flex-row items-center mb-2 px-2 py-3">
                    <div class="text-blue">
                      <AwardIcon class="stroke-current text-blue w-6 h-6 mr-3" />
                    </div>

                    <div class="flex flex-col">
                      <div class="text-blue-lightest mb-1 text-left bestknown text-xs uppercase">
                        Best Known For
                      </div>
                      <div class="highlightstyle text-blue leading-tight text-sm mr-1">
                        {{ org.known_for_admins }}
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-row items-center mt-2 px-2 py-3">
                    <div class="text-grey">
                      <TagIcon class="stroke-current text-grey w-6 h-6 mr-3" />
                    </div>

                    <div class="flex flex-col">
                      <div class="text-grey mb-1 text-left bestknown text-xs uppercase">
                        TYPE OF SUPPORT OFFERED
                      </div>

                      <div class="text-sm leading-loose text-grey-darkest">
                        <span
                          v-for="(c, i) in displayableCategories"
                          :key="i"
                          class="inline-flex no-wrap bg-grey-lighter rounded py-1 px-1 mr-1 mt-1 text-xs"
                        >{{ c }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-row items-center mt-2 px-2 py-3">
                    <div class="">
                      <MapPinIcon class="stroke-current text-grey w-6 h-6 mr-3" />
                    </div>

                    <div class="flex flex-col">
                      <div class="text-grey mb-1 text-left bestknown text-xs uppercase">
                        Location(s) Served
                      </div>
                      <div class="highlightstyle text-grey-darkest leading-tight text-sm">
                        {{ displayableLocation }}
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-row items-center mt-2 px-2 py-3">
                    <div class="">
                      <FileIcon class="stroke-current text-grey w-6 h-6 mr-3" />
                    </div>

                    <div class="flex flex-col">
                      <div class="text-grey mb-1 text-left bestknown text-xs uppercase">
                        Diagnosis Served
                      </div>
                      <div class="highlightstyle text-grey-darkest leading-tight text-sm">
                        {{ displayableDiagnoses }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="flex flex-row items-center pin-t ml-1 lg:ml-none pin-l pb-2 uppercase cta text-xs text-grey-dark mt-8 lg:text-grey"> <MessageSquareIcon class="stroke-current w-4 h-4 mr-2"/> Serving Patient Families</div>
        <div class="infocard mb-12 bg-white rounded ml-1 mr-1 border border-grey-lighter-2">

          <div class="flex flex-col mx-auto items-center">
          <div class="text-sm w-5/6 mx-auto rounded py-2 leading-none px-2 m-2">

              <div class="flex flex-row items-center mt-2 px-2 py-3">

              <div class="">
                <MapPinIcon class="stroke-current text-grey w-6 h-6 mr-3"/>
              </div>

              <div class="flex flex-col">
                <div class="text-grey mb-1 text-left bestknown text-xs uppercase">Location(s) Served</div>
                <div class="highlightstyle text-grey-darkest leading-tight text-sm">
                {{displayableLocation}}
              </div>
              </div>
              </div>
              <div class="flex flex-row items-center mt-2 px-2 py-3">

              <div class="">
                <FileIcon class="stroke-current text-grey w-6 h-6 mr-3"/>
              </div>

              <div class="flex flex-col">
                <div class="text-grey mb-1 text-left bestknown text-xs uppercase">Diagnosis Served</div>
                <div class="highlightstyle text-grey-darkest leading-tight text-sm">
                {{displayableDiagnoses}}
              </div>
              </div>
              </div>

            </div>
            </div>
        </div> -->

            <!-- <div class="m-4 mb-12">

                <a
                class="cta w-full py-2 px-4 rounded text-sm font-bold leading-normal bg-blue border border-blue text-white text-center inline-flex items-center lg:hover:bg-white lg:hover:text-blue lg:hover:border lg:hover:border-blue shadow-lg"
                :href="org.website"
                target="_blank"
              ><ExternalLinkIcon class="stroke-current w-6 h-6 mr-2"/>Website</a>
            </div> -->

            <!-- <div class="infocard mb-6">
          <div class="flex flex-wrap text-sm">
            <div class="w-full mb-6 lg:mb-0 flex flex-col">
              <div class="flex-grow flex flex-col bg-white border-b rounded overflow-hidden mt-8">
                <div class="flex-grow flex px-6 py-3 text-grey-darker items-center border-b -mx-4">
                  <div class="w-1/4 px-4 flex items-center">
                    <span class="text-xs text-grey-dark">OFFERS SUPPORT FOR</span>
                  </div>

                  <div class="info flex w-3/4">
                    <div class="w-full px-4">
                      <div class="text-left lg:text-right text-sm leading-none">
                        <div class="text-grey-darkest">
                          <span class="text-sm text-grey-darkest">
                            <span
                              class="inline-block mr-1 mb-1 bg-grey-lighter rounded-full px-3 py-1 text-sm"
                              v-for="(c, i) in displayableCategories"
                              :key="i"
                            >{{c}}&nbsp;</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-grow flex px-6 py-3 text-grey-darker items-center border-b -mx-4">
                  <div class="w-1/4 px-4 flex items-center">
                    <span class="text-xs text-grey-dark">LOCATION</span>
                  </div>

                  <div class="flex w-3/4">
                    <div class="w-full px-4">
                      <div
                        class="text-left lg:text-right text-grey-darkest text-sm leading-none"
                      >{{displayableLocation}}</div>
                    </div>
                  </div>
                </div>
                <div class="flex-grow flex px-6 py-3 text-grey-darker items-center border-b -mx-4">
                  <div class="w-1/4 px-4 flex items-center">
                    <span class="text-xs text-grey-dark">DIAGNOSIS</span>
                  </div>

                  <div class="flex w-3/4">
                    <div class="w-full px-4">
                      <div
                        class="text-left lg:text-right text-grey-darkest text-sm leading-none"
                      >{{displayableDiagnoses}}</div>
                    </div>
                  </div>
                </div>
                <div class="flex-grow flex px-6 py-3 text-grey-darker items-center border-b -mx-4">
                  <div class="w-1/4 px-4 flex items-center">
                    <span class="text-xs text-grey-dark">MISSION</span>
                  </div>

                  <div class="flex w-3/4">
                    <div class="w-full px-4">
                      <div
                        class="text-left lg:text-right text-grey-darkest text-sm leading-none"
                      >{{org.mission}}</div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div> -->
            <!-- <div class="flex-grow flex px-6 py-3 text-grey-darker items-center border-b -mx-4">
                  <div class="w-full flex items-center justify-center">
                    <a
                      class="text-xs text-blue"
                      href="https://admin.anddit.com/register"
                      target="_blank"
                    >CLAIM THIS ORGANIZATION</a>
                  </div>
                </div> -->

            <!--     <div class='mt-12'>
          <div class="mt-6 bg-blue w-full flex flex-col rounded">
          <a name="claimthisorg"></a>
          <p class="text-grey-lightest font-bold text-md cta text-center mt-6">Claim This Organization</p>
          <p class="text-grey-lightest font-bold text-sm text-center">To claim this organization, submit your work email address below.<br><br></p>

          <form id="claiming" class="w-3/4 mx-auto py-4 px-1 max-w-sm" accept-charset="UTF-8" action="https://usebasin.com/f/2361755d7c9b" method="POST">
  <div class="flex items-center bg-white rounded mt-2 border-white ">
    <input
    class="appearance-none bg-white border-none w-full text-grey-darker mr-3  px-2 leading-tight focus:outline-none"
    placeholder="jane@organization.org"
    id="email" name="email">
    <input type="hidden" name="org" id="organization" v-model="id"/>
    <input type="hidden" name="orgname" id="organization-name" v-model="org.title"/>

    <button class="cta flex-no-shrink mr-4 mt-2 mb-2 bg-blue hover:bg-blue-dark border-blue hover:border-blue-dark text-sm border-4 text-white py-1 px-2 rounded inline-flex items-center" type="submit"> <ArrowRightCircleIcon class="stroke-current w-5 h-5 mr-2 ml-1"/>
      Submit
    </button>
  </div>
</form>
<p class="text-grey-lightest font-bold text-xs text-center mt-4 mb-6">You'll get notified when you're approved! (usually within 24 hours)<br/><br/></p>
</div>

        </div> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Vue from 'vue';
import ExternalLinkIcon from '~~/node_modules/vue-feather-icon/components/external-link.vue';
import CheckCircleIcon from '~~/node_modules/vue-feather-icon/components/check-circle.vue';
import ArrowRightCircleIcon from '~~/node_modules/vue-feather-icon/components/arrow-right.vue';
import AwardIcon from '~~/node_modules/vue-feather-icon/components/award.vue';
import MessageSquareIcon from '~~/node_modules/vue-feather-icon/components/message-square.vue';
import MapPinIcon from '~~/node_modules/vue-feather-icon/components/map-pin.vue';
import TagIcon from '~~/node_modules/vue-feather-icon/components/tag.vue';
import FileIcon from '~~/node_modules/vue-feather-icon/components/file.vue';
import FacebookIcon from '~~/node_modules/vue-feather-icon/components/facebook.vue';

Vue.component('CheckCircleIcon', CheckCircleIcon);
Vue.component('ExternalLinkIcon', ExternalLinkIcon);
Vue.component('ArrowRightCircleIcon', ArrowRightCircleIcon);
Vue.component('AwardIcon', AwardIcon);
Vue.component('MessageSquareIcon', MessageSquareIcon);
Vue.component('MapPinIcon', MapPinIcon);
Vue.component('TagIcon', TagIcon);
Vue.component('FileIcon', FileIcon);
Vue.component('FacebookIcon', FacebookIcon);
// const feather = require('feather-icons')
// // feather.replace()

let org = undefined;

export default {
  layout: "bulma",

  async asyncData({ app, params, route }) {
    console.log("asyncData is executed");
    if (org === undefined) {
      let { data } = await app.$axios.$get(`/orgs/${params.id}`);

      org = data;
    } else if (!!route && !!route.params && !!route.params.id) {
      let { data } = await app.$axios.$get(`/orgs/${route.params.id}`);

      org = data;
    }

    return { org };
  },

    // components:{
    //   ExternalLinkIcon: ExternalLinkIcon,
    //   CheckCircleIcon: CheckCircleIcon,
    //   ArrowRightCircleIcon: ArrowRightCircleIcon,
    // },
    //

    // }
  data() {
    return {
      id: this.$route.params.id,
      org: {},
      message: null
    };
  },
  computed: {
    heroImage() {
      return `background-image: url(${
        this.org.default_image
      }); background-position: center; background-size: cover; background-repeat: no-repeat; min-height:250px; `;
    },
    // knownFor() {
    //   if (!this.org.known_for) return [""];
    //   return this.org.known_for.split("\n");
    // },
    displayableCategories() {
      return this.org.categories.map(c => {
        return (
          // "#" +
          c
            .toLowerCase()
            .split(" / ")
            .join(" + ")
            // .split(" ")
            // .join("-")
        );
      });
    },
    displayableDiagnoses() {
      return this.org.diagnoses.join(", ");
    },
    displayableLocation() {
      return this.org.location.split(" : ")[1];
    }
  }

  // }
  // methods: {
  //   followOrg() {
  //     axios.post("/org_follows/" + this.org.id).then(() => {
  //       this.message = "successfully followed org";
  //     });

  //     // keep this one commented out!
  //     // axios.post("/org_follows/example" {other: 'some data'}).then(() => {
  //     //  this.message = "successfully followed org";
  //     // });
  //   }
  // }
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/functions";
@import "~bulma/bulma";

h1 {
  font-family: Avenir Next LT W01 Bold, sans-serif !important;
}

.bestknownfor {
  font-family: Avenir Next LT W01 Demi, sans-serif !important;
}

body {
  font-family: "AvenirNextLTW01-Regular", sans-serif;
}

.cta {
  font-family: Avenir Next LT W01 Bold, sans-serif !important;
}

.hp-bg-hp {
  background: #f7f8fc !important;
}

.organization {
  background-image: radial-gradient(#f7f8fc, #f8f9fb);
}

.infocard {
  font-family: Avenir Next LT W01 Demi, sans-serif !important;

}

.infocard2 {
  font-family: Avenir Next LT W01 Demi, sans-serif !important;

}

.highlightstyle {
font-family: Avenir Next LT W01 Demi, sans-serif;
}

.bestknown
{
  font-family: Avenir Next LT W01 Bold, sans-serif;
  font-size:10px !important;

}

.mission {

  font-family: "AvenirNextLTW01-Regular", sans-serif;

}

</style>

<!-- @media (min-width: 992px){
.web:hover {
  background-image:none !important;
}
} -->

<!-- {{org.mission}}
<div><div class="flex flex-col bg-white border-b shadow rounded overflow-hidden mt-4">
            <div class="flex justify-left px-6 -mb-px border-b bg-grey-lighter">
              <h3 class="text-grey text-xs py-4 font-bold">CONTACT</h3></div>
            <div class="mx-auto">
                <button class="md:mt-10 m-8 py-4 px-10 p-2 rounded text-sm font-bold leading-normal bg-blue border border-blue text-white text-center hover:bg-white hover:text-blue hover:border hover:border-blue shadow-lg"
              :href="org.website"
              target="_blank"
            >Website</button>
            </div></div></div>

            <div class="px-6 py-4">
    <span class="text-sm font-semibold text-grey-darker"><span
              class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
              v-for="(c, i) in displayableCategories"
              :key="i"
            >{{c}}&nbsp;</span></span>
  </div>

background-size: contain; background-repeat: no-repeat; min-height:300px; min-width:400px;
<div class= "lg:w-2/5 md:w-3/5 w-full container-md bg-white overflow-hidden mx-auto md:mt-4">
        <div class="w-full mx-auto rounded overflow-hidden">
        <div class= "" :style="heroImage"></div>
        <div class="flex justify-center text-center">
   <a class="leading-none font-bold mt-3 text-2xl mb-2 px-6 text-left text-grey-darkest">{{org.title}}</a>
        </div>
      </div>

      </div>

      <a class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-sm py-3 mr-8" href="#">

         </a>
         <a class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-sm py-3" href="#">

         </a>

<div class="flex-grow flex flex-col bg-white border-b rounded shadow overflow-hidden mt-8">
          <div class="border-b">
            <div class="flex justify-between px-6 -mb-px bg-grey-lighter">
              <h3 class="text-grey text-xs py-4 font-bold">ELIGIBILITY</h3>
              <div class="flex">

              </div>
            </div>
          </div>
          <div class="flex-grow flex px-6 py-3 text-grey-darker items-center border-b -mx-4">
            <div class="w-1/4 px-4 flex items-center">

              <span class="text-xs text-grey font-bold">LOCATION</span>
            </div>

            <div class="flex w-3/4">
              <div class="w-full px-4">
                <div class="text-right text-grey-darkest text-sm font-bold leading-none">
                 {{displayableLocation}}
                </div>
              </div>
            </div>
          </div>
          <div class="flex-grow flex px-6 py-3 text-grey-darker items-center border-b -mx-4">
            <div class="w-1/4 px-4 flex items-center">

              <span class="text-xs text-grey font-bold">DIAGNOSIS</span>
            </div>

            <div class="flex w-3/4">
              <div class="w-full px-4">
                <div class="text-right text-grey-darkest font-bold text-sm leading-none">
                  {{displayableDiagnoses}}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="flex-grow flex px-6 py-3 text-grey-darker items-center border-b -mx-4">
            <div class="w-full flex items-center justify-center">
              <span class="text-xs text-blue font-bold">CLAIM THIS ORGANIZATION</span>
            </div>

          </div>

          <a class="w-1/4 p-2 m-4 rounded text-sm font-bold leading-normal bg-grey-lightest border border-grey text-grey-darkest text-center hover:bg-grey-darkest hover:text-white hover:border hover:border-grey-darkest"
              :href="org.website"
              target="_blank"
            >Website</a>

            <a class="no-underline text-grey-darker border-b-2 border-grey-darker uppercase tracking-wide font-bold text-sm py-3 mr-8" href="#">
             INFO
         </a>
         <a class="no-underline text-grey border-b-2 border-transparent uppercase tracking-wide font-bold text-sm py-3 mr-8" href="#">
             OFFERS
         </a>
 -->
