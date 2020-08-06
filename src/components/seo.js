import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const image = `https://hackersandslackers-cdn.storage.googleapis.com/2020/08/netlify-lambda-go@2x.jpg`

  return (
    <>
      <Helmet htmlAttributes={{ lang }}>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content={1000} />
        <meta property="og:image:height" content={523} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />
        <link rel="stylesheet" href="https://use.typekit.net/uqq2lcv.css" />
      </Helmet>
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
