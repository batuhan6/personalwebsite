import React from 'react'

import {
  Header,
  HeaderSection,
  LogoText,
  Nav,
  NavItem,
  ImgPerson,
  LinkStyled as Link,
  ImgCaption,
} from '../components-styled'

const DCPerson = props => (
  <div>
    <ImgPerson src={props.img} />
    <ImgCaption>{props.person}</ImgCaption>
  </div>
)

export default DCPerson
