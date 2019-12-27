/* 
Shadowed to add newsletter box at the end of the article
*/
import React from "react"
import { Link } from "gatsby"
import { css, Styled, Flex } from "theme-ui"
import { DiscussionEmbed } from "disqus-react"
import Newsletter from "../../components/newsletter"
import BigBio from "../../components/big-bio"
import ShareButtons from "../../components/share-buttons"
import TagCloud from "../../components/tag-cloud"

const Footer = ({ location, previous, next, discussion }) => (
  <footer
    css={css({
      mt: 4,
      pt: 1,
    })}
  >
    <Styled.h5>Share your thoughts!</Styled.h5>
    <DiscussionEmbed shortname={discussion} />
    <ShareButtons location={location} mt={2} mb={0}/>
    <Newsletter mt={4} mb={4}/> {/* Added components */}
    <BigBio />
    <TagCloud />
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
