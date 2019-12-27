import React from 'react'
import { Text } from "@theme-ui/components"
import { Styled, css } from 'theme-ui'
import twitterSvgSrc from "../../static/twitter-black.svg"
import facebookSvgSrc from "../../static/facebook-black.svg"

const encoded = href => encodeURIComponent(href)
const facebookShareUrl = currentEncodedHref => `https://www.facebook.com/sharer.php?u=${currentEncodedHref}`
const twitterShareUrl = currentEncodedHref => `https://twitter.com/intent/tweet?original_referer=${currentEncodedHref}&ref_src=twsrc%5Etfw&tw_p=tweetbutton&url=${currentEncodedHref}&text=@pjeziorowski%20-%20talkoverflow`

export default function ShareButtons({location, mt, mb}) {
  return (
    <Styled.div
      css={css({
        display: ["flex", "none"],
        maxWidth: "200px",
        mt: mt,
        mb: mb,
      })}
    >
      <Styled.h2>
        <Text mr={3}>Share</Text>
      </Styled.h2>
      <a
        style={{ width: "30px", marginRight: "10px" }}
        href={facebookShareUrl(encoded(location.href))}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebookSvgSrc} alt={"Facebook Icon"} />
      </a>
      <a
        style={{ width: "30px" }}
        href={twitterShareUrl(encoded(location.href))}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitterSvgSrc} alt={"Twitter Icon"} />
      </a>
    </Styled.div>
  )
}
