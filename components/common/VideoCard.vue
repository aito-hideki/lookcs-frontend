<template>
  <div class="video-card">
    <common-video-clip
      :options="$attrs.options"
      :offset="$attrs.offset"
      v-on="$listeners"
    />
    <div class="video-card__author mt-2">
      <div class="d-flex align-stretch mb-2">
        <v-avatar size="40" class="mr-4">
          <v-img src="/company/bunny.jpg" />
        </v-avatar>
        <div class="d-flex flex-column justify-space-between">
          <div class="caption font-weight-bold">
            #BigBuckBunny
          </div>
          <div class="caption font-weight-bold">
            Tutorial Video
          </div>
        </div>
      </div>
      <div class="subtitle-2 font-italic">
        Aito Hideki
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.video-card {
  &__author {
    height: 80px;
  }
}
</style>
