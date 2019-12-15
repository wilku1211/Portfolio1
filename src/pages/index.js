import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Image from "../components/image"

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Image />
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage