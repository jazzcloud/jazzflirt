import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components';
import Seo from "../components/seo"

const WrapChisiamo = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 2fr 6fr 0.7fr;
  margin-top: 8rem;

  h2 {
    color: var(--orange);
  }

  .textLeft {
    grid-column: 2/3;
    justify-self: start;
    margin-top: 6px;
  }
  .textRight {
    grid-column: 3/4;
    justify-self: end;
  }



  @media (max-width: 48em) {
    margin-top: 3rem;
    margin-bottom: 3rem;

    .textLeft {
      grid-column: 2/4;
      justify-self: start;
      font-weight: 600;
      margin-bottom: 0;
    }
    .textRight {
      grid-column: 2/4;
      justify-self: start;
      width: 100%;
      margin-top: 0.5rem;
    }
  }
`;


const ChiSiamo = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Chi siamo" />
      <WrapChisiamo>
        <div className="textLeft">
          <h2>nascita</h2>
        </div>
        <div className="textRight">
          <p>
            L'Associazione di promozione sociale Jazzflirt - Musica & altri Amori nasce a Formia nel maggio del 2004 con l'obiettivo principale di promuovere e diffondere la cultura musicale in generale, ed in particolare quella originale improvvisata di stampo jazzistico.
          </p>
        </div>
        <div className="textLeft">
          <h2>obiettivo</h2>
        </div>
        <div className="textRight">
          <p>
            Dalla sua nascita ad oggi, l'associazione ha mirato anche a contribuire alla formazione del pubblico, soprattutto giovanile, attraverso diversi canali espressivi quali concerti, seminari, rassegne cinematografiche, mostre fotografiche. 
            Nei suoi dieci anni di attività, l'associazione ha spesso lavorato in sinergia con altre associazioni nell'organizzazione di concerti per serate di beneficenza, mostre fotografiche e proiezioni di filmati, mettendo a disposizione la propria esperienza nel campo dell'organizzazione di eventi per la crescita di occasioni di aggregazione culturale nella città ed in tutto il golfo.
          </p>
        </div>
        <div className="textLeft">
          <h2>festival</h2>
        </div>
        <div className="textRight">
          <p>
            Le attività concertistiche, presentate nell'arco di tutto l'anno, hanno sempre avuto come naturale conclusione stagionale le edizioni del "Jazzflirt Festival", presentando in ogni occasione musicisti di alta qualità e riscuotendo un successo di pubblico crescente negli anni.
          </p>
        </div>
        </WrapChisiamo>
    </Layout>
  )
}

export default ChiSiamo

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
