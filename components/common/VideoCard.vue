<template>
  <div class="video-card">
    <common-video-clip
      :content="$attrs.content"
      :offset="$attrs.offset"
      v-on="$listeners"
    />
    <div class="video-card__author mt-2">
      <div class="d-flex align-stretch mb-2">
        <v-avatar
          size="40"
          class="mr-4 tapable"
          @click="$router.push(`/profile/${$attrs.content.author}`)"
        >
          <v-img :src="creators[$attrs.content.author].avatar" />
        </v-avatar>
        <div class="d-flex flex-column justify-space-between">
          <div class="caption font-weight-bold">
            <span class="tag-link">#{{ $attrs.content.tags[0] }}</span>
          </div>
          <div class="caption font-weight-bold">
            {{ $attrs.content.title }}
          </div>
        </div>
      </div>
      <div class="subtitle-2 font-italic">
        {{ creators[$attrs.content.author].name }}
      </div>
    </div>
  </div>
</template>

<script>
import { creators } from '@/constants'

export default {
  data: () => ({
    creators
  })
}
</script>

<style lang="scss">
.video-card {
  &__author {
    height: 80px;
  }
}
</style>
