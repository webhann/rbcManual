import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import "../../styles/style.css"

const ContentPage = ({ data }) => (
  <Layout className="container">
    <Seo title={data.microcmsContents.title} />
    <div className="mb-5">
      <Link to="/">トップページに戻る</Link><br />
      <Link to="/manuals">一覧ページに戻る</Link>
    </div>
    <div className="main">
      <div className="title">
        <h1>{data.microcmsContents.title}</h1>
      </div>
      <div
        className="body mb-5"
        dangerouslySetInnerHTML={{
          __html: `${data.microcmsContents.body}`,
        }}
      />
    </div>
    <p className="mb-5">作者：
    <span>{data.microcmsContents.author.name}</span>
    </p>
    <Link to="/">トップページに戻る</Link>
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