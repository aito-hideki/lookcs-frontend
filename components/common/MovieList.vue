<template>
  <div class="movie-list d-flex flex-row justify-content flex-grow-1 align-center">
    <v-btn icon>
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-row class="flex-grow-1 mx-2 flex-nowrap">
      <v-col
        v-for="item in itemsPerPage"
        :key="item"
        class="d-flex justify-evenly"
      >
        <v-img
          src="https://www.prinz-sportlich.de/wp-content/uploads/2017/08/Gesunde_Lebensmittel_Auswahl_shutterstock_1046974981-750x355.jpg"
          aspect-ratio="1.7"
        />
        <div class="movie-list__creator" />
      </v-col>
    </v-row>
    <v-btn icon>
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
export default {
  props: {
    perPage: {
      type: Number,
      default: 4
    }
  },
  setup (props) {
    const itemsPerPage = computed(() => props.perPage)
    return {
      itemsPerPage
    }
  }
}
</script>
