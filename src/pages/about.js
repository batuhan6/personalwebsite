import React from "react"
import DCPerson from "../components/DCPerson"
import {
  Container,
  Img,
  Section,
  FlexStyled as Flex
} from "../components-styled"
import { Box } from "grid-styled"

import DCPicture from "../components/DCPicture"

const AboutPage = () => (
  <Container>
    <Section>
      <h2>About</h2>
      <p>This page was constructed by Firstname.</p>
      <Flex />
    </Section>
  </Container>
)

export default AboutPage
