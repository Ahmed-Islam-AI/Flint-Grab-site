// The scenarios the reel plays through. Every ladder here is arithmetically consistent — sizes come
// from a plausible bitrate across the stated duration, and each one already includes the audio track
// it gets merged with, so the number matches what would land on disk. Nothing is rounded upward to
// look impressive.

export type Format = {
  label: string
  size: string
  bytes: number
  estimated?: boolean
}

export type Scenario = {
  platform: string
  url: string
  title: string
  duration: string
  poster: string
  formats: Format[]
  pick: string
}

export const SCENARIOS: Scenario[] = [
  {
    platform: 'YouTube',
    url: 'youtube.com/watch?v=eRsGyueVLvQ',
    title: 'Sintel — Blender Open Movie',
    duration: '14:48',
    poster: 'https://picsum.photos/seed/flintgrab-sintel-dragon/640/360',
    pick: '1080p',
    formats: [
      { label: '2160p60', size: '1.3 GB', bytes: 1_395_864_371 },
      { label: '1440p', size: '1.0 GB', bytes: 1_073_741_824, estimated: true },
      { label: '1080p', size: '847 MB', bytes: 888_143_872 },
      { label: '720p', size: '402 MB', bytes: 421_527_552 },
      { label: '480p', size: '218 MB', bytes: 228_589_568 },
      { label: '144p', size: '14.8 MB', bytes: 15_518_925 },
      { label: 'Audio only', size: '41 MB', bytes: 42_991_616 },
    ],
  },
  {
    platform: 'Instagram',
    url: 'instagram.com/reel/C8xKm2Nvqlb',
    title: 'Cold forge, third pass',
    duration: '0:47',
    poster: 'https://picsum.photos/seed/flintgrab-forge-sparks/640/360',
    pick: '1080p',
    formats: [
      { label: '1080p', size: '48.2 MB', bytes: 50_541_363 },
      { label: '720p', size: '21.4 MB', bytes: 22_439_526 },
      { label: '480p', size: '9.8 MB', bytes: 10_276_044 },
      { label: 'Audio only', size: '3.1 MB', bytes: 3_250_585 },
    ],
  },
  {
    platform: 'TikTok',
    url: 'tiktok.com/@kiyoharu.dev/video/7392844015',
    title: 'Why your download manager gives up here',
    duration: '2:14',
    poster: 'https://picsum.photos/seed/flintgrab-terminal-desk/640/360',
    pick: '1080p',
    formats: [
      { label: '1080p', size: '118 MB', bytes: 123_731_968 },
      { label: '720p', size: '54.6 MB', bytes: 57_252_249 },
      { label: '480p', size: '24.9 MB', bytes: 26_109_082 },
      { label: 'Audio only', size: '8.7 MB', bytes: 9_122_611 },
    ],
  },
  {
    platform: 'X',
    url: 'x.com/tokarska_r/status/1804229118',
    title: 'Full talk: what adaptive streaming actually broke',
    duration: '38:12',
    poster: 'https://picsum.photos/seed/flintgrab-conference-stage/640/360',
    pick: '720p',
    formats: [
      { label: '1080p', size: '2.1 GB', bytes: 2_254_857_830, estimated: true },
      { label: '720p', size: '983 MB', bytes: 1_030_750_208 },
      { label: '480p', size: '446 MB', bytes: 467_664_896 },
      { label: 'Audio only', size: '104 MB', bytes: 109_051_904 },
    ],
  },
  {
    platform: 'Reddit',
    url: 'reddit.com/r/DataHoarder/comments/1d9k2vf',
    title: 'Twelve years of a shard archive, walked through',
    duration: '9:03',
    poster: 'https://picsum.photos/seed/flintgrab-server-racks/640/360',
    pick: '1080p',
    formats: [
      { label: '1080p', size: '512 MB', bytes: 536_870_912 },
      { label: '720p', size: '241 MB', bytes: 252_706_816 },
      { label: '480p', size: '110 MB', bytes: 115_343_360 },
      { label: 'Audio only', size: '25.1 MB', bytes: 26_319_257 },
    ],
  },
]
