import React from "react"
import { Label, Input, Box, Flex, Button, Heading, Card, Text } from "@theme-ui/components"
import { useMailChimp } from "../hooks/useMailChimp"

export default function Newsletter() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const { subscribe, processing, subscribed, error } = useMailChimp(name, email)

  return (
    <Card mt={4}>
      {subscribed ? (
        <Text p={2}>Thank you for subscribing!</Text>
      ) : (
        <Box
          as="form"
          onSubmit={e => {
            e.preventDefault()
            subscribe()
          }}
        >
          <Box p={2}>
            <Heading as="h1">Get exclusive content</Heading>
          </Box>
          <Text p={2}>
            Join the newsletter to get access to content available for subscribers only. No trashtalk
            guaranteed - quality stuff only.
          </Text>
          {error ? (
            <Text sx={{ color: "red" }} p={2}>
              {error}
            </Text>
          ) : null}
          <Flex sx={{ flexWrap: "wrap" }}>
            <Box p={2} sx={{ flexGrow: 1 }}>
              <Label htmlFor="name">Preferred name</Label>
              <Input name="name" placeholder="Jon Doe" onChange={e => setName(e.target.value)} />
            </Box>
            <Box p={2} sx={{ flexGrow: 1 }}>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="john@doe.com"
              />
            </Box>
            <Box p={2} mt={3} sx={{ display: "flex", flexGrow: "1", alignItems: "center" }}>
              <Button sx={{ width: "100%", color: '#333333' }}>{processing ? "Processing" : "Subscribe!"}</Button>
            </Box>
          </Flex>
        </Box>
      )}
    </Card>
  )
}
