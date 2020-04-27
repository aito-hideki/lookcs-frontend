<template>
  <v-app>
    <v-app-bar
      class="elevation-0"
      fixed
      app
    >
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            @click="$router.push('/')"
            v-on="on"
          >
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </template>
        <span>Go to Home</span>
      </v-tooltip>

      <v-subheader>
        <v-icon class="mr-1" color="secondary lighten-3">
          mdi-account-heart
        </v-icon>
        3,483 Followers
      </v-subheader>

      <v-spacer />

      <v-text-field
        outlined
        dense
        rounded
        hide-details
      />

      <v-spacer />

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
            @click="toggleThemeMode"
          >
            <v-icon>
              {{ $vuetify.theme.dark ? 'mdi-weather-night' : 'mdi-lightbulb-on' }}
            </v-icon>
          </v-btn>
        </template>
        <span>Switch to {{ $vuetify.theme.dark ? 'Light' : 'Dark' }} mode</span>
      </v-tooltip>

      <v-row
        v-show="$vuetify.breakpoint.mdAndUp"
        class="flex-grow-0"
        justify="end"
        no-gutters
      >
        <template
          v-for="(item, i) in items"
        >
          <v-tooltip
            :key="`tool-button-${i}`"
            bottom
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                @click="$router.push(item.to)"
                v-on="on"
              >
                <v-icon>
                  {{ item.icon }}
                </v-icon>
              </v-btn>
            </template>
            <span>{{ item.title }}</span>
          </v-tooltip>
        </template>
      </v-row>

      <v-menu left>
        <template v-slot:activator="{ on }">
          <v-btn v-show="$vuetify.breakpoint.mdAndUp" icon v-on="on">
            <v-icon>
              mdi-account
            </v-icon>
          </v-btn>
        </template>

        <v-list class="mt-12" width="200">
          <v-list-item
            to="/profile"
            router
            exact
          >
            <v-list-item-title>
              My Profile
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-app-bar-nav-icon
        v-show="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>

    <v-navigation-drawer
      v-show="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      temporary
      right
      fixed
      app
    >
      <v-list flat>
        <v-list-item
          to="/profile"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              My Profile
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="(item, i) in items"
          :key="`menu-${i}`"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Logout
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <nuxt />

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup (props, { root }) {
    const drawer = ref(false)
    const fixed = ref(false)
    const items = ref([
      {
        icon: 'mdi-cloud-upload',
        title: 'Upload Content',
        to: '/upload'
      },
      {
        icon: 'mdi-bitcoin',
        title: 'Fund',
        to: '/fund'
      },
      {
        icon: 'mdi-cart',
        title: 'Checkout',
        to: '/cart'
      },
      {
        icon: 'mdi-email-mark-as-unread',
        title: 'Notifications',
        to: '/notifications'
      }
    ])

    const toggleThemeMode = () => {
      if (root.$vuetify.theme.dark) {
        root.$vuetify.theme.dark = false
        root.$vuetify.theme.light = true
      } else {
        root.$vuetify.theme.light = false
        root.$vuetify.theme.dark = true
      }
    }

    return {
      drawer,
      fixed,
      items,

      toggleThemeMode
    }
  }
}
</script>

<style lang="scss">
@import url(@/styles/index.scss);
</style>
