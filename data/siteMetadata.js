const siteMetadata = {
  title: 'Bigo Live',
  author: 'Bigo Live North America',
  headerTitle: '@bigolive.usa',
  description:
    'Thoughts and resources on how to grow your audience on Bigo Live and maximize your social impact in a positive way.',
  language: 'en-us',
  siteUrl: 'https://blog.onbigo.live',
  siteRepo: 'https://github.com/itsbrex/bm-newsletter',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.jpg',
  email:
    'mailto:ushostoperations@bigo.sg?subject=Bigo%20Mail%20Feedback%20%2B%20Idea!&body=Hi%20Team!%0D%0A%0D%0AI%20had%20an%20idea%20about...',
  github: 'https://github.com/itsbrex',
  instagram: 'https://www.instagram.com/bigolive.usa',
  twitter: 'https://twitter.com/intent/follow?screen_name=bigolivena',
  tiktok: 'https://tiktok.com/@bigoliveusa',
  youtube: 'https://www.youtube.com/c/BIGOLIVEUSAOfficial?sub_confirmation=1',
  linkedin: 'https://www.linkedin.com/company/bigo-technology-pte.-ltd./',
  locale: 'en-US',
  newsletter: {
    provider: 'emailoctopus',
  },
  comment: {
    provider: '', // supported providers: giscus, utterances, disqus
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
