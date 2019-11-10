import React from "react"

import DirectoryList from "gatsby-theme-notes/src/components/directory-list"
import FileList from "gatsby-theme-notes/src/components/file-list"
import Breadcrumbs from "gatsby-theme-notes/src/components/breadcrumbs"
import Layout from "gatsby-theme-notes/src/components/layout"
import Subscribe from "../../components/subscribe"

export default ({
  directories,
  files,
  breadcrumbs = [],
  siteTitle,
  ...props
}) => (
  <Layout {...props} title={siteTitle}>
    {breadcrumbs.length ? <Breadcrumbs links={breadcrumbs} /> : null}
    <DirectoryList directories={directories} />
    <FileList files={files} />
    <Subscribe />
  </Layout>
)
