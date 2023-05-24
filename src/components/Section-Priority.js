import * as React from "react"
import { Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"


const SectionPriority = () => {
    return (
        <section className="section-priority text-center">
            <h2 className="priority-title fw-bold">Your Satisfaction Is Our Priority</h2>
            <p className="priority-heading lh-base">Try Hale risk-free and if you don’t love it, we’ll fix it.</p>
            <Row className="priority-content">
                <Col xs={12} md={4} className="mt-4">
                    <div className="card-priority text-center bg-white position-relative">
                        <div className="caption-icon-size"><StaticImage src='../images/icons/icon-savings.svg' alt='icon' className="icon " objectFit="contain"></StaticImage></div>
                        <div className="caption">
                            <p className="caption-title">30-DAY MONEY BACK WARRANTY</p>
                            <p className="caption-text">If for any reason you’re not 100% satisfied with your Hale, you can easily return it, hassle-free!</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4} className="mt-4">
                    <div className="card-priority text-center">
                        <div className="caption-icon-size"><StaticImage src='../images/icons/icon-round-usa.png' alt='icon' className="icon " objectFit="contain"></StaticImage></div>
                        <div className="caption">
                            <p className="caption-title">AMERICAN-OWNED COMPANY</p>
                            <p className="caption-text">Hale is owned and operated in the beautiful city of Boston, Massachusetts</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4} className="mt-4">
                    <div className="card-priority text-center">
                        <div className="caption-icon-size"><StaticImage src='../images/icons/icon-truck.png' alt='icon' className="icon " objectFit="contain"></StaticImage></div>
                        <div className="caption">
                            <p className="caption-title">FREE, FAST SHIPPING IN THE USA</p>
                            <p className="caption-text">Our goal is to get your order to you as quickly as possible. Free shipping on qualifying offers only.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4} className="mt-4">
                    <div className="card-priority text-center">
                        <div className="caption-icon-size"><StaticImage src='../images/icons/icon-rating-02.svg' alt='icon' className="icon " objectFit="contain"></StaticImage></div>
                        <div className="caption">
                            <p className="caption-title">QUALITY PROMISE</p>
                            <p className="caption-text">We control every step of the process to ensure a safe and high-quality product.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4} className="mt-4">
                    <div className="card-priority text-center">
                        <div className="caption-icon-size"><StaticImage src='../images/icons/icon-chat.svg' alt='icon' className="icon " objectFit="contain"></StaticImage></div>
                        <div className="caption">
                            <p className="caption-title">WORLD-CLASS CUSTOMER SUPPORT</p>
                            <p className="caption-text">They're real humans, they're quick, and they actually like talking to you.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4} className="mt-4">
                    <div className="card-priority text-center">
                        <div className="caption-icon-size"><StaticImage src='../images/icons/icon-ribbon-2.webp' alt='icon' className="icon " objectFit="contain"></StaticImage></div>
                        <div className="caption">
                            <p className="caption-title">MISSION-DRIVEN</p>
                            <p className="caption-text">Our mission is to help millions of people breathe easier.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <a className="button-link text-dark text-center fw-bold text-uppercase text-decoration-none d-inline-block rounded-2 border-none" href="#cards">Order Hale Breathing Now</a>
        </section>
    )
}

export default SectionPriority