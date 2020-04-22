<template>
  <div class="video-mono">
    <common-video-player v-bind="$attrs" />
    <div class="video-mono__author mt-2">
      <div class="d-flex align-stretch mb-2">
        <v-avatar size="40" class="mr-4">
          <v-img src="/company/bunny.jpg" />
        </v-avatar>
        <div class="d-flex flex-column justify-center">
          <div class="title">
            UnrealEntGaming
          </div>
        </div>
      </div>
      <div class="headline">
        Driving Offroad Through California (We Found it!)
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.video-mono {
  &__author {
    height: 80px;
  }
}
</style>
