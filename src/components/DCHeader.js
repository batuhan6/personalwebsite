import React from "react"

import {
  Header,
  HeaderSection,
  LogoBrand,
  LogoText,
  Nav,
  NavItem,
  LinkStyled as Link
} from "../components-styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/**
 * DCHeader: Dumb Component Header
 */
const DCHeader = () => (
  <Header>
    <HeaderSection>
      <Link to="/">
        <LogoBrand>
          <FontAwesomeIcon icon="hand-peace" size="1x" /> Firstname´s personal
          website
        </LogoBrand>
      </Link>
      <Nav>
        <Link to="/">
          <NavItem>
            <FontAwesomeIcon icon="book-reader" size="1x" /> Blog
          </NavItem>
        </Link>{" "}
        <Link to="/fotos">
          <NavItem>
            <FontAwesomeIcon icon="images" size="1x" /> Fotos
          </NavItem>
        </Link>{" "}
        <Link to="/about">
          <NavItem>
            <FontAwesomeIcon icon="smile-wink" size="1x" /> About
          </NavItem>
        </Link>{" "}
      </Nav>
    </HeaderSection>
  </Header>
)

export default DCHeader
