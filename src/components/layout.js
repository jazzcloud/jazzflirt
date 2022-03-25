import * as React from "react"
import { Link } from "gatsby"
import 'normalize.css';
import styled from 'styled-components';
import Nav from "./Nav"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"
import Typography from "../styles/Typography";

const WrapStyles = styled.main`
  min-height: 80vh;
`;

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div  className="global-wrapper" data-is-root-path={isRootPath}>
      <GlobalStyles/>
      <Typography/>
      <Nav/>
      <WrapStyles><main>{children}</main></WrapStyles>
      <Footer/>
    </div>
  )
}

export default Layout
