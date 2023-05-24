import * as React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/main.scss"
import { Container } from 'react-bootstrap';

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <div>
            <Container fluid="xl" className="container-padding">
                <header className='bg-white' >
                    <Container className='d-flex justify-content-center'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <StaticImage className='main-logo' src="../images/main-logo.svg" alt="logo"  ></StaticImage>
                            </div>
                        </div>
                    </Container>
                </header>
            </Container>
            <main className='main'>
                {children}
            </main>
            <Container>
                <footer className='text-center'>
                    <div className="disclaimer ">
                        <p>These products are not intended to diagnose, prevent, treat, or cure any disease. This information does not constitute medical advice and should not be relied upon as such. Consult with your doctor before modifying your regular medical regime.</p>
                    </div>

                    <Container className='giddy-footer-container'>
                        <ul className='links text-center'>
                            <li className='link d-inline'><span data-toggle="modal" data-target="#support">Support</span></li>
                            <li className='link d-inline'><span data-toggle="modal" data-target="#returns">Returns</span></li>
                            {/* <li className='link hidden d-none d-inline'><span data-toggle="modal" data-target="#impressum">Impressum</span></li> */}
                            <li className='link d-inline'><span data-toggle="modal" data-target="#privacy">Privacy</span></li>
                            <li className='link d-inline'><span data-toggle="modal" data-target="#terms">Terms</span></li>
                        </ul>
                        <div className='footer-disclaimer'>
                            <em>
                                <strong className='about fw-bolder fst-italic'>About This Site</strong>
                            </em>
                            <p className='text'>Purchasing here is buying directly from Hale Breathing, the inventors of this innovative solution. Hale Breathing has partnered with GiddyUp, a curator of innovative products, to present a special offer that you won’t find anywhere else. To support these inventors, please consider buying your Hale Breathing on this site, rather than 3rd-Party retailers.</p>
                        </div>
                        <span className='copyright'>Copyright © 2023 GiddyUp. All Rights Reserved.</span>
                    </Container>
                </footer>
            </Container>
        </div>
    )
}
export default Layout