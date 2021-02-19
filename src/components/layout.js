import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight from "./highlight"

const shortcodes = { Highlight }

export default function Layout({ children }) {
  return (
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  )
}