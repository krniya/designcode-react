import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <div>
    <Layout/>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to<br /> Design and Code React app</h1>
        <p>
          Complete courses about tools and design system. Prototype and build
          apps with React and Swift
        </p>
        <Link to="/page-2/">Watch the Video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
