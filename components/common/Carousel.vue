<template>
  <div
    ref="container"
    v-bind="$attrs"
    class="common-carousel d-flex flex-row align-center justify-center"
  >
    <V-btn
      icon
      :disabled="!ablePrev"
      @click="prev"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </V-btn>
    <div
      ref="wrapper"
      :style="wrapperStyle"
    >
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
      @click="next"
    >
      <v-icon>mdi-chevron-right</v-icon>
    </V-btn>
  </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api'

const useLayout = (props) => {
  const container = ref(null)
  const containerWidth = computed(() => container.value ? container.value.clientWidth : 0)

  const itemsPerPage = computed(() => Math.floor((containerWidth.value - 88) / props.itemWidth))

  const wrapper = ref(null)
  const wrapperWidth = computed(() => ((props.maxPerPage && props.maxPerPage < itemsPerPage.value
    ? props.maxPerPage : itemsPerPage.value) || 1) * props.itemWidth)
  const wrapperStyle = computed(() => ({
    overflow: 'hidden auto',
    width: `${wrapperWidth.value}px`
  }))

  const itemStyle = computed(() => ({ width: `${props.itemWidth}px` }))

  return {
    container,
    wrapper,
    wrapperStyle,
    itemStyle,

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
    }
  },
  setup (props, { root, slots }) {
    // Basic layout information
    const componentStyle = useLayout(props)
    const { itemsPerPage } = componentStyle

    // Get child items from default slot
    const children = computed(() => slots.default() ? slots.default().map(item => item) : [])

    // Carousel Index management
    const carouselIndex = useCarouselIndex(props, { itemsPerPage, children })
    const { pointerIdx } = carouselIndex

    // Content Box style
    const contentStyle = computed(() => ({
      'margin-left': `-${pointerIdx.value * props.itemWidth}px`
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
}
</style>
