import * as React from "react"
import { Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"


const SectionFeyFeatures = () => {
    return (
        <section className="section-ket-features">
            <Row>
                <Col xs={12} md={6} className="section-ket-features-img d-flex justify-content-center">
                    <StaticImage src='../images/hale.png' alt='photo'></StaticImage>
                </Col>
                <Col xs={12} md={6} className="section-ket-features-content">
                    <h2 className="block_heading text-uppercase position-relative">key features</h2>
                    <h2 className="block_title fw-bold ">Designed For Crystal Clear Breathing</h2>
                    <Row>
                        <Col xs={12} md={6} className="block-icon d-flex justify-content-center align-items-center">
                            <div className="icon-size">
                                <StaticImage src='../images/img/icon-clock.svg' alt='icon' className="icon "></StaticImage>
                            </div>
                            <span className="text-description"><strong>Extended Use-</strong>designed for round-the-clock use</span>
                        </Col>
                        <Col xs={12} md={6} className="block-icon d-flex justify-content-center align-items-center">
                            <div className="icon-size">
                                <StaticImage src='../images/img/icon-briefcase.svg' alt='icon' className="icon "></StaticImage>
                            </div>
                            <span className="text-description"><strong>Compact Case-</strong>safely stores Hale to keep it clean on the go</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} className="block-icon d-flex justify-content-center align-items-center">
                            <div className="icon-size">
                                <StaticImage src='../images/img/icon-nose.svg' alt='icon' className="icon " objectFit="contain"></StaticImage>
                            </div>
                            <span className="text-description"><strong>Ergonomic Materials-</strong>extremely comfortable and easy to clean</span>
                        </Col>
                        <Col xs={12} md={6} className="block-icon d-flex justify-content-center align-items-center">
                            <div className="icon-size">
                                <StaticImage src='../images/img/icon-wrench.svg' alt='icon' className="icon " objectFit="contain"></StaticImage>
                            </div>
                            <span className="text-description"><strong>Insertion & Removal Tools-</strong>optional tools make installing and removing Hale a breeze</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export default SectionFeyFeatures
