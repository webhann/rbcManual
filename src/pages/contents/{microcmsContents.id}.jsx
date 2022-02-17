import React from "react"
import { graphql } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import "../../styles/style.css"

const ContentPage = ({ data }) => (
  <Layout className="container">
    <Seo title={data.microcmsContents.title} />
    <div className="title">
      <h1>{data.microcmsContents.title}</h1>
    </div>
    <div
      className="body"
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsContents.body}`,
      }}
    />
    <p>作者：
    <span>{data.microcmsContents.author.name}</span>
    </p>
  </Layout>
)

export default ContentPage

export const query = graphql`
  query($id: String!) {
    microcmsContents(id: { eq: $id }) {
      id
      title
      body
      author {
        name
      }
    }
  }
`