import * as React from "react"
import { Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"



const SectionDescription = () => {
    return (
        <section className="section-description-product">
            <h2 className="block_title fw-bold text-center fw-bold ">Discreet & Comfortable To Wear Around The Clock</h2>
            <Row className="section-description-product-container ">
                <Col xs={12} md={4}>
                    <StaticImage src='../images/photo/photo-1.webp' alt='photo'></StaticImage>
                    <div className="pt-3">
                        <span className="text-dark text-uppercase fw-bold pt-3">All-natural & 100% drug-free</span>
                        <p className="block-text">Until recently, your only options to fix nasal airway obstruction were expensive surgeries or addictive sprays. The ingenious design of Hale is extremely effective without the need for toxic medicines or painful surgeries.</p>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <StaticImage src='../images/photo/photo-2.jpg' alt='photo'></StaticImage>
                    <div className="pt-3">
                        <span className="text-dark text-uppercase fw-bold pt-3">A personalized fit</span>
                        <p className="block-text">The Hale Breathing Kit includes 3 sizes so you can find a perfect fit for optimal breathing and comfort with any nose size. The flexible materials adjust and conform to your unique nasal anatomy.</p>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <StaticImage src='../images/photo/photo-3.jpg' alt='photo'></StaticImage>
                    <div className="pt-3">
                        <span className="text-dark text-uppercase fw-bold pt-3">Virtually undetectable</span>
                        <p className="block-text">Hale was designed to balance exceptional airflow improvement with minimal aesthetic change. The small clear band makes Hale virtually undetectable to others around you so you can wear it confidently day or night.</p>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default SectionDescription