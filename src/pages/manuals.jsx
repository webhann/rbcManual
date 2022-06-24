import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import "../styles/style.css"

const manuals = [
  {
    manuId: 'manuCommon',
    manuCate: '共通',
  },
  {
    manuId: 'manuNews',
    manuCate: 'ニュース',
  },
  {
    manuId: 'manuRadio',
    manuCate: 'ラジオ',
  },
  {
    manuId: 'manuTv',
    manuCate: 'テレビ',
  },
  {
    manuId: 'manuEisui',
    manuCate: '営業推進',
  },
  {
    manuId: 'manuWeb',
    manuCate: 'Web',
  },
]

const IndexPage = ({ data }) => {
  const spreadManuals = manuals.map((post)=>{
    const manuPosts = data.allMicrocmsContents.edges.filter(edge => {
      const cate = post.manuCate;
      return edge.node.category.ctegory.includes(cate);
    })
    const spreadPosts = manuPosts.map(({ node }) => {
      return (
        <li key={node.id} style={{lineHeight:1.5}}>
          <Link to={`/contents/${node.id}`}>{node.title}</Link>
          <p style={{marginTop:0, fontSize:"80%"}}>{node.updatedAt}更新</p>
        </li>
      )
    })
    return (
      <div key={post.manuId}>
        <h2 className="mb-2">{post.manuCate}</h2>
        <div className="body mb-5">
          <ul>
            {spreadPosts}
          </ul>
        </div>
      </div>
    )
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
      {spreadManuals}
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