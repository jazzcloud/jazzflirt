import { createGlobalStyle } from 'styled-components';

import headings from '../assets/fonts/ArchivoNarrow.ttf';
import paragraphs from '../assets/fonts/OpenSans.ttf';


const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Archivo Narrow';
    src: url(${headings});
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${paragraphs});
  }
  html {
    color: var(--black);
  }
  p, li {
    font-family: 'Open Sans';
    font-weight: 400;
    letter-spacing: 0.5px;
    
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Archivo Narrow';
    font-weight: bold;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  .center {
    text-align: center;
  }

`;

export default Typography;