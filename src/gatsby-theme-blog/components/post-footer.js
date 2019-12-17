/* 
Shadowed to add newsletter box at the end of the article
*/
import React from "react"
import { Link } from "gatsby"
import { css, Styled, Flex } from "theme-ui"

import Bio from "gatsby-theme-blog/src/components/bio"
import Newsletter from "../../components/newsletter"
import ExternalLink from "../../components/external-link"

const SocialLinks = ({ twitterUrl, githubUrl }) => (
  twitterUrl && githubUrl && (
    <>
      <ExternalLink to={twitterUrl}>Discuss on Twitter</ExternalLink>
      {` `}&bull;{` `}
      <ExternalLink to={githubUrl}>Edit on Github</ExternalLink>
    </>
  )
)

const Footer = ({ previous, next, twitterUrl, githubUrl }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    <Styled.hr />
    <Bio />
    <SocialLinks twitterUrl={twitterUrl} githubUrl={githubUrl} />{/* Added component */}
    <Newsletter /> {/* Added component */}
    {(previous || next) && (
      <Flex
        as="ul"
        css={css({
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        })}
      >
        <li>
          {previous && (
            <Styled.a as={Link} to={previous.slug} rel="prev">
              ← {previous.title}
            </Styled.a>
          )}
        </li>
        <li>
          {next && (
            <Styled.a as={Link} to={next.slug} rel="next">
              {next.title} →
            </Styled.a>
          )}
        </li>
      </Flex>
    )}
  </footer>
)

export default Footer
