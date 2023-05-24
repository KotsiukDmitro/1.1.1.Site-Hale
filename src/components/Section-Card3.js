import * as React from "react"
import { Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form'


const SectionCard3 = ({ checked }) => {

    const [open, setOpen] = useState(false)

    function opened(event) {
        event.stopPropagation()
        setOpen(!open)
    }

    return (

        <div className={checked ? "card-bundle selected-card" : "card-bundle"}>
            <Row>
                <Col xs={5} md={12}>
                    <Form.Check type="checkbox" checked={checked} className="input-checkbox position-absolute" disabled />
                    <div className="bundle-container text-center d-flex h-100">
                        <div className="card-title">
                            <span><strong>1</strong> – Hale Breathing Kit</span>
                        </div>
                        <div className="card-img"><StaticImage src='../images/cards/card-3.png' alt='photo'></StaticImage></div>
                    </div>

                </Col>
                <Col xs={7} md={12} className="text-center card-body">
                    <span className="promo-text fw-bold promo-text-card-3">Buy 1</span>
                    <br></br>
                    <Button variant="link" className={open ? "includes-link includes-link--active " : "includes-link"} onClick={(event) => opened(event)} aria-controls="collapse-text" aria-expanded={open}>What's Includes?</Button>
                    <Collapse in={open}>
                        <div className="text-center">
                            <span><strong className="card-collapse-title">Each Kit Contains:</strong></span>
                            <ul className="card-collapse-list">
                                <li>- Trio of Hale aids in S/M/L</li>
                                <li>- Travel case with mirror</li>
                                <li>- Insertion tool</li>
                                <li>- Removal tool</li>
                                <li>- Microfiber cloth</li>
                            </ul>
                        </div>
                    </Collapse>
                    <div className="retail-price text-decoration-line-through"><span>Retail 37.99 USD</span></div>
                    <div className="total-text"><span>29.99 USD</span></div>
                    <div className="pricing-text fw-bold"><span>(Save 8.00 USD)</span></div>
                    <div className="btn-link-order">
                        <a className="button-link text-dark text-center fw-bold text-uppercase text-decoration-none d-inline-block rounded-2 border-none w-100">Order Now</a>
                    </div>

                </Col>
            </Row>
        </div>

    )
}

export default SectionCard3
