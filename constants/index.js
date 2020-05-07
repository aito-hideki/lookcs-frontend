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

const dmounts = [
  5,
  10,
  20,
  25,
  50,
  75,
  100,
  150,
  200,
  250,
  300,
  350,
  500
]

const dtemplates = [
  'I love your channel!',
  'You inspired me to start my own channel. You\'re the best.',
  'I followed you back when you had 25 followers.',
  'This video was EPIC! How long did it take you',
  'I laughed SO HARD I LITERALLY peed myself!',
  'We went to high school together. I can\'t believe how far you\'ve come.',
  'I love that I can donate for free on this site. I plan on saving up to sub next.',
  'What equipment do you use to do your videos?',
  'That... was... legendary',
  'LOL',
  'I watched a sofa ad to get this donation. lol',
  'I am the biggest donator! BEHOLD MY COMMENT POWER!',
  'Do you do video requests? Would love to see you do coverage on the new Gears game.',
  'If you react to Spongebob in your next video I will drop another $5.',
  'Remember this comment when this guy hits 1 million followers. I\'m calling it now.',
  'Jump. Kick. PUNCH!',
  'I miss your Super Mario Maker videos. Those were so funny',
  'Wanna go out',
  'Best moment was at 12:05 by far.',
  'This.. is... SPARTA!!'
]

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

const getRandomDonations = () => {
  const cnt = Math.floor(Math.random() * 5)
  const dns = []
  for (let i = 0; i < cnt; i++) {
    const amount = dmounts[Math.floor(Math.random() * dmounts.length)]
    dns.push({
      donator: Math.floor(Math.random() * creators.length),
      amount,
      description: dtemplates[Math.floor(Math.random() * dtemplates.length)],
      color: amount >= 100 ? 'warning--text'
        : amount >= 50 ? 'pink--text'
          : amount >= 20 ? 'light-blue--text'
            : 'green--text'
    })
  }

  return dns
}

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
export const ads = [
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
    title: 'Enjoy your day!',
    advertiser: 'Dancing Club'
  },
  {
    title: 'English as a Second Language',
    advertiser: 'ESL Organizations'
  },
  {
    title: 'You can\'t run from us Forever',
    advertiser: 'McDonalds'
  }
].map((adv, i) => ({
  ...adv,
  thumbnail: `/ads/thumbnail (${i + 1}).mp4`,
  poster: `/ads/thumbnail (${i + 1}).jpg`
}))

export const advSections = []

for (let adi = 1; adi < 7; adi++) {
  let section = [ads[adi]]

  for (let adj = 0; adj < 3; adj++) {
    const ad = ads[Math.floor(Math.random() * ads.length)]
    if (!section.includes(ad)) {
      section = [...section, ad]
    }
  }

  advSections.push(section)
}

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
      author: Math.floor(Math.random() * creators.length),
      donations: i === 0 ? [] : getRandomDonations()
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
