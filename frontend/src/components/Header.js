import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import logo3 from "../images/logo3.png"

const Header = () => {
  return (
    <header>
      <Navbar style={{ background: "#1f1f1f" }} expand='lg'>
        <Navbar.Brand href='#home'>
          {" "}
          <img
            alt=''
            src={logo3}
            width={
              window.innerWidth > 1100
                ? "250"
                : window.innerWidth > 760
                ? "150"
                : "110"
            }
            className='d-inline-block align-top'
            style={{ marginLeft: "6vw" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <div className='navLink-wrapper'>
              <Nav.Link
                href='#work'
                class='lin'
                style={{
                  color: "#555eff",
                  fontSize: "180"
                }}
              >
                Work
              </Nav.Link>
              <Nav.Link href='#skills' class='lin' style={{ color: "#555eff" }}>
                Skills
              </Nav.Link>
              <Nav.Link
                href='#contact'
                class='lin'
                style={{ color: "#555eff" }}
              >
                Resume
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
