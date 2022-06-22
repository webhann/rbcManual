import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import "../styles/style.css"

const IndexPage = ({ data }) => {
  const manuCommon = data.allMicrocmsContents.edges.filter(edge => {
    return edge.node.category.ctegory.includes('共通');
  })
  const manuNews = data.allMicrocmsContents.edges.filter(edge => {
    return edge.node.category.ctegory.includes('ニュース');
  })
  const manuRadio = data.allMicrocmsContents.edges.filter(edge => {
    return edge.node.category.ctegory.includes('ラジオ');
  })
  const manuTv = data.allMicrocmsContents.edges.filter(edge => {
    return edge.node.category.ctegory.includes('テレビ');
  })
  const manuEisui = data.allMicrocmsContents.edges.filter(edge => {
    return edge.node.category.ctegory.includes('営業推進');
  })
  const manuWeb = data.allMicrocmsContents.edges.filter(edge => {
    return edge.node.category.ctegory.includes('Web');
  })
  return (
    <Layout className="container">
      <Seo title="マニュアル一覧" />
      <div className="mb-5">
        <Link to="/">トップページに戻る</Link>
      </div>
      <div className="title">
        <h1>マニュアル一覧</h1>
      </div>
      <h2 className="mb-2">共通</h2>
      <div className="body mb-5">
        <ul>
          {manuCommon.map(({ node }) => (
            <li key={node.id} style={{lineHeight:1.5}}>
              <Link to={`/contents/${node.id}`}>{node.title}</Link>
              <p style={{marginTop:0, fontSize:"80%"}}>{node.updatedAt}更新</p>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="mb-2">ニュース</h2>
      <div className="body mb-5">
        <ul>
          {manuNews.map(({ node }) => (
            <li key={node.id} style={{lineHeight:1.5}}>
              <Link to={`/contents/${node.id}`}>{node.title}</Link>
              <p style={{marginTop:0, fontSize:"80%"}}>{node.updatedAt}更新</p>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="mb-2">ラジオ</h2>
      <div className="body mb-5">
        <ul>
          {manuRadio.map(({ node }) => (
            <li key={node.id} style={{lineHeight:1.5}}>
              <Link to={`/contents/${node.id}`}>{node.title}</Link>
              <p style={{marginTop:0, fontSize:"80%"}}>{node.updatedAt}更新</p>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="mb-2">テレビ</h2>
      <div className="body mb-5">
        <ul>
          {manuTv.map(({ node }) => (
            <li key={node.id} style={{lineHeight:1.5}}>
              <Link to={`/contents/${node.id}`}>{node.title}</Link>
              <p style={{marginTop:0, fontSize:"80%"}}>{node.updatedAt}更新</p>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="mb-2">営業推進</h2>
      <div className="body mb-5">
        <ul>
          {manuEisui.map(({ node }) => (
            <li key={node.id} style={{lineHeight:1.5}}>
              <Link to={`/contents/${node.id}`}>{node.title}</Link>
              <p style={{marginTop:0, fontSize:"80%"}}>{node.updatedAt}更新</p>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="mb-2">Web</h2>
      <div className="body mb-5">
        <ul>
          {manuWeb.map(({ node }) => (
            <li key={node.id} style={{lineHeight:1.5}}>
              <Link to={`/contents/${node.id}`}>{node.title}</Link>
              <p style={{marginTop:0, fontSize:"80%"}}>{node.updatedAt}更新</p>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/">トップページに戻る</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsContents {
      edges {
        node {
          title
          category {
            ctegory
          }
          updatedAt(formatString: "YYYY/MM/DD")
          id
        }
      }
    }
  }
`