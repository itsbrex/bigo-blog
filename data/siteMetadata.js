const siteMetadata = {
  title: 'Bigo Live - Blog',
  author: 'The Bigo Live Team',
  headerTitle: '@bigolive.usa',
  description:
    'Thoughts and resources on how to grow your audience on Bigo Live and maximize your social impact in a positive way.',
  language: 'en-us',
  siteUrl: 'https://blog.onbigo.live',
  siteRepo: 'https://github.com/itsbrex/bm-newsletter',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.jpg',
  email: 'ushostoperations@bigo.sg',
  github: 'https://github.com/itsbrex',
  twitter: 'https://twitter.com/intent/follow?screen_name=bigolivena',
  tiktok: 'https://tiktok.com/@bigoliveusa',
  youtube: 'https://youtube.com/channel/UCqMsuZ2Qgkz5QLSuT0n7YrA?sub_confirmation=1',
  linkedin: 'https://www.linkedin.com/company/bigo-technology-pte.-ltd./',
  locale: 'en-US',
  newsletter: {
    provider: 'emailoctopus',
  },
  comment: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      // theme when dark mode
      darkTheme: 'dark_dimmed',
    },
  },
}

module.exports = siteMetadata
