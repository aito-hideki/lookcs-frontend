<template>
  <v-app dark>
    <v-app-bar
      clipped-right
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

      <v-spacer />

      <v-row
        v-show="$vuetify.breakpoint.mdAndUp"
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
                :to="item.to"
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

        <v-list class="mt-12" width="200" light>
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

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      fixed: false,
      items: [
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
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
