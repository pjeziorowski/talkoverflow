/* 
Shadowed to add newsletter box at the end of the article
*/
import React from "react"
import { Link } from "gatsby"
import { css, Styled, Flex } from "theme-ui"

import Bio from "gatsby-theme-blog/src/components/bio"
import Newsletter from "../../components/newsletter"
import ExternalLink from "../../components/external-link"
import TagCloud from "../../components/post-tags"

const SocialLinks = ({ twitterUrl, githubUrl }) => (
  twitterUrl && githubUrl && (
    <>
      <ExternalLink to={twitterUrl}>Discuss on Twitter</ExternalLink>
      {` `}&bull;{` `}
      <ExternalLink to={githubUrl}>Edit on Github</ExternalLink>
    </>
  )
)

const Footer = ({ previous, next, twitterUrl, githubUrl, tags }) => (
  <footer
    css={css({
      mt: 4,
      pt: 1,
    })}
  >
    <SocialLinks twitterUrl={twitterUrl} githubUrl={githubUrl} />{/* Added component */}
    <Styled.hr
      css={css({
        mt: 3,
      })}
    />
    <TagCloud tags={tags}/>{/* Added tagcloud */}
    <Styled.hr
      css={css({
        mt: 3,
      })}
    />
    <Bio />
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
