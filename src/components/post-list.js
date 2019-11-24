import React from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

import SEO from "gatsby-theme-blog/src/components/seo"
import { Badge, Heading, Box } from "@theme-ui/components"

const tagToPath = tag => tag.replace(/ /g, "-").toLowerCase()

const PostList = props => {
  return (
    <Styled.div>
      {props.posts.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []
        return (
          <Box mb={2} key={node.slug}>
            <SEO title="Home" keywords={keywords} />
            <Heading
              css={css({
                mb: 1,
              })}
            >
              <Styled.a
                as={Link}
                css={css({
                  textDecoration: `none`,
                })}
                to={node.slug}
              >
                {title}
              </Styled.a>
            </Heading>
            <small>{node.date}</small>
            <Styled.div>
              {node.tags.map(tag => (
                <Badge mr={1} variant="outline">
                  <Styled.a
                    css={css({ textDecoration: "none" })}
                    as={Link}
                    to={`tags/${tagToPath(tag)}`}
                  >
                    {tag}
                  </Styled.a>
                </Badge>
              ))}
            </Styled.div>
            <Styled.p>{node.excerpt}</Styled.p>
          </Box>
        )
      })}
    </Styled.div>
  )
}

export default PostList
