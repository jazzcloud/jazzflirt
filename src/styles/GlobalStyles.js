import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --orange: hsla(23, 87%, 51%, 1);
    --black: hsla(22, 92%, 5%, 1);
    --white: hsla(27, 23%, 92%, 1);
    --orang2: hsl(14, 77%, 56%);
  }
  html {
    font-size: 10px;
  }
  body {
    font-size: 2rem;
    background: var(--white);
  }

  p {
    margin-top: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ol {
    padding-left: 0px;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0, 0;
    color: var(--black);
  }
  small {
    font-weight: 400;
    font-size: 1.4rem;
  }
  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }
  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--orange) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }
  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;