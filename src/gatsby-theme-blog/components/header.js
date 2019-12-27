/* 
Adds navigation to site header
*/
import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Styled, css } from "theme-ui"

import Header from "./shadowed-header"
import twitterSvgSrc from "../../../static/twitter-black.svg"
import facebookSvgSrc from "../../../static/facebook-black.svg"

const SocialIcons = () => (
  <div css={css({ display: ["none", "flex"] })}>
    <Styled.a
      style={{ width: "22px", maxHeight: "22px", marginRight: "10px" }}
      href="https://www.facebook.com/talkoverflowsoftware/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={facebookSvgSrc} alt={"Facebook Icon"} />
    </Styled.a>
    <Styled.a
      style={{ width: "22px", maxHeight: "22px" }}
      href="https://twitter.com/pjeziorowski?ref_src=twsrc%5Etfw"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={twitterSvgSrc} alt={"Twitter Icon"} />
    </Styled.a>
  </div>
)

const Pages = ({ pages }) => (
  <div>
    <nav>
      <ul
        style={{
          paddingInlineStart: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {pages.map(link => (
          <Styled.li
            key={link.label}
            css={css({
              listStyleType: `none`,
              padding: `0 1rem`,
              margin: "0",
            })}
          >
            <Styled.a as={Link} to={link.path}>
              {link.label}
            </Styled.a>
          </Styled.li>
        ))}
      </ul>
    </nav>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query HeadersQuery {
        site {
          siteMetadata {
            title
            pages {
              label
              path
            }
          }
        }
      }
    `}
    render={data => (
      <Header {...props} title={data.site.siteMetadata.title}>
        <Pages pages={data.site.siteMetadata.pages} />
        <SocialIcons />
      </Header>
    )}
  />
)
