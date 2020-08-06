import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Netlify Function Demo</h1>
    <p>This is a Gatsby site deployed on Netlify with a single serverless function.</p>
    <p>Here's the output of calling that function:</p>
    <div id="main">
    </div>
  </Layout>
)

export default IndexPage
