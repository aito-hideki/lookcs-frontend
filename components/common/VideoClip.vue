<template>
  <v-hover
    v-model="hover"
    open-delay="100"
  >
    <common-video-player
      class="video-clip"
      cover
      :options="playerOptions"
      :offset="$attrs.offset"
      v-on="$listeners"
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

    const playerOptions = computed(() => ({
      ...props.options,
      controls: false,
      muted: true,
      autoplay: hover.value
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

  .vjs-poster {
    background-size: cover;
  }
}
</style>
