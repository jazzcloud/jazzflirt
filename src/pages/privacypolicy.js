import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"


const privacyPolicy = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  

  return (
    <Layout location={location} title={siteTitle}>
        <Seo title="Privacy policy" />
        <h1>Privacy Police</h1>
        <p>
            In questa pagina sono descritte le modalità di gestione del sito www.jazzflirt.net in riferimento al trattamento dei dati personali degli utenti che lo consultano.
        </p>
        <p>
            In adempimento a quanto prescritto dall'art. 13 del d.lgs. n. 196/2003 – Codice in materia di protezione dei dati personali si fornisce la seguente informativa a coloro che si troveranno ad interagire con il sito web dell'Associazione Culturale Jazzflirt.
        </p>
        <p>
            Titolare del trattamento In conseguenza della consultazione del presente sito potranno essere trattati dati relativi a persone (utenti) identificate o identificabili.
            Titolare del trattamento è l'Associazione Culturale Jazzflirt, in persona del Presidente nella qualità di legale rappresentante pro tempore, con sede in Formia (LT), Via Appia lato Napoli n.185.
        </p>
        <h2>Luogo del trattamento</h2>

        <p> I trattamenti inerenti ai dati di navigazione del sito hanno luogo presso il web hosting in cui sono tenuti i data base.
            Nessun dato derivante dal servizio web sarà comunicato o diffuso.
            I dati personali forniti volontariamente dagli utenti sono utilizzati solo al fine dell'espletamento del servizio richiesto e saranno raccolti e trattati presso la sede dell'Associazione Culturale Jazzflirt.
        </p>
        <h2>Tipi di dati che saranno trattati</h2>
            Dati di navigazione
            I sistemi informatici e le procedure software predisposti dal sito non sono in grado di raccogliere nessun dato di navigazione.
        
    </Layout>
  )
}

export default privacyPolicy

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`