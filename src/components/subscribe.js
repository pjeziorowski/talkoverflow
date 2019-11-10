import React from "react"
import {
  Label,
  Input,
  Box,
  Flex,
  Button,
  Heading,
  Card,
  Text,
} from "@theme-ui/components"

export default function SimpleCard() {
  return (
    <Card>
      <Box as="form" onSubmit={e => e.preventDefault()}>
        <Box p={2}>
          <Heading as="h1">Get exclusive content</Heading>
        </Box>
        <Text p={2}>
          Join the newsletter to get access to content available for subscribers
          only. No trashtalk guaranteed - quality stuff only.
        </Text>
        <Flex>
          <Box p={2} sx={{ flex: "1 1 auto" }}>
            <Label htmlFor="name">Prefered name</Label>
            <Input name="name" mb={3} placeholder="Jon Doe" />
          </Box>
          <Box p={2}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              mb={3}
              placeholder="john@doe.com"
            />
          </Box>
          <Box p={2} sx={{ display: "flex", alignItems: "center" }}>
            <Button>Subscribe</Button>
          </Box>
        </Flex>
      </Box>
    </Card>
  )
}
