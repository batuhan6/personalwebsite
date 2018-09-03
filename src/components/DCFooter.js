import React from "react"
import { Flex, Box } from "grid-styled"

import {
  Footer,
  FooterSection,
  LegalSection,
  LinkFooterStyled as Link
} from "../components-styled"

const DCFooter = props => (
  <Footer>
    <FooterSection>
      <p>&copy; Firstname Lastname</p>
      <div>
        <p>
          Revision: {props.date}
          <br />
          Browser: {props.browser.name} {props.browser.version}
        </p>
      </div>
    </FooterSection>
    <LegalSection>
      <Box>
        <Link to="/imprint">Imprint</Link>
        {" · "}
        <Link to="/data-protection">Data protection</Link>
      </Box>
    </LegalSection>
  </Footer>
)

export default DCFooter
