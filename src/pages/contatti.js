import * as React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout"
import Seo from "../components/seo"


const FormStyles = styled.form`

  margin-top: 6rem;
  display: grid;
  grid-template-columns: 0.7fr 4fr 4fr 0.7fr;


  form {
    margin: 0 auto;
    /* Form outline */
    padding: 1em;
    justify-self: left;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    grid-column: 2/3;
  }

  h2 {
    margin-bottom: 3rem;
  }

  form li + li {
    margin-top: 1em;
    margin-bottom: 2em;
  }

  label {
    /* Uniform size & alignment */
    display: inline-block;
    width: 100%;
    text-align: left;
    margin-bottom: 0.3em;
  }

  input, textarea {
    /* To make sure that all text fields have the same font settings
     By default, textareas have a monospace font */
    font: 1em sans-serif;

    /* Uniform text field size */
    width: 85%;
    box-sizing: border-box;
    resize  : none;
    display: block;
    /* Match form field borders */
    border: 1px solid #999;
    margin-bottom: 0.3em;
    margin-top: 0.3em;
    background : none;
  }

  input:focus, textarea:focus {
    /* Additional highlight for focused elements */
    border-color: var(--orange);
  }

  textarea {
    /* Align multiline text fields with their labels */
    vertical-align: top;

    /* Provide space to type some text */
    height: 5em;
  }

  button {
    /* This extra margin represent roughly the same space as the space
      between the labels and their text fields */
    color: black;
    text-align: center;
    background-color: var(--orange);
    width: 85%;
    margin-top: 0.3em;
    &:hover {
      opacity: 80%;
    }
  }

  .addresses {
    grid-column: 3/4;
    justify-self: end;
    max-width: 80%;
    text-align: start;
    margin-top: 10rem;
  }
  .addresses li {
    margin-bottom: 1em;
  }

  a {
    text-decoration: underline;
    color: var(--orange);
  }

  @media (max-width: 770px) {

    ul {
    grid-column: 2/4;
    }

    input, textarea, button {
    width: 100%;
    }


    .addresses {
    grid-column: 2/4;
    justify-self: start;
    max-width: 100%;
    text-align: start;
    margin-top: 5rem;
    margin-bottom: 4rem;
    }

    li:nth-last-child(1) {
      display: none;
    }
  }


`;


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  

  return (
    <Layout location={location} title={siteTitle}>
    <Seo title="Chi siamo" />

        
      <FormStyles>
      <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
      </form>
          
      <ul>
        <h2>Contattaci</h2>
        <li>
          <label>
            Nome
            <input type="text" name="name" />
          </label> 
          
        </li>   
      
        <li>
          <label>
            Email
            <input type="email" name="email" />
          </label>  
        </li>
      
        <li>
          <label>
            Messaggio
            <textarea id="msg" name="user_message"></textarea>
            </label>  
        </li>
        <button type="submit">Invia</button>
      
      </ul>

      <ul className="addresses">
        <li><a href = "mailto: info@jazzflirt.net">info@jazzflirt.net</a></li>
        <li><a href="tel:+39-324-545-1814">324-545-1814</a></li>
        <li><a href="tel:+39-338-692-4358">338-692-4358</a></li>
        <li><a href="tel:+39-335-704-9918">335-704-9918</a></li>
        <li>Jazzflirt - Musica & altri Amori Via della Torre, 6 04023 Formia (LT) </li>
      </ul>
      </FormStyles>
      
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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