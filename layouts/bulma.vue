
<script src="https://unpkg.com/feather-icons"></script>
<template>
  <div>
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">
      <div class="navbar-brand text-sm body align-text-middle align-middle">
        <!-- <a
          class="navbar-item text-sm font-sans text-grey-dark"
          href="https://www.hope-portal.org"
        >& | Hope Portal
      </a> -->
        <div class="navbar-item">
          <p class="text-grey-darkest items-center align-middle ml-2 mr-2 inline">
            &
          </p>
          <a class="text-grey-darkest underline ml-1 mr-2 hover:text-blue" href="https://anddit.com/hope-portal" target="_blank">Hope Portal</a>

          <a href="https://anddit.com/login" class="inline text-grey hover:no-underline hover:text-blue align-middle">Dashboard</a>
        </div>

        <div class="navbar-burger" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu align-middle"
        :class="{ 'is-active': showNav }"
      >
        <div class="navbar-end text-sm align-middle mr-4">
          <a class="navbar-item" href="https://about.anddit.com/hope-portal" target="_blank">About</a>
          <a
            class="navbar-item"
            href="https://anddit.drift.help/category/getting-started-with-the-hope-portal"
            target="_blank"
          >Help</a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>
            <div class="navbar-dropdown">
              <!-- <a
                class="navbar-item"
                href="https://about.anddit.com/organizations-childhood-cancer"
              >Organizations</a> -->
              <a
                class="navbar-item"
                href="https://anddit.com/claim-my-organization"
                target="_blank"
              >Claim My Organization</a>
              <a class="navbar-item" href="https://about.anddit.com/social-workers">Social Workers</a>
              <a
                class="navbar-item"
                href="https://anddit.drift.help/article/how-to-embed-the-hope-portal-on-my-website/"
                target="_blank"
              >Embed Hope</a>
            </div>
          </div>

          <template v-if="auth.loggedIn">
            <a
              v-if="auth.user.nova_access && hasAdminLink(auth.user)"
              class="navbar-item"
              :href="adminLinkFor(auth.user)"
              target="_blank"
            >Edit your organization</a>
            <a class="navbar-item" href="/profile/feed">My Feed</a>
            <a href="#" class="navbar-item" @click.prevent="signout">Sign out</a>
          </template>

          <template v-else>
            <div class="navbar-item align-middle">
              <div class="buttons align-middle">
                <a
                  class="mb-2 py-2 px-4 rounded border border-grey text-grey-darkest flex justify-center items-center"
                  href="https://anddit.com/login"
                  target="_blank"
                >
                  Login
                </a>
              </div>
            </div>

            <!-- <a class="navbar-item" href="https://admin.anddit.com/login" target="_blank">Login</a> -->
            <!-- <a class="navbar-item" href="/profile/login">User Login</a> -->

            <div class="navbar-item align-middle">
              <div class="buttons hover:text-white text-white align-middle">
                <a
                  class="has-text-weight-semibold hover:text-white bg-is-primary shadow mb-2 lg:mr-2 text-white py-2 px-4 rounded flex justify-center items-center border hover:shadow-lg has-text-white  "
                  href="https://anddit.com/add-my-organization"
                  target="_blank"
                >
                  Add My Organization
                </a>
              </div>
            </div>

            <div v-show="onlyMobile" class="navbar-item align-middle">
              <div class="buttons align-middle">
                <a
                  class="bg-is-primary mb-2 lg:mr-2 shadow text-white py-2 px-4 rounded flex justify-center items-center hover:text-white"
                  @click.prevent="toggleBothMenus"
                >
                  <strong>Search</strong>
                </a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </nav>

    <nuxt />

    <!-- <div class="footer">
      <div class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-one-quarter">
              <div>
                <i data-feather="circle"></i>
                <p class="font-bold text-grey-darker mb-3">Hope Portal</p>
              </div>
              <ul class="list-reset leading-loose">
                <li class="hover:text-blue text-grey-darker">
                  <a href="https://about.anddit.com/hope-portal">About</a>
                </li>
                <li class="hover:text-blue text-grey-darker">
                  <a
                    href="https://anddit.drift.help/category/getting-started-with-the-hope-portal"
                  >FAQ/Help Center</a>
                </li>
              </ul>
            </div>
            <div class="column is-one-quarter">
              <div>
                <p class="font-bold text-grey-darker mb-3">Community</p>
              </div>
              <ul class="list-reset leading-loose">
                <li class="hover:text-blue text-grey-darker">
                  <a href="https://about.anddit.com/organizations-childhood-cancer">Organizations</a>
                </li>
                <li class="hover:text-blue text-grey-darker">
                  <a href="https://about.anddit.com/social-workers">Social Workers</a>
                </li>
              </ul>
            </div>
            <div class="column is-one-quarter">
              <div>
                <p class="font-bold text-grey-darker mb-3">Getting Started</p>
              </div>
              <ul class="list-reset leading-loose">
                <li class="hover:text-blue text-grey-darker">
                  <a
                    href="https://anddit.drift.help/article/tips-for-finding-resources/"
                  >Finding Resources</a>
                </li>
                <li class="hover:text-blue text-grey-darker">
                  <a
                    href="https://anddit.drift.help/article/how-to-embed-the-hope-portal-on-my-website/"
                  >Embed Hope Portal</a>
                </li>
                <li class="hover:text-blue text-grey-darker">
                  <a
                    href="https://anddit.drift.help/category/getting-started-with-the-hope-portal/"
                  >Guide For Organizations</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Vue from 'vue';
import UsersIcon from '~~/node_modules/vue-feather-icon/components/users.vue';

Vue.component('UsersIcon', UsersIcon);

export default {
  data: () => ({
    showNav: false
  }),
  computed: {
    ...mapState(["auth"]),
    onlyMobile() {
      if (!process.client) return false;
      return window.innerWidth < 780;
    }
  },
  methods: {
    async signout() {
      await this.$auth.logout();
    },
    adminLinkFor(user) {
      if (user.group_ids.length === 0) return "https://anddit.com/nova";

      return `https://anddit.com/nova/resources/organizations/${
        user.group_ids[0]
      }/edit`;
    },
    hasAdminLink(user) {
      if (user.group_ids.length > 0) return true;

      return false;
    },
    toggleBothMenus() {
      this.toggleMobileMenu();
      this.showNav = !this.showNav;
    },
    ...mapActions(["toggleMobileMenu"])
  }
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/functions";

// override default bulma variables below
$table-cell-padding: 2em 2em;
$table-cell-border-width: 0;
$table-background-color: transparent;

$message-body-border: 0;

$primary: #1062ed;

@import "~bulma/bulma";

.bg-is-primary {
  background-color: $primary;
}

.hp-text-color-hp {
  color: #363840 !important;

  a {
    color: inherit;
  }

  a.my-active-link {
    color: #1062ed !important;
  }
}

.hp-bg-hp {
  background: #f7f8fc;
}

aside.menu {
}

.uicon {
  stroke: #fff !important;
  color: #fff !important;
}

.navbar-item {
  font-family: AvenirNextLTW01-Medium, sans-serif !important;
}

.navbar-link {
  font-family: AvenirNextLTW01-Medium, sans-serif !important;
}

body {
  font-family: "AvenirNextLTW01-Regular", sans-serif !important;
}

.footer {
  font-family: Avenir Next LT W01 Demi, sans-serif !important;
}

.orgtitle {
  font-family: Avenir Next LT W01 Bold, sans-serif !important;
}

h3 {
  font-family: Avenir Next LT W01 Bold, sans-serif !important;
}
</style>

<!--
<div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="https://about.anddit.com/organizations">Organizations</a>
              <a class="navbar-item" href="https://about.anddit.com/social-workers">Social Workers</a>
              <a
                class="navbar-item"
                href="https://anddit.drift.help/category/getting-started-with-the-hope-portal/"
              >FAQs/Help</a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://about.anddit.com/recommend">Add A Resource</a>
            </div>
          </div>

          <li class="hover:text-blue text-grey-darker">
                  <a href="https://hope-portal.anddit.com">Families</a>
                </li>

 -->
