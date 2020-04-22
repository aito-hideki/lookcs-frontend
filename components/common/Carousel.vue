<template>
  <div
    ref="container"
    class="common-carousel d-flex flex-row align-center justify-center"
    v-on="$listeners"
  >
    <V-btn
      icon
      :disabled="!ablePrev"
      :style="`margin-bottom: ${offset}px`"
      @click="prev"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </V-btn>
    <div class="common-carousel__wrapper">
      <div
        class="common-carousel__content d-flex flex-row"
        :style="contentStyle"
      >
        <template v-for="(child, idx) in children">
          <div
            v-if="child.context"
            :key="idx"
            class="common-carousel__item"
            :style="itemStyle"
          >
            <v-node :vnode="child" />
          </div>
        </template>
        <div
          class="common-carousel__item d-flex align-center justify-center"
          :style="itemStyle"
        >
          <v-progress-circular
            :size="70"
            :width="7"
            color="primary"
            indeterminate
          />
        </div>
      </div>
    </div>
    <V-btn
      icon
      :disabled="!ableNext"
      :style="`margin-bottom: ${offset}px`"
      @click="next"
    >
      <v-icon>mdi-chevron-right</v-icon>
    </V-btn>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from '@vue/composition-api'

const useLayout = (props, { children }) => {
  const container = ref(null)
  const containerWidth = ref(0) // computed(() => container.value ? container.value.clientWidth : 0)

  const itemsPerPage = computed(() => {
    const cnt = Math.floor((containerWidth.value - 72) / props.itemWidth)
    return cnt > 0 ? cnt : 1
  })

  const itemStyle = computed(() => ({ width: `${100 / (children.value.length || 1)}%` }))

  const adjustContainerLayout = () => {
    containerWidth.value = container.value ? container.value.clientWidth : 0
  }

  onMounted(() => {
    window.addEventListener('resize', adjustContainerLayout)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', adjustContainerLayout)
  })

  return {
    container,
    itemStyle,
    adjustContainerLayout,

    itemsPerPage
  }
}

const useCarouselIndex = (props, { itemsPerPage, children }) => {
  const currentIdx = ref(0)
  const reachableIndex = computed(() => {
    const reachable = (children.value.length - itemsPerPage.value + (props.infiniteScroll ? 1 : 0)) || 0
    return reachable > 0 ? reachable : 0
  })
  const pointerIdx = computed(() => {
    const rcIdx = reachableIndex.value - (props.infiniteScroll && !props.loading ? 1 : 0)
    const idx = currentIdx.value < rcIdx ? currentIdx.value : rcIdx
    return idx >= 0 ? idx : 0
  })

  const ableNext = computed(() => currentIdx.value < reachableIndex.value)
  const ablePrev = computed(() => currentIdx.value > 0)

  const next = () => {
    if (!ableNext.value) { return }
    currentIdx.value = currentIdx.value + 1
  }
  const prev = () => {
    if (!ablePrev.value) { return }
    currentIdx.value = pointerIdx.value - 1
  }

  return {
    pointerIdx,
    ableNext,
    ablePrev,
    next,
    prev
  }
}

export default {
  components: {
    VNode: {
      functional: true,
      render: (h, ctx) => ctx.props.vnode
    }
  },
  props: {
    itemWidth: {
      type: Number,
      default: 250
    },
    infiniteScroll: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    maxPerPage: {
      type: Number,
      default: null
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup (props, { root, slots }) {
    // Get child items from default slot
    const children = computed(() => slots.default() ? slots.default().map(item => item) : [])

    // Basic layout information
    const componentStyle = useLayout(props, { children })
    const { itemsPerPage, adjustContainerLayout } = componentStyle

    root.$nextTick(() => adjustContainerLayout())

    // Carousel Index management
    const carouselIndex = useCarouselIndex(props, { itemsPerPage, children })
    const { pointerIdx } = carouselIndex

    // Content Box style
    const contentStyle = computed(() => ({
      'margin-left': `-${pointerIdx.value * 100 / (itemsPerPage.value || 1)}%`,
      width: `${100 * children.value.length / itemsPerPage.value}%`
    }))

    return {
      ...componentStyle,
      ...carouselIndex,
      contentStyle,
      children
    }
  }
}
</script>

<style lang="scss">
.common-carousel {
  &__content {
    flex-grow: 0;
    align-items: center;
    margin-left: 0px;
    transition: margin-left .5s;
  }

  &__item {
    flex-grow: 0;
    flex-shrink: 0;
    padding: 10px;
  }

  &__wrapper {
    overflow: hidden hidden;
    max-width: calc(100% - 72px);
    flex-grow: 1;
    flex-shrink: 1;
    flex-wrap: nowrap;
  }
}
</style>
