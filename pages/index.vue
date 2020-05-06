<template>
  <client-only>
    <v-content>
      <v-container class="home" fluid>
        <div class="home__content flex-grow-1 flex-shrink-1">
          <div
            v-for="(channel, channelIdx) in channels"
            :key="`channel-${channelIdx}`"
          >
            <v-subheader>
              <v-icon class="mr-1" color="secondary lighten-3">
                {{ channel.icon }}
              </v-icon>
              {{ channel.name }}
            </v-subheader>
            <common-carousel
              :item-width="250"
              :offset="80"
            >
              <common-video-card
                v-for="(content, contentIdx) in channel.contents"
                :key="`channel-${channelIdx}-${contentIdx}`"
                :content="content"
                :offset="80"
                @click="$nuxt.$router.push(`/video/${content.id}`)"
              />
            </common-carousel>
          </div>
        </div>
        <div class="home__ads d-none d-md-block flex-grow-0 flex-shrink-0">
          <v-card
            class="px-4"
            width="300"
          >
            <v-row no-gutters>
              <v-spacer />
              <v-subheader class="text-center font-weight-bold">
                Sweepstakes
              </v-subheader>
              <v-spacer />
            </v-row>
            <div class="py-2 pl-11 d-flex flex-row flex-nowrap align-center">
              <div class="flex-grow-1">
                <common-video-clip :content="ads[0]" />
                <div class="limit caption font-weight-bold mt-2">
                  {{ ads[0].title }}
                </div>
                <div class="caption font-weight-bold">
                  {{ ads[0].advertiser }}
                </div>
              </div>
              <div class="mb-12">
                <v-icon class="mr-2 ml-4">
                  mdi-gift
                </v-icon>
              </div>
            </div>
            <v-row no-gutters>
              <v-spacer />
              <v-subheader class="text-center font-weight-bold">
                ADS
              </v-subheader>
              <v-spacer />
            </v-row>
            <common-carousel
              v-for="(section, si) in advSections"
              :key="`adv-${si}`"
              :item-width="250"
              :max-per-page="1"
              :offset="40"
            >
              <div
                v-for="(ad, sj) in section"
                :key="`adv-${si}-${sj}`"
              >
                <common-video-clip :content="ad" />
                <div class="limit caption font-weight-bold">
                  {{ ad.title }}
                </div>
                <div class="caption font-weight-bold">
                  {{ ad.advertiser }}
                </div>
              </div>
            </common-carousel>
          </v-card>
        </div>
      </v-container>
    </v-content>
  </client-only>
</template>

<script>
import { thumbnailOptions, channels, playlist, advSections, ads } from '~/constants'

export default {
  data () {
    return {
      channels,
      playlist,
      // videojs options
      thumbnailOptions,
      ads,
      advSections
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

.limit {
  overflow: hidden;
  white-space: nowrap;
  width: 176px;
  text-overflow: ellipsis;
}
</style>
