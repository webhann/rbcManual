import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import "../styles/style.css"

const IndexPage = ({ data }) => (
  <Layout className="container">
    <Seo title="Manuals" />
    <div className="title">
      <h1>マニュアル一覧</h1>
    </div>
    <div className="body">
      <ul>
        {data.allMicrocmsContents.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={`/contents/${node.id}`}>{node.title}（カテゴリ：{node.category.ctegory}）</Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsContents {
      edges {
        node {
          publishedAt
          updatedAt
          title
          body
          author {
            name
          }
          category {
            ctegory
          }
          id
        }
      }
    }
  }
`