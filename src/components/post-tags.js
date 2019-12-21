import React from "react"

import { Link } from "gatsby"
import { Styled } from "theme-ui"
import { Badge, Heading } from "@theme-ui/components"
import { TagCloud as Cloud } from "react-tagcloud"

export default function TagCloud({ tags }) {
  const toHref = tag => {
    return `/tags/${tag.value.replace(/ /g, "-").toLowerCase()}`
  }

  const customRenderer = (tag, size, color) => (
    <Badge key={tag.value} variant="outline" sx={{ backgroundColor: color }} mr={1} mb={1}>
      <Styled.a
        as={Link}
        to={toHref(tag)}
        key={tag.value}
        sx={{
          textDecoration: "none",
          color: "primary",
        }}
      >
        <Heading p={1} as="h3">
          {tag.value}
        </Heading>
      </Styled.a>
    </Badge>
  )

  return (
    <Cloud
      maxSize={20}
      minSize={20}
      disableRandomColor
      shuffle={false}
      tags={tags.map(tag => {
          return {value: tag, count: 1}
      })}
      renderer={customRenderer}
    />
  )
}