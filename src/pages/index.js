import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout"
import Seo from "../components/seo"


const HorizontalScrolling = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  border-bottom: 1px solid black;
  overflow: hidden;
  white-space: nowrap;
   
  .scroll {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    color: var(--orange);
    text-transform: uppercase;
    display: inline-block;
    animation: text 13s linear infinite;
    white-space: nowrap;
    grid-row: 1/2;
    &:hover {
      transition-timing-function: ease-in;
      animation-play-state: paused;
    }
  }

  @keyframes text {
    0% {
      margin-left: 100%;
      transform: translateX(0%);
    }
    100% {
      margin-left: 0;
      transform: translateX(-100%);
    }
  }
}
`;

const WrapStyles = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 8fr 0.7fr;
  h1 {
    grid-column: 2/3;
    margin-bottom: 0;
    margin-top: 2rem;
    color: var(--orange);
  }
  .leggidipiu {
    grid-column: 2/3;
    margin-bottom: 2rem;
    &:hover {
      transition-timing-function: ease-in;
      transition: 0.2s;
      transform: translateX(2rem);
      color: var(--orange);
    }
  }
  ol {
    list-style: none;
    max-width: 50em;
    grid-column: 2/3; 
    justify-self: start;
    padding-left: 0px; 
    margin-top: 2rem;
    margin-bottom: 1rem;
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
  .line {
       border-bottom: 1px solid grey;
       padding-bottom: 0.2rem;
        }
`;

const WrapSoci = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 2fr 6fr 0.7fr;
  border-top: 1px solid black;
  
    .textLeft {
      grid-column: 2/3;
      justify-self: start;
      font-weight: 600;
      color: var(--orange);
      margin-top: 4rem;
    }
    .textRight {
      grid-column: 3/4;
      justify-self: end;
      width: 90%;
      margin-top: 5rem;
      margin-bottom: 5rem;
    }

    @media (max-width: 766px) {
      .text-left: width: 40%;

    }
    @media (max-width: 540px) {
      .textLeft {
      grid-column: 2/4;
      justify-self: start;
      font-weight: 600;
    }
    .textRight {
      grid-column: 2/4;
      justify-self: start;
      width: 100%;
      margin-top: 2rem;
    }

    }
`;

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.blog.nodes
  const horizontal = data.message.nodes

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
      <Seo title="Jazzflirt" />
      
      {
        
        horizontal.map((node) => (
          <HorizontalScrolling key={node}>
              <h1 className="scroll">{node.frontmatter.title}</h1> 
              
          </HorizontalScrolling>
        ))
        
      }
      
      
      <WrapStyles>
      <h1>Blog</h1>
      <ol>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          
          return (
            
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
              >
                <Link to={post.fields.slug} itemProp="url">
                  <small>{post.frontmatter.date}</small>
                  <h2 
                    itemProp="headline">{title}
                  </h2>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </Link>  
                
                
              </article>
            </li>
          )
        })}
      </ol>
      <Link className="leggidipiu" to="/blog">Leggi di più</Link>
      </WrapStyles>
      <WrapSoci>
        <h2 className="textLeft">Diventa nostro socio</h2>
        <p className="textRight">Con il vostro supporto possiamo organizzare eventi sempre più unici. Diventa nostro socio, la tessera JAZZFLIRT vi permetterà di usufruire di preziose agevolazioni nel mondo del jazz in Italia
        </p>
      </WrapSoci>
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
    blog: allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/blog/"}}
      limit: 5
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

    message: allMarkdownRemark(
      limit: 1
      filter: {fileAbsolutePath: {regex: "/message/"}}) {
      nodes {
        frontmatter {
          title
      }
    }
  }

  }
`
