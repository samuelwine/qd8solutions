import React from 'react'
import { Link } from 'gatsby'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <div className="menu-list">
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                  </div>
                </section>
              </div>
              <div className="column is-4">
                <section className="menu">
                  <div className="menu-list">
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                  </div>
                </section>
              </div>
              <div className="column is-4">
                <section className="menu">
                  <div className="menu-list">
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
