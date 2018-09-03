var moment = require("moment")

module.exports = {
  siteMetadata: {
    title: "Firstname's personal website",
    version: "0.1.0",
    date: moment().format("MMM DD, YYYY (HH:mm)"),
    siteUrl: "https://firstname-lastname.netlify.com"
  },
  plugins: [
    "gatsby-image",
    "gatsby-link",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-next",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Digital Network Economy",
        short_name: "DNE",
        description:
          "This website is a non-commercial website for educational purposes.It informs about the content of the Digital Network Economy class at Cologne Business School.",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#8F8978",
        display: "browser",
        lang: "en-US"
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    }
  ]
}
