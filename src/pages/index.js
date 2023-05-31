import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import SectionFirst from '../components/Section-First'
import SectionBenefits from '../components/Section-Benefits'
import SectionSlide from '../components/Section-Slide'
import SectionDescription from '../components/Section-Description'
import SectionSlideText from '../components/Section-SlideText'
import SectionFeyFeatures from "../components/Section-KeyFeatures"
import SectionPriority from "../components/Section-Priority"
import SectionCard1 from "../components/Section-Card1"
import SectionCard2 from "../components/Section-Card2"
import SectionCard3 from "../components/Section-Card3"
import FaqAccordion from "../components/FaqAccordion"
import SpecialOfferModal from "../components/SpecialOfferModal"
import PopUpFooter from "../components/PopUpFooter"
import FormOrder from "../components/FormOrder"

import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row, Button, Collapse, Modal } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import "../styles/main.scss"


import { useState } from 'react';

export const listProducts = [
  {
    id: 1,
    image: '../images/cards/card-1.png',
    title: "Buy 2, Get 1 FREE",
    price: 75.99
  },
  {
    id: 2,
    image: '../images/cards/card-2.png',
    title: "Buy 1, Get 1 for 50% OFF",
    price: 56.99
  },
  {
    id: 3,
    image: '../images/cards/card-3.png',
    title: "Hale Breathing",
    price: 29.99
  },
  {
    id: 4,
    image: '../images/hale-modal.png',
    title: "Hale Breathing",
    price: 26.99
  }
]

const IndexPage = () => {

  const [open, setOpen] = useState(false)

  const [check, setCheck] = useState(2)

  const [show, setShow] = useState(false)

  const [showSpecialOfferModal, setShowSpecialOfferModal] = useState(false)
  function selectCard(cardNumber) {
    setShowSpecialOfferModal(true)
    setCheck(cardNumber)
  }


  const [cart, setCart] = useState([])
  function addToCart(bonus) {
    let prodIdsToCart = [check]
    if (bonus) {
      prodIdsToCart.push(4)
    }
    setCart(prodIdsToCart.map(prodId => listProducts.find(p => p.id === prodId)))
    setShowSpecialOfferModal(false)
  }

  return (
    <Layout pageTitle="Home Page" cart={cart}>
      <Container fluid="xl" className="container-padding bg-white">

        {/* Breathe Better Through Your Nose Instantly */}
        <SectionFirst />

        <SectionBenefits />

        {/* Enjoy Full, Effortless Breaths Through Your Nose */}
        <SectionSlide />

        <section className="section-how-it-works">
          <Row>
            <Col md={4} xs={12} className="block-title">
              <h2 className="block_heading fw-bold text-uppercase position-relative">gently opens & supports</h2>
              <h2 className="block_title fw-bold">How It Works</h2>
            </Col>
            <Col md={8} xs={12} className="how-it-works_line">
              <p className="block-text">Hale is <strong>like a contact lens for your nose</strong>-it instantly opens up your nasal passages and is virtually undetectable to those around you. Unlike toxic medicines or sprays, Hale corrects the structure of your nose without the need for invasive surgery.</p>
              <p className="block-text">Hale was developed at Johns Hopkins Medical Center and was rigorously tested to provide maximum effectiveness, comfort, and discretion.</p>
              <p className="block-text"><strong>Start Breathing Better Today.</strong></p>
            </Col>
          </Row>
        </section>

        <section className="section-breathe-better">
          <Row >
            <Col xs={12} md={6} className="column-r">
              <iframe className="section_video" src="https://videos.sproutvideo.com/embed/a79eddb71f18e3c12e/1c8cdd6084fc9198?playerColor=28bbff&amp;bigPlayButton=false&amp;showControls=false&amp;volume=0&amp;volumeControl=false&amp;background=true&amp;transparent=true&amp;autoPlay=true&amp;loop=true&amp;scale=fill" width="608" height="456" frameBorder="0" allowFullScreen="" ></iframe>
            </Col>
            <Col xs={12} md={6} className="section_content">
              <h2 className="block_heading text-uppercase position-relative">open airways instantly</h2>
              <h2 className="block_title fw-bold">Breathe Better Than Ever!</h2>
              <p className="block-text mb-3 text-dark">Battling a nasal obstruction can make you feel like you’re breathing through a kinked straw. Imagine being able to unkink that straw – allowing you to take full, effortless breaths again. That’s exactly what Hale does for you!</p>
              <p className="block-text mb-3 text-dark">Better nose breathing can improve your life in more ways than you might think. Hale can help you stop snoring, improve sleep quality, improve your athletic performance and even enhance your mood.</p>
              <p className="block-text mb-0 text-dark"><strong>Life is good once you can finally breathe!</strong></p>
            </Col>
          </Row>
        </section>

        <section className="section-with-doctor">
          <Row>
            <Col xs={12} md={{ span: 6, order: 'last' }} className="column-l">
              <iframe className="section_video" src="https://videos.sproutvideo.com/embed/d39eddb71f1ee4c45a/8ef706cd0b5eb3b1?playerColor=28bbff&amp;showControls=false&amp;volume=1&amp;scale=fill" width="600" height="802" frameBorder="0" allowFullScreen=""></iframe>
            </Col>
            <Col xs={12} md={6} className="section_content">
              <h2 className="block_heading text-uppercase position-relative">proven safe & effective</h2>
              <h2 className="block_title fw-bold">Doctor Recommended & Backed By Science</h2>
              <p className="block-text mb-3 text-dark">Hale was inspired by Dr. Byrne’s experience in both the clinic and operating room while treating nasal obstruction over the past 20 years.</p>
              <p className="block-text mb-3 text-dark">Preliminary results from independent clinical trials have proven Hale to be 100% safe <strong>and more effective than nasal strips.</strong>In fact, Hale was even shown to be 95% as effective as full reconstructive surgery!</p>
              <p className="block-text mb-3 text-dark"><strong>Hale relieves symptoms caused by :</strong></p>
              <ul className="list">
                <li className="list-element">Nasal Valve Collapse</li>
                <li className="list-element">Deviated Septum</li>
                <li className="list-element">Airway Obstruction</li>
                <li className="list-element">Nasal Inflammation</li>
                <li className="list-element">And more</li>
              </ul>
              <a className="button-link text-dark text-center fw-bold text-uppercase text-decoration-none d-inline-block rounded-2 border-none" href="#cards">Order Hale Breathing Now</a>
            </Col>
          </Row>
        </section>

        {/* Discreet & Comfortable To Wear Around The Clock */}
        <SectionDescription />

        {/* Here's Why People Love Hale */}
        <SectionSlideText />


        <section className="section-steps text-center">
          <h2 className="block_title fw-bold">Better Breathing Is Seconds Away</h2>
          <h2 className="section-slide-text fw-normal">Hale Is Easy To Use</h2>
          <Row className="mx-0 ">
            <Col xs={12} md={4} className="px-0 position-relative"><StaticImage src='../images/steps/step-1.jpg' alt='photo' className="img-bright"></StaticImage>
              <div className="text-group text-center">
                <h2 className="block_heading text-uppercase position-relative text-white">step 1</h2>
                <p className="text-white position-relative fw-bold">Choose Your Size</p>
              </div>
            </Col>
            <Col xs={12} md={4} className="px-0 position-relative"><StaticImage src='../images/steps/step-2.jpg' alt='photo' className="img-bright"></StaticImage>
              <div className="text-group text-center ">
                <h2 className="block_heading text-uppercase position-relative text-white">step 2</h2>
                <p className="text-white position-relative fw-bold">Insert Hale</p>
              </div>
            </Col>
            <Col xs={12} md={4} className="px-0 position-relative"><StaticImage src='../images/steps/step-3.jpg' alt='photo' className="img-bright"></StaticImage>
              <div className="text-group text-center">
                <h2 className="block_heading text-uppercase position-relative text-white">step 3</h2>
                <p className="text-white position-relative fw-bold">Breathe Easy!</p>
              </div>
            </Col>
          </Row>
        </section>

        {/* Designed For Crystal Clear Breathing */}
        <SectionFeyFeatures />

        <section className="section-inventor">
          <Row>
            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
              <StaticImage src='../images/Patrick-Byrne.png' alt="photo Patrick Byrne"></StaticImage>
            </Col>
            <Col xs={12} md={6}>
              <h2 className="block_title fw-bolder section-inventor-title">Inventor Patrick Byrne, MD, FACS, MBA</h2>
              <p className="block-text">After two decades of diagnosing and treating nasal obstruction patients, Dr. Patrick Byrne was inspired to create a better solution for his patients.</p>
              <p className="block-text">As the Chair of Cleveland Clinic’s Head and Neck Institute and the Director of the Facial Plastic and Reconstructive Surgery Division at Johns Hopkins, Dr. Byrne had access to virtually any resource he needed. This allowed him to develop a “dream product” that both solved the primary problem while fulfilling all the wishes his patients had mentioned throughout his career.</p>
              <p className="block-text">After years of development and proven success in independent clinical trials, Hale – the most effective, comfortable, discreet, and affordable way to improve your nasal breathing – was born.</p>
            </Col>
          </Row>
        </section>

        {/* Your Satisfaction Is Our Priority */}
        <SectionPriority />

        <section className="main-offer" id="cards">
          <StaticImage className='main-logo text-center main-logo-offer' src="../images/main-logo.svg" alt="logo"  ></StaticImage>
          <h2 className="offer-title text-center fw-bold">Experience the Power of Clear Breathing with Hale!</h2>
          <p className="offer-heading text-center">Order now and save</p>
          <div className="offer-bundles">
            <SpecialOfferModal
              addToCart={addToCart}
              show={showSpecialOfferModal} onHide={() => setShowSpecialOfferModal(false)} />
            <Row>
              <Col xs={12} md={4} className="card-indent" onClick={() => selectCard(1)}>
                <SectionCard1 checked={check === 1} />
              </Col>
              <Col xs={12} md={4} className="card-indent" onClick={() => selectCard(2)}>
                <SectionCard2 checked={check === 2} />
              </Col>
              <Col xs={12} md={4} className="card-indent" onClick={() => selectCard(3)}>
                <SectionCard3 checked={check === 3} />
              </Col>
            </Row>
            <div className="btn-link-after-cards">
              <a className="button-link text-dark text-center fw-bold text-uppercase text-decoration-none d-inline-block rounded-2 border-none w-100" onClick={() => setShowSpecialOfferModal(true)}>Order Now</a>
            </div>
          </div>
        </section>

        <section className={cart.length ? "d-none" : "footer-badges"}>
          <div className="icons-group d-flex justify-content-center align-items-center">
            <div className="img-footer "><StaticImage src='../images/footer/guarantee-badges-sprite.webp' alt="logo" className="img-30-day"></StaticImage></div>
            <div className="img-footer"><StaticImage src='../images/footer/payment-badge-american-express.svg' alt="logo" className="img-footer-size1"></StaticImage></div>
            <div className="img-footer"><StaticImage src='../images/footer/payment-badge-discover.svg' alt="logo" className="img-footer-size1"></StaticImage></div>
            <div className="img-footer"><StaticImage src='../images/footer/payment-badge-mastercard.svg' alt="logo" className="img-footer-size1"></StaticImage></div>
            <div className="img-footer"><StaticImage src='../images/footer/payment-badge-visa.svg' alt="logo" className="img-footer-size1"></StaticImage></div>
            <div className="img-footer"><StaticImage src='../images/footer/payment-badge-paypal.svg' alt="logo" className="img-footer-size2"></StaticImage></div>
            <div className="img-footer"><StaticImage src='../images/footer/payment-badge-stripe-secure.svg' alt="logo" className="img-footer-size3"></StaticImage></div>
          </div>
          <div className="mobile-only text-center"><h4 className="text-center fw-bold">30 Day Money Back Guarantee!</h4></div>
        </section>

        <section className={cart.length ? "d-none" : "section-faq text-center"}>
          <div className="display-faq" >
            <h3 ><strong>Have a Question</strong><span className="title-faq text-white fw-bold text-decoration-underline" onClick={() => setOpen(!open)}>See Our FAQs</span></h3>
          </div>
          <Collapse in={open}>
            <div>
              <FaqAccordion />
            </div>
          </Collapse>

          <div className="mobile-faqs"><Button variant="light" className="button-mobile-faq bg-white" onClick={() => setShow(true)} >Click HERE to View FAQs >></Button>
          </div>
          <Modal show={show} onHide={() => setShow(false)} className="mobile-modal">
            <Modal.Header closeButton className="mobile-faqs-header"></Modal.Header>
            <Modal.Title className="mobile-faqs-title text-center fw-bold">Frequently Asked Questions</Modal.Title>
            <Modal.Body>
              <FaqAccordion />
            </Modal.Body>
          </Modal>
        </section>
        <FormOrder
          cart={cart}
        />
      </Container>
      <PopUpFooter />

    </Layout >
  )
}

export default IndexPage

export const Head = () => <Seo title='Home Page' />
