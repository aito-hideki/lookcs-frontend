<template>
  <div class="video-mono">
    <common-video-player
      :options="options"
      v-on="$listeners"
    />
    <div
      class="video-mono__author mt-2"
      :class="{ 'd-none': hideDetails }"
    >
      <div class="d-flex align-stretch my-3">
        <v-avatar
          size="40"
          class="tapable mr-4"
          @click="$router.push(`/profile/${content.author}`)"
        >
          <v-img :src="creator.avatar" />
        </v-avatar>
        <div class="d-flex flex-column justify-center">
          <div class="title">
            {{ creator.name }}
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
        {{ content.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import { playerOptions, creators } from '@/constants'

export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    },
    hideDetails: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const options = computed(() => ({
      ...playerOptions,
      autoplay: true,
      poster: props.content.poster
    }))

    const creator = computed(() => creators[props.content.author])

    return {
      options,
      creator
    }
  }
}
</script>
