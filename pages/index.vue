<template>
  <v-row>
    <common-movie-list :per-page="perPageMovie" />
  </v-row>
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  setup (props, { root }) {
    void (props)
    const perPageMovie = computed(() => root.$vuetify.breakpoint.lgAndUp ? 6
      : root.$vuetify.breakpoint.mdAndUp ? 4
        : root.$vuetify.breakpoint.smAndUp ? 2 : 1)
    return {
      perPageMovie,
      perPageAdv: 1
    }
  }
}
</script>
