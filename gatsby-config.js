/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  pathPrefix: "/dsflsp",
  siteMetadata: {
    title: "صيانة غسالات ومجففات في المدينة المنورة",
    descriptions: "صيانة غسالات اتوماتيك في المدينة المنورة تشمل إل جي، سامسونج، دايو. فحص شامل، خدمة سريعة، وضمان معتمد. اتصل الآن",
    author: "مهندس صيانة",
    siteUrl: "http://localhost:8000"
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/electrical-appliance.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["AW-17055042605"],
        pluginConfig: {
          head: true,
        },
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
        sitemap: "http://localhost:8000/sitemap.xml"
      },
    },
  ],
}
