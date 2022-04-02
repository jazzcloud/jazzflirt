import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import fb from "../images/facebook.png";
import ig from "../images/instagram.png";

const FooterStyles = styled.footer`
clear: both;
position: sticky;
top: 0;
overflow: hidden;
background: var(--black);
color: var(--white);
border-bottom: 1px solid black;
z-index: 1;
display: grid;
grid-template-columns: 0.7fr 4fr 2fr 2fr 0.7fr;
align-items: center;
padding: 20px 0px 20px 0px;


    .info {
    margin: -7px;
    padding: 8px;
    list-style: none;
    grid-column: 2/4;
    justify-self: start;
    font-size: 1.8rem;
    width: 90%; 
    }
    .info li {
    margin-top: 1.2rem;
    }

    .policies, a {
        color: white;
        margin-top: 1.5rem;
        font-size: 1.5rem;
        margin-right: 1rem;
    &:hover {
        color: var(--orange);
    }
    }
    .credits {
        font-size: 1.2rem;
    }

    .utilities {
        grid-column: 4/5;
        display: inline-block;
        justify-self: start;
        font-size: 1.8rem; 
        margin: 0.6rem;
        padding: 0;

        .links {
            margin: 0.8rem;
        }
         a {
             color: white;
             font-size: 1.8rem;
         &:hover {
             color: var(--orange);
         }
         }
    
    }
    .mobileUtilities {
        display: none;
    }

    @media (max-width: 580px) {
        .utilities {
            display: none;
        }
        .mobileUtilities {
            display: inline-block;
            grid-column: 2/5;
            grid-row: 1/2;
            border-bottom: 2px solid grey;
            padding-bottom: 1rem;
            li {
                margin-top: 0.5rem;
            }
            a {
                color: white;
                font-size: 1.6rem;
                margin-right: 1.4rem;
                &:hover {
                    color: var(--orange);
                }
            }
        }
        .info {
            grid-column: 2/5;
            grid-row: 2/3;
            width: 100%;
        }
        .line {
            border-bottom: 2px solid grey;
            padding-bottom: 0.2rem;
        }
    }
`;

export default function Footer() {
    return <FooterStyles>
            <ul className='info'>
            <li>© {new Date().getFullYear()} - Jazzflirt - Musica & altri Amori Via della Torre, 6 04023 Formia (LT) </li>
            <li>Associazione di promozione sociale nel Registro delle Associazioni della Regione Lazio con determina N.D2550 10/06/2005 
            - C.F. 90036040591 – P.I. 02234320592 </li>

            <li>
                <div className="line"></div>
            </li>
            
            <li>
                <a className="credits" 
                href="https://www.instagram.com/bisabi_design/" 
                target="_blank"
                rel="noopener noreferrer"
                >
                    Designed and developed by bisabi
                </a>
            </li>
            </ul>
            <ul className='utilities'>
                <li class="links">
                    <a href="https://www.facebook.com/Jazzflirt/" 
                    target="_blank"
                    rel="noopener noreferrer"><img src={fb} 
                    alt="Pagina Facebook" 
                    width="24" height="24" />
                    </a>
                    <a href="https://www.instagram.com/jazzflirt/" 
                    target="_blank"
                    rel="noopener noreferrer"><img src={ig} 
                    alt="Profilo Instagram" 
                    width="24" height="24" />
                    </a>    
                </li>

                <li class="links">
                    <Link to="/chisiamo">Chi siamo</Link>
                </li>

                <li class="links">
                    <Link to="/blog">Blog</Link>
                </li>

                <li class="links">
                    <Link to="/guestbook">Guestbook</Link>
                </li>

                <li class="links">
                    <Link to="/contatti">Contatti</Link>
                </li> 

            </ul>

            <ul className='mobileUtilities'>
                <li class="links">
                    <a href="https://www.facebook.com/Jazzflirt/" 
                    target="_blank"
                    rel="noopener noreferrer"><img src={fb} 
                    alt="Pagina Facebook" 
                    width="24" height="24" />
                    </a>
                    <a href="https://www.instagram.com/jazzflirt/"
                    target="_blank" 
                    rel="noopener noreferrer"><img src={ig} 
                    alt="Profilo Instagram" 
                    width="24" height="24" />
                    </a>
                </li>  
                <li class="links">
                    <Link to="/chisiamo">Chi siamo</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/guestbook">Guestbook</Link>
                    <Link to="/contatti">Contatti</Link>   
                </li>      
            </ul>
        
        
    </FooterStyles>
}