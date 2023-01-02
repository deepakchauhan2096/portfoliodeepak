module.exports = {
  plugins: [`gatsby-plugin-react-helmet`,

    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     url: "https://tryscrumlive.vervebot.io/graphql",
    //     type: {
    //       MediaItem: {
    //         localFile: {
    //           requestConcurrency: 50,
    //         },
    //       },
    //     },
    //   },
    // },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
