<template>
  <v-content>
    <v-container fluid>
      <v-row class="align-stretch justify-center">
        <v-col
          class="d-flex flex-row-reverse align-center justify-center"
          cols="12"
          sm="6"
          lg="4"
        >
          <div class="d-flex flex-column align-center pt-12">
            <v-badge
              color="success"
              icon="mdi-check"
              overlap
            >
              <v-avatar class="d-block d-lg-none mb-2" size="150">
                <v-img src="/company/tomjerry.jpg" />
              </v-avatar>
              <v-avatar class="d-none d-lg-block mb-2" size="200">
                <v-img src="/company/tomjerry.jpg" />
              </v-avatar>
            </v-badge>
            <div class="title">
              Aito0109
            </div>
            <div class="subtitle-2">
              1.38M Followers
            </div>
          </div>
          <div class="d-flex flex-column align-center mr-4 align-stretch pb-6">
            <v-btn class="white--text my-1" color="red darken-1">
              Subscribe
            </v-btn>
            <v-btn class="white--text my-1" color="red darken-1">
              Follow
            </v-btn>
            <v-btn class="white--text my-1" color="red darken-1">
              Donate
            </v-btn>
            <v-btn class="white--text my-1" color="red darken-1">
              Shop
            </v-btn>
          </div>
        </v-col>
        <v-col
          class="d-flex flex-column justify-center order-sm-1 order-lg-0"
          cols="12"
          sm="8"
          md="6"
          lg="4"
        >
          <common-video-player :options="thumbnailOptions" />
        </v-col>
        <v-col
          class="d-flex flex-row align-stretch order-1 order-sm-0"
          cols="12"
          sm="6"
          lg="4"
        >
          <v-card class="flex-grow-1">
            <v-card-title>
              Description
            </v-card-title>
            <v-card-text>
              This is tutorial version.
            </v-card-text>
          </v-card>
          <div class="d-flex flex-column ml-2">
            <v-btn icon>
              <v-icon color="primary">
                mdi-twitter
              </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="primary">
                mdi-facebook
              </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="primary">
                mdi-instagram
              </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="primary">
                mdi-linkedin
              </v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-divider />
    <v-container>
      <v-tabs centered>
        <v-tab>
          <v-icon class="mr-2">
            mdi-home
          </v-icon>
          Home
        </v-tab>
        <v-tab>
          <v-icon class="mr-2">
            mdi-video
          </v-icon>
          Videos
        </v-tab>
        <v-tab>
          <v-icon class="mr-2">
            mdi-playlist-play
          </v-icon>
          Playlist
        </v-tab>
      </v-tabs>
      <v-subheader>
        <v-icon class="mr-1" color="secondary lighten-3">
          mdi-update
        </v-icon>
        Recent
      </v-subheader>
      <common-carousel
        :item-width="250"
        :offset="80"
      >
        <common-video-card
          v-for="j in 6"
          :key="`following-${j}`"
          :options="thumbnailOptions"
          :offset="80"
        />
      </common-carousel>

      <v-subheader>
        <v-icon class="mr-1" color="secondary lighten-3">
          mdi-playlist-play
        </v-icon>
        Playlist
      </v-subheader>
      <common-carousel
        :item-width="250"
        :offset="80"
      >
        <common-video-card
          v-for="j in 6"
          :key="`following-${j}`"
          :options="thumbnailOptions"
          :offset="80"
        />
      </common-carousel>

      <v-subheader>
        <v-icon class="mr-1" color="secondary lighten-3">
          mdi-gamepad-variant-outline
        </v-icon>
        Gaming
      </v-subheader>
      <common-carousel
        :item-width="250"
        :offset="80"
      >
        <common-video-card
          v-for="j in 6"
          :key="`following-${j}`"
          :options="thumbnailOptions"
          :offset="80"
        />
      </common-carousel>
    </v-container>
  </v-content>
</template>

<script>
import { thumbnailOptions } from '@/constants'

export default {
  data () {
    return {
      // videojs options
      thumbnailOptions
    }
  }
}
</script>
