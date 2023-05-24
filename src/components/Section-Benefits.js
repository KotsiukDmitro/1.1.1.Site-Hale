import * as React from "react"
import { Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"


const SectionBenefits = () => {
    return (
        <section className="section-benefits">
            <Row>
                <Col xs={6} md={3}>
                    <div className="item d-flex align-items-center">
                        <StaticImage className="image" objectFit="contain" src="../images/icons/icon-fda-01.svg" alt="logo" />
                        <div className="item-content">
                            <p className="item-title fw-bold text-uppercase">fda</p>
                            <p className="item-text">Registered & Compliant</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div className="item d-flex align-items-center">
                        <div className="vr line"></div>
                        <StaticImage className="image" objectFit="contain" src="../images/icons/icon-patented.svg" alt="logo" />
                        <div className="item-content">
                            <p className="item-title fw-bold text-uppercase">patented</p>
                            <p className="item-text">Functionality</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div className="item d-flex align-items-center">
                        <div className="vr line"></div>
                        <StaticImage className="image image-AW" objectFit="contain" src="../images/icons/icon-ribbon-2.webp" alt="logo" />
                        <div className="item-content">
                            <p className="item-title fw-bold text-uppercase">award-winning</p>
                            <p className="item-text">MIT & Johns Hopkins</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div className="item d-flex align-items-center">
                        <div className="vr line"></div>
                        <StaticImage className="image" objectFit="contain" src="../images/icons/icon-savings.svg" alt="logo" />
                        <div className="item-content">
                            <p className="item-title fw-bold text-uppercase">30 day</p>
                            <p className="item-text">Money Back Guarantee</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>

    )
}
export default SectionBenefits