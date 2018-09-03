import React from "react"

import { Picture, Source, Img } from "../components-styled"

class DCPicture extends React.Component {
  render() {
    // Largest ones first
    return (
      <Picture>
        <Source
          media={"(min-width: 801px)"}
          srcSet={this.props.img["0100"]["16x9"]}
          data-srcset={this.props.img["1200"]["16x9"]}
        />
        <Source
          media={"(min-width: 481px)"}
          srcSet={this.props.img["0100"]["16x9"]}
          data-srcset={this.props.img["0800"]["16x9"]}
          />
        <Img
          data-sizes="100vw"
          srcSet={this.props.img["0100"]["16x9"]}
          data-srcset={this.props.img["0480"]["16x9"]}
          className="lazyload blur-up"
          alt={"Missing image"}
        />
      </Picture>
    )
  }
}

export default DCPicture
