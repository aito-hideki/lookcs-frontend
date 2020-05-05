<template>
  <v-card
    class="video-clip"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <v-img
      :src="playerOptions.poster || ''"
      :aspect-ratio="16/9"
    />
    <common-video-player
      v-if="hover"
      class="video-clip"
      cover
      :options="playerOptions"
      :offset="$attrs.offset"
      v-on="$listeners"
    />
  </v-card>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
import { thumbnailOptions } from '@/constants'

export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props) {
    const hover = ref(false)
    const playerOptions = computed(() => ({
      ...thumbnailOptions,
      controls: false,
      muted: true,
      autoplay: true,
      loop: true,
      sources: [{
        type: 'video/mp4',
        src: props.content.thumbnail
      }],
      poster: props.content.poster
    }))

    return {
      hover,
      playerOptions
    }
  }
}
</script>

<style lang="scss">
.video-clip {
  cursor: pointer;

  .video-js {
    pointer-events: none;
  }

  .video-player {
    display: none;
  }

  &:hover {
    .v-image {
      display: none;
    }
    .video-player {
      display: block;
    }
  }
}
</style>
