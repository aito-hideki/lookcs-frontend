<template>
  <section class="container">
    <common-video-player :options="playerOptions" />
  </section>
</template>

<script>
export default {
  data () {
    return {
      // component options
      playsinline: true,

      // videojs options
      playerOptions: {
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        fluid: true,
        sources: [{
          type: 'video/mp4',
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
        }]
      }
    }
  }
}
</script>
