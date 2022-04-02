import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from "../images/logoJ.png";

const NavStyles = styled.nav`
position: sticky;
top: 0;
overflow: hidden;
background: var(--white);
border-bottom: 1px solid black;
z-index: 1;
padding: 8px;
list-style: none;
display: grid;
grid-template-columns: 0.7fr 2fr 4fr 2fr 0.7fr;
grid-template-rows: auto auto;
align-items: center;

.active {
    color: var(--orange);
}

a {
    letter-spacing: -1px;
    text-decoration: none;
    margin-right: 5rem;
    font-size: 2rem;
    color: var(--black);
    &:hover {
        color: var(--orange);
    }
}
    .imglogo {
        width: 190px;
        grid-column: 2/3;
        grid-row: 1/2;
        justify-self: start;
        margin-left: -5px;
    }
    .links  {
        grid-column: 3/4;
        padding-left: 11px;
        justify-self: center;
    }

    @media (max-width: 1170px) {
        .links  {
            grid-column: 3/5;
        }
        a {
            margin-right: 2rem;
        }
    }
      
    @media (max-width: 800px){   
        .links  {
            display: none;
        }
`;

const MenuIcon = styled.div`
    @media (max-width: 800px){
        grid-column: 4/5;
        justify-self: end;
        border: none;
        cursor: pointer;
        z-index: 5;

        div {
            width: 1.5rem;
            height: 0.2rem;
            background: black;
            border-radius: 5px;
            position: relative;
            transform-origin: 1px;
            margin: 0.3rem;
            position: relative;
            transition: opacity 300ms, transform 300ms;
        
            :first-child {
                transform: ${({ nav }) => nav ? "rotate(45deg)" : "rotate(0)"}  
            }

            :nth-child(2) {
                opacity: ${({ nav }) => nav ? "0" : "1"}
            }

            :nth-child(3) {
                transform: ${({ nav }) => nav ? "rotate(-45deg)" : "rotate(0)"}
            }
        }
`;

const MenuLinks = styled.nav`
    height: 100vh;
    width: 100%;
    grid-row: 2/3;
    grid-column: 2/4;
    justify-self: start;
    overscroll-behavior: none;
    overflow:auto;
    position: ${({ nav }) => (nav ? "relative" : "absolute")};
    top: 0;
    right: 0;
    transition: transform 300ms;
    transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};

    ul {
        list-style-type: none;
        padding-left: 0;
    }
    li {
        margin-top: 1rem;
    }
    a {
        font-size: 3rem
    }

`

export default function Nav() {

    const [nav, showNav] = useState(false)
    return <NavStyles>
        
            <li class="imglogo">
                <Link to="/"> <img src={logo} alt=""/></Link>
            </li>
            <li class="links">
                <Link to="/chisiamo" activeClassName="active">Chi siamo</Link>
                <Link to="/blog" activeClassName="active">Blog</Link>
                <Link to="/guestbook" activeClassName="active">Guestbook</Link>
                <Link to="/contatti" activeClassName="active">Contatti</Link>
            </li>
            

            <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
                <div />
                <div />
                <div />
            </MenuIcon>
            <MenuLinks nav={nav}>
                <ul>
                    <li>
                        <Link to="/chisiamo" activeClassName="active">Chi siamo</Link>
                    </li>
                    <li>
                        <Link to="/blog" activeClassName="active">Blog</Link>
                    </li>
                    <li>
                        <Link to="/guestbook" activeClassName="active">Guestbook</Link>
                    </li>
                    <li>
                        <Link to="/contatti" activeClassName="active">Contatti</Link>
                    </li>
                </ul>
            </MenuLinks>
        
        
    </NavStyles>
}