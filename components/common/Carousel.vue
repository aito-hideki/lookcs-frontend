<template>
  <div
    ref="container"
    v-bind="$attrs"
    class="common-carousel d-flex flex-row align-center justify-center"
  >
    <V-btn icon>
      <v-icon>mdi-chevron-left</v-icon>
    </V-btn>
    <div
      ref="wrapper"
      :style="wrapperStyle"
    >
      <div class="common-carousel__content d-flex flex-row">
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
          v-if="infiniteLoading"
          class="common-carousel__item"
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
    <V-btn icon>
      <v-icon>mdi-chevron-right</v-icon>
    </V-btn>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from '@vue/composition-api'

const useComponentStyling = (props) => {
  const container = ref(null)
  const wrapper = ref(null)

  const wrapperWidth = ref(0)
  const wrapperStyle = computed(() => ({
    overflow: 'hidden auto',
    width: `${wrapperWidth.value}px`
  }))
  const itemsPerPage = ref(0)

  const itemStyle = computed(() => ({
    width: `${props.itemWidth}px`
  }))

  // Component resize event handler
  const resizeHandlerTimer = ref(null)
  const startResizeHandler = () => {
    resizeHandlerTimer.value = setInterval(() => {
      const width = container.value ? container.value.clientWidth : 0
      itemsPerPage.value = Math.floor((width - 88) / props.itemWidth)
      wrapperWidth.value = ((props.maxPerPage && props.maxPerPage < itemsPerPage.value ? props.maxPerPage : itemsPerPage.value) || 1) * props.itemWidth
    }, 50)
  }
  const stopResizeHandler = () => {
    clearInterval(resizeHandlerTimer.value)
  }

  onMounted(() => startResizeHandler())
  onBeforeUnmount(() => stopResizeHandler())

  return {
    container,
    wrapper,
    wrapperStyle,
    itemStyle,

    itemsPerPage
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
    infiniteLoading: {
      type: Boolean,
      defualt: false
    },
    maxPerPage: {
      type: Number,
      default: null
    }
  },
  setup (props, { root, slots }) {
    const componentStyle = useComponentStyling(props)

    // Get child items from default slot
    const children = computed(() => slots.default() ? slots.default().map(item => item) : [])

    return {
      ...componentStyle,
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
  }

  &__item {
    flex-grow: 0;
    flex-shrink: 0;
    padding: 10px;
  }
}
</style>
