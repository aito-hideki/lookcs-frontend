<template>
  <div
    v-video-player:myVideoPlayer="options"
    class="video-player"
    :class="{ cover: cover }"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    cover: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.video-player {
  min-width: 150px;

  > .video-js {
    width: 100% !important;
  }

  &.cover {
    video.vjs-tech {
      object-fit: cover;
    }
  }
}
</style>
