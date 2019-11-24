import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Styled } from "theme-ui"
import { Badge, Heading } from "@theme-ui/components"
import { TagCloud as Cloud } from "react-tagcloud"

export default function TagCloud({ activeTag }) {
  const data = useStaticQuery(graphql`
    query AllTags {
      allBlogPost {
        group(field: tags) {
          value: fieldValue
          count: totalCount
        }
      }
    }
  `)

  const toHref = tag => {
    return `tags/${tag.value.replace(/ /g, "-").toLowerCase()}`
  }

  const adjustTagColors = () => {
    const tagToHighlight = data.allBlogPost.group.find(
      tag => tag.value === activeTag
    )
    data.allBlogPost.group.forEach(tag => (tag.color = "background"))
    if (tagToHighlight) {
      tagToHighlight.color = "gray"
    }
  }

  const customRenderer = (tag, size, color) => (
    <Badge variant="outline" sx={{ backgroundColor: color }} mr={1} mb={1}>
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

  adjustTagColors()
  return (
    <Cloud
      disableRandomColor
      shuffle={false}
      tags={data.allBlogPost.group}
      renderer={customRenderer}
    />
  )
}
