/* 
Shadowed to add some page description
*/
import React from "react"

import DirectoryList from "gatsby-theme-notes/src/components/directory-list"
import FileList from "gatsby-theme-notes/src/components/file-list"
import Breadcrumbs from "gatsby-theme-notes/src/components/breadcrumbs"
import Layout from "gatsby-theme-notes/src/components/layout"
import { Heading } from "@theme-ui/components"

export default ({
  directories,
  files,
  breadcrumbs = [],
  siteTitle,
  ...props
}) => (
  <Layout {...props} title={siteTitle}>
    <Heading as="h2" mb={4}>
      Digital store of thoughts and notes
    </Heading>
    {breadcrumbs.length ? <Breadcrumbs links={breadcrumbs} /> : null}
    <DirectoryList directories={directories} />
    <FileList files={files} />
  </Layout>
)
