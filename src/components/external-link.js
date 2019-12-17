import React from "react"
import { Styled } from "theme-ui"

const ExternalLink = ({ to, children }) => {
  return to !== undefined && <Styled.a href={to}>{children}</Styled.a>
}

export default ExternalLink
