import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Styled } from "theme-ui"
import { Card } from "@theme-ui/components"
import { TagCloud as Cloud } from "react-tagcloud"

export default function TagCloud() {
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

  const customRenderer = tag => (
    <Card sx={{ display: "inline-block" }}>
      <Styled.a
        as={Link}
        to={toHref(tag)}
        key={tag.value}
        sx={{
          display: "inline-block",
        }}
      >
        {tag.value}
      </Styled.a>
    </Card>
  )

  return <Cloud tags={data.allBlogPost.group} style={{ textAlign: "center" }} renderer={customRenderer} />
}
