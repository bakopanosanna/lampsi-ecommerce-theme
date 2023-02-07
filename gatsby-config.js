module.exports = {
  siteMetadata: {
    title: `Lampsi by Anna`,
    description: `Beads collection handmade`,
    image: `/lampsi-03.jpeg`,
    siteUrl: `https://www.lampsi.ch`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Sydney Ecommerce Theme`,
        short_name: `Sydney`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
