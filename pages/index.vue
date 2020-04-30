<template>
  <v-content>
    <v-container class="home" fluid>
      <div class="home__content flex-grow-1 flex-shrink-1">
        <v-subheader>
          <v-icon class="mr-1" color="secondary lighten-3">
            mdi-heart
          </v-icon>
          Following
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
            @click="$nuxt.$router.push('/video/1')"
          />
        </common-carousel>

        <v-subheader>
          <v-icon class="mr-1" color="secondary lighten-3">
            mdi-thumb-up
          </v-icon>
          Recommended
        </v-subheader>
        <common-carousel
          :item-width="250"
          :offset="80"
        >
          <common-video-card
            v-for="j in 6"
            :key="`recommended-${j}`"
            :options="thumbnailOptions"
            :offset="80"
            @click="$nuxt.$router.push('/video/1')"
          />
        </common-carousel>

        <v-subheader>
          <v-icon class="mr-1" color="secondary lighten-3">
            mdi-gamepad-variant
          </v-icon>
          Gaming
        </v-subheader>
        <common-carousel
          :item-width="250"
          :offset="80"
        >
          <common-video-card
            v-for="j in 6"
            :key="`gaming-${j}`"
            :options="thumbnailOptions"
            :offset="80"
            @click="$nuxt.$router.push('/video/1')"
          />
        </common-carousel>
      </div>
      <div class="home__ads d-none d-md-block flex-grow-0 flex-shrink-0">
        <v-card
          class="px-4"
          width="300"
        >
          <v-row no-gutters>
            <v-spacer />
            <v-subheader class="text-center">
              ADS
            </v-subheader>
            <v-spacer />
          </v-row>
          <common-carousel
            v-for="i in 10"
            :key="`adv-${i}`"
            :item-width="250"
            :max-per-page="1"
          >
            <common-video-clip
              v-for="j in 6"
              :key="`adv-${i}-${j}`"
              :options="thumbnailOptions"
            />
          </common-carousel>
        </v-card>
      </div>
    </v-container>
  </v-content>
</template>

<script>
import { thumbnailOptions } from '~/constants'
export default {
  data () {
    return {
      // videojs options
      thumbnailOptions
    }
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  &__content {
    max-width: 100%;
  }

  &__ads {
    width: 300px;
  }
}

@media screen and (min-width: 960px) {
  .home {
    &__content {
      max-width: calc(100% - 300px);
    }
  }
}
</style>
