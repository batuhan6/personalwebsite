import React from "react"
import Link from "gatsby-link"
import {
  Container,
  FlexStyled as Flex,
  Picture,
  Section,
  Hr,
  Definition
} from "../components-styled"

import img01 from "../img/1200/16x9/01.jpg"

import { Box } from "grid-styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IndexPage = () => (
  <Container>
    <Section>
      <h1 id="fotos">Fotos</h1>
      <p>Here are my best fotos. </p>
    </Section>
    <Flex>
      <Box width={1 / 2} px={1}>
        <img src={img01} alt="Bruecke" />
      </Box>
      <Box width={1 / 2} px={1}>
        <img src={img01} alt="Bruecke" />
      </Box>
    </Flex>

    <Hr />
  </Container>
)

export default IndexPage
