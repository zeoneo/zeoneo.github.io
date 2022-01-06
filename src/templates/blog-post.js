import React from "react"
import { Link, graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Tags from '../components/tags'
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

export const disqusConfig = ({ slug, title }) => ({
  shortname: process.env.GATSBY_DISQUS_NAME,
  config: { identifier: slug, title },
});


class BlogPostTemplate extends React.Component {
  render() {
    
    const post = this.props.data.markdownRemark
    const timeToRead = this.props.data.markdownRemark.timeToRead;
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next, slug } = this.props.pageContext
    const disqusConfig1 = disqusConfig({ slug, title: post.frontmatter.title });
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
          <span style={{ marginLeft: rhythm(1)}}>
            Time to read: {timeToRead} minute(s)
          </span>
        </p>
        
        <div>
          {post.frontmatter.tags.length ? "Tags: " : ""}<Tags>{post.frontmatter.tags}</Tags>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <DiscussionEmbed {...disqusConfig1} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
      timeToRead
    }
  }
`
