<template>
  <v-hover
    v-model="hover"
    open-delay="100"
  >
    <common-video-player
      ref="player"
      class="video-clip"
      v-bind="$attrs"
      cover
      :options="playerOptions"
    />
  </v-hover>
</template>

<script>
import { ref, computed } from '@vue/composition-api'

export default {
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props) {
    const hover = ref(false)
    const player = ref(null)

    const playerOptions = computed(() => ({
      ...props.options,
      controls: false,
      muted: true,
      autoplay: hover.value
    }))

    return {
      hover,
      player,
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

  .vjs-poster {
    background-size: cover;
  }
}
</style>
