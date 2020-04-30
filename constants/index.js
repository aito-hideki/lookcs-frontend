// videojs options
export const playerOptions = {
  muted: false,
  language: 'en',
  playbackRates: [0.7, 1.0, 1.5, 2.0],
  fluid: true,
  aspectRatio: '16:9',
  controls: true,
  sources: [{
    type: 'video/mp4',
    src: 'http://vjs.zencdn.net/v/oceans.mp4'
  }],
  poster: '/videos/tomjerry.jpg'
}

// videojs options
export const thumbnailOptions = {
  muted: false,
  language: 'en',
  playbackRates: [0.7, 1.0, 1.5, 2.0],
  fluid: true,
  aspectRatio: '16:9',
  controls: true,
  sources: [{
    type: 'video/mp4',
    src: 'videos/tomjerry-thumbnail.mp4'
  }],
  poster: '/videos/tomjerry.jpg'
}
