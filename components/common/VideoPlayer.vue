<template>
  <div
    v-video-player:myVideoPlayer="options"
    v-bind="$attrs"
    class="video-player"
  />
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
.video-player {
  min-height: 200px;
  > .video-js {
    width: 100% !important;
  }
}
</style>
