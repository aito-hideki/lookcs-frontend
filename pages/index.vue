<template>
  <v-row no-gutters>
    <v-col
      cols="12"
      lg="9"
      xl="10"
    >
      <v-subheader>
        <v-icon class="mr-1" color="secondary lighten-3">
          mdi-heart
        </v-icon>
        3,483 Following
      </v-subheader>
      <common-carousel
        v-for="i in 6"
        :key="`content-${i}`"
        :item-width="250"
      >
        <common-video-player
          v-for="j in 6"
          :key="`content-${i}-${j}`"
          :options="playerOptions"
        />
      </common-carousel>
    </v-col>
    <v-col
      cols="12"
      lg="3"
      xl="2"
    >
      <v-card>
        <v-row no-gutters>
          <v-spacer />
          <v-subheader class="text-center">
            ADS
          </v-subheader>
          <v-spacer />
        </v-row>
        <common-carousel
          v-for="i in 6"
          :key="`adv-${i}`"
          :item-width="250"
          :max-per-page="1"
        >
          <common-video-player
            v-for="j in 6"
            :key="`adv-${i}-${j}`"
            :options="playerOptions"
          />
        </common-carousel>
      </v-card>
    </v-col>
  </v-row>
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
