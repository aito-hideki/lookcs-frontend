<template>
  <div class="video-mono">
    <common-video-player
      :options="options"
      v-on="$listeners"
    />
    <div class="video-mono__author mt-2">
      <div class="d-flex align-stretch my-3">
        <v-avatar size="40" class="mr-4">
          <v-img src="/company/tomjerry.jpg" />
        </v-avatar>
        <div class="d-flex flex-column justify-center">
          <div class="title">
            UnrealEntGaming
          </div>
        </div>
        <v-spacer />
        <div class="d-flex flex-column justify-center text-right">
          <div class="subtitle-1">
            <b>10,151</b> Views
          </div>
          <div class="caption">
            3 months ago
          </div>
        </div>
      </div>
      <div class="headline">
        Driving Offroad Through California (We Found it!)
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import { playerOptions } from '~/constants'

export default {
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  setup () {
    const options = computed(() => playerOptions)

    return {
      options
    }
  }
}
</script>
