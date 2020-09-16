import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo-designcode.svg'
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
    <div className="headerGroup">
      <Link to="/"><img alt="logo" src={logo} width="30"/></Link>
      <Link to="/">Courses</Link>
      <Link to="/">Downloads</Link>
      <Link to="/">Workshops</Link>
      <Link to="/"><button>Buy</button></Link>
    </div>
  </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
