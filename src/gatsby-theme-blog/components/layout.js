import React from "react"
import StickyBox from "react-sticky-box"
import { css, Styled } from "theme-ui"

import Header from "./header"
import twitterSvgSrc from "../../../static/twitter-black.svg"
import facebookSvgSrc from "../../../static/facebook-black.svg"

export default ({ children, ...props }) => {
  const currentEncodedHref = encodeURIComponent(props.location.href)
  const facebookShareUrl = `https://www.facebook.com/sharer.php?u=${currentEncodedHref}`
  const twitterShareUrl = `https://twitter.com/intent/tweet?original_referer=${currentEncodedHref}&ref_src=twsrc%5Etfw&tw_p=tweetbutton&url=${currentEncodedHref}&text=@pjeziorowski%20-%20talkoverflow`
  const isPostPage = (props.location && props.location.href && props.location.href.includes("/posts/")) || (props.location && props.location.pathname && props.location.pathname.includes("/posts/"))

  var style = {
    borderTop: "1px solid #1B1F23",
    backgroundColor: "background",
    textAlign: "center",
    paddingTop: "2",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "100%",
  }

  var phantom = {
    display: "block",
    height: "0px",
    width: "container",
    margin: "auto",
  }

  const Footer = ({ children }) => {
    return (
      <footer css={css({ display: ["block", "none"] })}>
        <div css={css({ phantom })} />
        <div css={css(style)}>{children}</div>
      </footer>
    )
  }

  const Sidebar = () => (
    <StickyBox offsetTop={30} offsetBottom={20}>
      <aside style={{width: '100px'}}>
        <div css={css({ display: ["none", "inline"] })}>
          <Styled.div style={{ textAlign: "center" }}>
            <Styled.h4 css={css({ marginBottom: "2", color: "secondary" })}>
              Like the content?
            </Styled.h4>
            <Styled.h4 css={css({ marginBottom: "1", color: "primary" })}>
              Follow
            </Styled.h4>
          </Styled.div>
          <div
            style={{
              width: "40px",
              maxHeight: "64px",
              margin: "0px auto 15px auto",
            }}
          >
            <a
              href="https://www.facebook.com/talkoverflowsoftware/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookSvgSrc} alt={"Facebook Icon"} />
            </a>
            <a
              href="https://twitter.com/pjeziorowski?ref_src=twsrc%5Etfw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterSvgSrc} alt={"Twitter Icon"} />
            </a>
          </div>
          <div css={css({ display: ["none", "inline"], margin: "15px" })}>
            {isPostPage && (
              <React.Fragment>
                <Styled.div style={{ textAlign: "center" }}>
                  <Styled.h4 css={css({ marginBottom: "1", color: "primary" })}>
                    Share
                  </Styled.h4>
                </Styled.div>
                <div
                  style={{ width: "40px", maxHeight: "64px", margin: "auto" }}
                >
                  <a
                    href={facebookShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebookSvgSrc} alt={"Facebook Icon"} />
                  </a>
                  <a
                    href={twitterShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitterSvgSrc} alt={"Twitter Icon"} />
                  </a>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </aside>
    </StickyBox>
  )

  return (
    <Styled.root>
      <div
        css={css({
          display: ["block", "flex"],
          alignItems: "flex-start",
          justifyContent: "center",
        })}
      >
        <Sidebar />
        <div style={{ maxWidth: "container" }}>
          <Header {...props} />
          <main
            css={css({
              maxWidth: `container`,
              mx: `auto`,
              px: 3,
              py: 0,
            })}
          >
            {children}
          </main>
          <Footer>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <a
                style={{ width: "24px" }}
                href="https://www.facebook.com/talkoverflowsoftware/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookSvgSrc} alt={"Facebook Icon"} />
              </a>
              <Styled.h5 css={css({ color: "primary" })}>
                LIKE THE CONTENT?
                <br />
                FOLLOW ME & GET UPDATES
              </Styled.h5>
              <a
                style={{ width: "24px" }}
                href="https://twitter.com/pjeziorowski?ref_src=twsrc%5Etfw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterSvgSrc} alt={"Twitter Icon"} />
              </a>
            </div>
          </Footer>
        </div>
      </div>
    </Styled.root>
  )
}
