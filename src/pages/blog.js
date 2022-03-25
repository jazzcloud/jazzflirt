import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components';
import Seo from "../components/seo"

const Index = styled.ol`
  display: grid;
  grid-template-columns: 0.7fr 8fr 0.7fr;

  ol {
    grid-column: 2/3;
    list-style: none;
    padding-left: 0px;
  }

  .post-list-item {
    &:hover {
      transition-timing-function: ease-in;
      transition: 0.2s;
      transform: translateX(2rem);
      h2 {
        color: var(--orange);
      }
    }
  }
`;

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Blog" />
      <Index>
      <ol style={{}}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li style={{borderBottom: `1px solid grey`, marginBottom: `1rem` }}key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <small>{post.frontmatter.date}</small>
                  
                    <Link to={post.fields.slug} itemProp="url">
                      <h2 itemProp="headline">{title}</h2>
                    </Link>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      </Index>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/blog/"}}
      sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
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
`