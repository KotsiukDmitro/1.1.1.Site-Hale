import * as React from "react"
import { Col, Row, Modal, Button } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"


const SpecialOfferModal = ({ show, onHide, addToCart }) => {

    return (
        <Modal show={show} onHide={onHide} className="mobile-modal special-offer-modal">
            <Modal.Header closeButton className="special-offer-modal-header"></Modal.Header>
            <Modal.Header closeButton className="special-offer-modal-header-mobile"><span className="header-mobile-title m-auto">Special Offer!</span></Modal.Header>
            <Modal.Body>
                <Row>
                    <Col xs={12} md={5} className="text-center">
                        <h3 className="special-offer-modal-title">Special Offer!</h3>
                        <div><StaticImage src='../images/hale-modal.png' alt='photo'></StaticImage></div>
                    </Col>
                    <Col xs={12} md={7} className="text-center">
                        <div className="special-offer-modal-content">
                            <h3 className="special-offer-modal-content_title"><strong>Breathing Easy is the Perfect Gift:</strong></h3>
                            <p className="special-offer-modal-description fw-bold">Buy a Hale Breathing Aid as a Gift for 30% Off!</p>
                            <span className="special-price">Only $26.99</span>
                            <div className="button-link-modal"><a className="button-link text-dark text-center fw-bold text-uppercase text-decoration-none d-inline-block rounded-2 border-none w-100" onClick={() => addToCart(true)} >claim your disconected gift now</a></div>
                            <Button className="cancel-upsell link bg-white" onClick={() => addToCart(false)}>No Thank You</Button>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>

    )
}

export default SpecialOfferModal