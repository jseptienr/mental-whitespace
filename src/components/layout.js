import React from "react"
import { Link } from "gatsby"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Container from "react-bootstrap/Container"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <header>
        <Navbar style={{borderBottom: '#ddd solid 1px'}} sticky="top" >
          <Navbar.Brand >
            <h3 className="site-title"><Link className="nav-link"  style={{boxShadow: `none`, color: `#333`}} to="/">{title}</Link></h3>
          </Navbar.Brand>
          <Nav style={{marginTop: rhythm(1 / 2)}} className="ml-auto">
            <Nav.Item as="li">
              <Link className="nav-link"  style={{boxShadow: `none`}} to="/">Home</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link  className="nav-link" style={{boxShadow: `none`}} to="/about">About</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link  className="nav-link" style={{boxShadow: `none`}} to="/contact">Contact</Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </header>
    )
    return (
      <div>
        <div>
          <header>{header}</header>
        </div>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(25),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <main>{children}</main>
          <footer>
            <p style={{textAlign: 'center',}}>
              © {new Date().getFullYear()} Mental Whitespace, built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </p>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
