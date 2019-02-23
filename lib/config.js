export const config = {
  general: {
    font: 'Roboto',
    favicon: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1550594730/nick-blog/moon-black.png',
  },
  header: {
    capitalize: false,
    title: 'Boring Business',
    titleImgForDark: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1550592004/nick-blog/moon-white.png',
    titleImgForLight: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1550594730/nick-blog/moon-black.png',
  },
  author: {
    title: 'Nick Smith',
    subTitle: 'CFO Exonar',
    intro: "Hi I'm Nick and I write about businesses and what not. Here are some articles I went and wrote, oh boy I do hope you like them", //eslint-disable-line
    avatarImage: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1550655836/nick-blog/nick-smith.png',
    socialIcons: [{
      name: 'twitter',
      link: 'https://twitter.com/nrhsmith',
      class: 'twitter',
    },
    {
      name: 'linkedin',
      link: 'https://uk.linkedin.com/in/nick-smith01',
      class: 'linkedin',
    }],
  },
  apiURL: 'https://boring-business.cdn.prismic.io/api/v2',
};
