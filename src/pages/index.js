import React from "react"
import { Link, graphql } from "gatsby"

//import Bio from "../components/bio"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "react-bootstrap/Button"

import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        { /* <Bio /> */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h1
                  style={{
                    marginBottom: rhythm(1 / 2),
                    textAlign: 'center',
                  }}
                >
                  <Link className="post-link" style={{ boxShadow: `none`, fontWeight: `400`, }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h1>
                <p style={{fontFamily: 'montserrat', textAlign: 'center', letterSpacing: '2px',}}><small>{node.frontmatter.date}</small></p>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
              <Button className="read-more-btn">
                <Link to={node.fields.slug}>READ MORE</Link>
              </Button>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
