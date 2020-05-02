<template>
  <v-content>
    <div class="video page d-flex align-stretch">
      <div class="page__left-side flex-grow-0 flex-shrink-0 px-2">
        <v-subheader>
          <v-icon class="mr-1" color="secondary lighten-3">
            mdi-thumb-up
          </v-icon>
          Recommended
        </v-subheader>
        <div
          v-for="i in 10"
          :key="`recommended-${i}`"
          class="d-flex flex-nowrap mb-3"
        >
          <common-video-clip
            :options="options"
            class="flex-grow-0 flex-shrink-0"
            :style="{ width: '135px' }"
          />
          <div class="video-tip ml-2 flex-grow-1 flex-shrink-1 body-2 d-flex flex-column justify-center">
            <div>
              <span class="tag-link">#apple</span>
            </div>
            <div>Big Buck Bunny</div>
            <div>Channel2</div>
          </div>
        </div>
      </div>

      <div class="page__content flex-grow-1 flex-shrink-1">
        <v-container>
          <no-ssr>
            <common-video-mono src="videos/tomjerry-thumbnail.mp4" />
          </no-ssr>

          <div class="d-flex flex-wrap align-center justify-space-between mt-3">
            <div class="d-flex align-center justify-start">
              <v-btn
                icon
                class="mr-2"
                @click="stared = !stared"
              >
                <v-icon :color="stared ? 'yellow darken-2' : 'secondary lighten-4'">
                  {{ stared ? 'mdi-star' : 'mdi-star-outline' }}
                </v-icon>
              </v-btn>
              <v-btn
                class="mr-2"
                :color="follow ? 'info darken-1' : 'secondary lighten-1'"
                small
                @click="follow = !follow"
              >
                Follow
              </v-btn>
              <v-btn
                icon
                class="mr-2"
              >
                <v-icon>
                  mdi-merge
                </v-icon>
              </v-btn>
              <v-btn
                icon
                class="mr-2"
                @click="flag = !flag"
              >
                <v-icon :color="flag ? 'red darken-1' : 'secondary lighten-4'">
                  {{ flag ? 'mdi-flag' : 'mdi-flag-outline' }}
                </v-icon>
              </v-btn>
            </div>

            <div class="d-flex flex-row-reverse align-center">
              <v-btn
                v-if="support"
                color="success"
                rounded
                @click="support = !support"
              >
                Support
              </v-btn>

              <v-btn
                v-if="!support"
                class="ml-2"
                icon
                @click="support = !support"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
              <v-btn
                v-if="!support"
                class="ml-2"
                color="success"
                rounded
              >
                Subscribe
              </v-btn>
              <v-btn
                v-if="!support"
                class="ml-2"
                color="info lighten-1"
                icon
              >
                <v-icon>mdi-shopping</v-icon>
              </v-btn>
              <v-btn
                v-if="!support"
                class="ml-2"
                color="warning lighten-1"
                icon
              >
                <v-icon>mdi-bitcoin</v-icon>
              </v-btn>
            </div>
          </div>

          <v-card
            class="mt-4"
            min-height="250"
          >
            <v-card-text>
              <h3><p>
                <span class="tag-link">#Offroad</span>
                <span class="tag-link">#Dirtbike</span>
                <span class="tag-link">#CaliOffRoad</span>
              </p></h3>
              <p>
                For my first over Patreon meet-up in the UK we hit up Dalby Forest.
                I was really Suprised how long this loop got and how many awesome little bits and pieces it had for us.
              </p>
              <p>
                I had no idea that the World Cup XD course was so legit. Serious respect to those dudes!
              </p>
              <p>
                BK in the UK Playlist - https://bit.ly/bkuk2018<br>
                Extended Cut - https://www.patreon.com/posts/19208739
              </p>
            </v-card-text>
          </v-card>
          <div class="d-flex my-4">
            <v-spacer />
            <v-btn
              rounded
              text
              @click="comments = !comments"
            >
              <span>Comments</span>
              <v-icon
                :style="{
                  transform: comments ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform .2s'
                }"
              >
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </div>
          <v-fade-transition mode="out-in">
            <div v-if="comments">
              <div
                v-for="i in 7"
                :key="i"
                class="d-flex align-start mb-3"
              >
                <v-avatar size="36" class="my-3 mr-4">
                  <v-img src="/company/tomjerry.jpg" />
                </v-avatar>
                <v-card class="flex-grow-1">
                  <v-card-title class="pa-2 pb-1">
                    <div class="d-flex flex-column justify-space-between">
                      <div class="caption">
                        #BigBuckBunny
                      </div>
                      <div class="caption d-flex align-center">
                        <v-btn
                          small
                          icon
                        >
                          <v-icon
                            small
                            color="primary"
                          >
                            mdi-thumb-up
                          </v-icon>
                        </v-btn>
                        <span class="mr-2">2.2 K</span>
                        <v-divider class="my-1" vertical />
                        <v-btn
                          small
                          icon
                        >
                          <v-icon
                            small
                            color="info lighten-1"
                          >
                            mdi-message-reply-text
                          </v-icon>
                        </v-btn>
                        <span :style="{ width: '60px' }">3 Replies</span>
                      </div>
                    </div>
                  </v-card-title>
                  <v-divider />
                  <v-card-text class="pa-2 pt-1">
                    What's up peeps?
                    <v-icon color="yellow darken-2">
                      mdi-emoticon-excited
                    </v-icon><br>
                    I can't hear you any more.<br>
                    Anybody there?
                  </v-card-text>
                </v-card>
              </div>
            </div>
          </v-fade-transition>
        </v-container>
      </div>

      <div class="page__right-side flex-grow-0 flex-shrink-0 pa-4 d-none d-lg-block">
        <v-expansion-panels
          :value="0"
          :accordion="true"
          :hover="true"
        >
          <v-expansion-panel
            v-for="(item, i) in 10"
            :key="`expansion-${i}`"
          >
            <v-expansion-panel-header class="body-2">
              <v-badge
                class="flex-grow-0 mr-2"
                dot
                overlap
                bordered
                color="success"
                offset-x="10"
                offset-y="10"
              >
                <v-avatar size="40">
                  <v-img src="/company/tomjerry.jpg" />
                </v-avatar>
              </v-badge>
              <span
                class="text-truncate flex-shrink-0"
                :style="{ 'max-width': '135px' }"
              >
                AbbySaySo
              </span>
              <v-spacer />
              <span class="warning--text">
                $ 100
              </span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="text-center my-4">
                <v-avatar class="flex-grow-0" size="150">
                  <v-img src="/company/tomjerry.jpg" />
                </v-avatar>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </v-content>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
import { thumbnailOptions } from '@/constants'

export default {
  validate ({ params, redirect }) {
    if (/^\d+$/.test(params.id)) { return true }
    redirect('/')
  },
  setup () {
    const stared = ref(false)
    const follow = ref(false)
    const flag = ref(false)
    const comments = ref(false)
    const options = computed(() => thumbnailOptions)
    const support = ref(true)

    return {
      stared,
      follow,
      flag,
      comments,
      options,
      support
    }
  }
}
</script>

<style lang="scss">
.page {
  &__left-side, &__right-side {
    width: 300px;
  }

  .video-tip {
    > div {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 150px;
    }
  }
}
</style>
