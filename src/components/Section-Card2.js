import * as React from "react"
import { Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form'


const SectionCard2 = ({ checked }) => {

    const [open, setOpen] = useState(false)

    function opened(event) {
        event.stopPropagation()
        setOpen(!open)
    }

    return (
        <div className={checked ? "card-bundle selected-card" : "card-bundle"} >
            <Row>
                <Col xs={5} md={12} className="check-card">
                    <div className="card-header w-100 text-center position-absolute bg-danger">
                        <Form.Check checked={checked} type="checkbox" className="input-checkbox position-absolute" disabled />
                        <span className="card-header-title text-white" >Most Popular</span>
                    </div>
                    <div className="bundle-container text-center d-flex h-100">
                        <div className="card-title">
                            <span><strong>2</strong> – Hale Breathing Kits</span>
                        </div>
                        <div className="card-img"><StaticImage src='../images/cards/card-2.png' alt='photo'></StaticImage></div>
                    </div >
                </Col>
                <Col xs={7} md={12} className="text-center card-body">
                    <span className="promo-text fw-bold">Buy 1, Get 1 50% OFF</span>
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
                    <div className="retail-price text-decoration-line-through"><span>Retail 75.98 USD</span></div>
                    <div className="total-text"><span>56.99 USD</span></div>
                    <div className="pricing-text fw-bold"><span>(Save 18.99 USD)</span></div>
                    <div className="btn-link-order">
                        <a className="button-link text-dark text-center fw-bold text-uppercase text-decoration-none d-inline-block rounded-2 border-none w-100">Order Now</a>
                    </div>

                </Col>
            </Row>
        </div >
    )
}

export default SectionCard2