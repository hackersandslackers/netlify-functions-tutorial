import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>This is a Gatsby site deployed on Netlify with a single serverless function. This is the output of calling that function:</p>
    <div id="main">
    </div>
  </Layout>
)

export default IndexPage
