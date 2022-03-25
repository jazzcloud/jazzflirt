import * as React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';
import Seo from "../components/seo"
import Layout from "../components/layout"

const GuestbookStyle = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 6fr 2fr 0.7fr;
  margin-top: 4rem;

  .wrap {
    grid-column: 2/3;
    list-style: none;
    p {
      border-left: 3px solid var(--orange);
      padding-left: 2rem;
    }
  }
  @media (max-width: 766px) {
      .wrap {
        grid-column: 2/4;
      }

    }
`;


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const guests = data.guestbook.nodes

  

  return (
    <Layout location={location} title={siteTitle}>
    <Seo title="Guestbook" />
      {
        
        guests.map((node) => (
          <GuestbookStyle key={node}>
            <li className="wrap" key={node.fields.slug}>
                <h2>
                  {node.frontmatter.title}
                </h2>
                <small>
                  {node.frontmatter.date}
                </small>
                <p>
                  "{node.frontmatter.description}"
                </p> 
            </li>
          </GuestbookStyle>
        ))
        
      }
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
    guestbook: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/guestbook/"}}
      sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          description
        }
      }
    }
  }
`