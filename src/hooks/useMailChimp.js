import { useState, useCallback } from "react"
import addToMailChimp from "gatsby-plugin-mailchimp"

export const useMailChimp = (name, email) => {
  const [error, setError] = useState(null)
  const [subscribed, setSubscribed] = useState(false)
  const [processing, setProcessing] = useState(false)

  const subscribe = useCallback(() => {
    setProcessing(true)
    addToMailChimp(email, { NAME: name })
      .then(data => {
        if (data.msg.includes("already subscribed")) {
          // we handle it because mailchimp responds with HTML in this case
          setError("Seems like this email is already subscribed...")
        } else if (data.result === "error") {
          setError(data.msg)
        } else {
          setSubscribed(true)
        }
        setProcessing(false)
      })
      .catch(() => {
        setError("We are sorry! Something went wrong... Please, try again later :(")
      })
  }, [name, email])

  return {
    subscribe: subscribe,
    processing: processing,
    subscribed: subscribed,
    error: error,
  }
}
