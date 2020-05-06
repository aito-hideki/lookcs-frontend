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
    // src: 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4'
  }],
  poster: '/thumbnails/tomjerry.jpg'
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
    src: '/thumbnails/tomjerry-thumbnail.mp4'
  }],
  poster: '/thumbnails/tomjerry.jpg'
}

export const creators = [
  {
    name: 'Panda\'s channel',
    avatar: '/avatars/avatar (1).png',
    media: 3
  },
  {
    name: 'Maeda Keiji',
    avatar: '/avatars/avatar (2).jpg',
    media: 11
  },
  {
    name: 'Fluffy Pudge',
    avatar: '/avatars/avatar (3).jpg',
    media: 22
  },
  {
    name: 'Fastest rider',
    avatar: '/avatars/avatar (4).jpg',
    media: 17
  },
  {
    name: 'Fuzzywuzzy Warrior',
    avatar: '/avatars/avatar (5).jpg',
    media: 13
  },
  {
    name: 'Creepiest cat',
    avatar: '/avatars/avatar (6).jpg',
    media: 8
  },
  {
    name: 'Lazy Dog',
    avatar: '/avatars/avatar (7).jpg',
    media: 26
  },
  {
    name: 'Agile Peacock',
    avatar: '/avatars/avatar (8).jpg',
    media: 6
  }
]

const tags = [
  'bitcoin',
  'game',
  'entertainment',
  'cryptocurrency',
  'movie',
  'play',
  'scenario',
  'design',
  'capture',
  'idea',
  'small',
  'big'
]

export const playlist = []
export const advs = [
  {
    title: 'Bisimoto\'s 1,000 HP HONDA Civic Wagon',
    advertiser: 'Honda Enterprise'
  },
  {
    title: 'Trade Bitcoin',
    advertiser: 'Crypto Facilities'
  },
  {
    title: 'Yummy Cheetos',
    advertiser: 'Cheetos'
  },
  {
    title: 'Gears Tactics',
    advertiser: 'Xbox Games'
  },
  {
    title: 'Bisimoto\'s 1,000 HP HONDA Civic Wagon',
    advertiser: 'Honda Enterprise'
  },
  {
    title: 'Bisimoto\'s 1,000 HP HONDA Civic Wagon',
    advertiser: 'Honda Enterprise'
  },
  {
    title: 'Bisimoto\'s 1,000 HP HONDA Civic Wagon',
    advertiser: 'Honda Enterprise'
  }
]

for (let i = 0; i < 28; i++) {
  let tag = []
  const cnt = 2 + Math.floor(Math.random() * 4)

  for (let j = 0; j < cnt; j++) {
    const t = tags[Math.floor(Math.random() * tags.length)]
    if (!tag.includes(t)) {
      tag = [...tag, t]
    }
  }

  playlist.push(
    {
      id: i,
      tags: tag,
      title: `Title of the Movie ${i + 1}`,
      thumbnail: `/thumbnails/thumbnail (${i + 1}).mp4`,
      poster: `/thumbnails/thumbnail (${i + 1}).jpg`,
      author: Math.floor(Math.random() * creators.length)
    }
  )
}

export const channels = [
  {
    name: 'Following',
    icon: 'mdi-heart',
    contents: playlist.slice(0, 7)
  },
  {
    name: 'Recommended',
    icon: 'mdi-thumb-up',
    contents: playlist.slice(7, 14)
  },
  {
    name: 'Entertainment',
    icon: 'mdi-gamepad-variant',
    contents: playlist.slice(14, 21)
  },
  {
    name: 'Cryptocurrency',
    icon: 'mdi-bitcoin',
    contents: playlist.slice(21, 28)
  }
]
