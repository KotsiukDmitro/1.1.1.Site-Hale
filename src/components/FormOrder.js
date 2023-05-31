import * as React from "react"
import { Row, Col, Form, FloatingLabel, Button, OverlayTrigger, Popover, Accordion } from "react-bootstrap"
import { useState, useMemo } from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"


const FormOrder = (props) => {

    const [validated, setValidated] = useState(false)

    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                In case we need contact you about your order
            </Popover.Body>
        </Popover>
    );

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }

    const total = useMemo(
        () => props.cart.reduce((prev, curr) => {
            const totalPrice = curr.price * 100
            return (prev + totalPrice)
        }, 0) / 100, [props.cart])


    return (
        <div className={props.cart.length ? "section-checkout" : "d-none"} >
            <Row>
                <Col xs={12} lg={7}>
                    <Form className="checkout-form bg-white" noValidate validated={validated} onSubmit={handleSubmit}>
                        <h1 className="title fw-bold">Complete your order</h1>
                        <div className="button-PayPal">
                            <a className="button-link text-dark text-center fw-bold text-uppercase text-decoration-none d-inline-block rounded-2 border-none w-100">PayPal</a>
                        </div>
                        <div className="or-pay-with text-center position-relative">
                            <p>Or Pay With Credit Card</p>
                        </div>
                        <h2 className="shipping">Shipping Information</h2>
                        <Row>
                            <Form.Group as={Col} xs="12" controlId="validationCustom01" className="valid-input">
                                <FloatingLabel label="Email">
                                    <Form.Control type="email" id="email" required placeholder="Email" className='input-form' />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} xs="6" controlId="validationCustom01" className="py-1 pl-0">
                                <FloatingLabel label="First Name">
                                    <Form.Control type="text" id="FirstName" required placeholder="First Name" className='input-form' />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} xs="6" controlId="validationCustom02" className="py-1 pr-0">
                                <FloatingLabel label="Last Name">
                                    <Form.Control type="text" id="LastName" required placeholder="Last Name" className='input-form' />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} xs="6" controlId="validationCustom03" className="py-1 pl-0">
                                <FloatingLabel label="Address">
                                    <Form.Control type="text" id="Address" required placeholder="Address" className='input-form' />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} xs="6" controlId="validationCustom04" className="py-1 pr-0">
                                <FloatingLabel label="Apt/Suite(optional)">
                                    <Form.Control type="text" id="Apt" placeholder="Apt/Suite(optional)" className='input-form' />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} xs="12" controlId="validationCustom05" className="valid">
                                <FloatingLabel label="City">
                                    <Form.Control type="text" id="City" required placeholder="City" className='input-form' />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="4" xs="12" controlId="validationCustom06" className="py-1 pl-0 pr-1">
                                <FloatingLabel label="Country" className="input-form-label select-line">
                                    <Form.Select aria-label="Default select example" className='input-form-select'>
                                        <option>United State</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="4" xs="6" controlId="validationCustom07" className="py-1 pl-1 pr-1">
                                <FloatingLabel label="State" className="input-form-label select-line">
                                    <Form.Select className='input-form-select'>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="4" xs="6" controlId="validationCustom08" className="py-1 pl-1 pr-0">
                                <FloatingLabel label="Postal code">
                                    <Form.Control type="text" id="Postal" required placeholder="Postal code" className='input-form' />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} xs="12" controlId="validationCustom09" className="valid position-relative">
                                <FloatingLabel label="Phone (optional)">
                                    <Form.Control type="text" id="Phone" required placeholder="Phone (optional)" className='input-form' />
                                </FloatingLabel>
                                <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                    <a className="position-absolute image-question bg-white"><StaticImage src="../images/checkout-question.svg" ></StaticImage></a>
                                </OverlayTrigger>
                            </Form.Group>
                        </Row>
                        <div className="button-order-next">
                            <Button type="submit" className="button-link text-dark text-center fw-bold text-uppercase text-decoration-none d-inline-block rounded-2 border-none w-100">NEXT</Button>
                        </div>
                    </Form>
                </Col>

                <Col lg={5}>
                    <div className="details h-100 ">
                        <div className="content">
                            {props.cart.map(item => {
                                return (
                                    item.id === 4
                                        ? <div className="product d-flex" key={item.id}>
                                            <div className="product-image bg-white">
                                                <GatsbyImage image={getImage(item.image)} alt=''></GatsbyImage>
                                                <span className="amount-image fw-bold text-center text-white position-absolute rounded-circle">1</span>
                                            </div>
                                            <div className="product-name"><span className="fw-bold">{item.title}</span></div>
                                            <div className="price"><span>{item.price}USD</span></div>
                                        </div>
                                        : <div className="product d-flex" key={item.id}>
                                            <div className="product-image bg-white">
                                                <GatsbyImage image={getImage(item.image)} alt=''></GatsbyImage>
                                            </div>
                                            <div className="product-name"><span className="fw-bold">{item.title}</span></div>
                                            <div className="price"><span>{item.price}USD</span></div>
                                        </div>
                                )
                            })}
                            <div className="product">
                                <div className="pricing d-flex justify-content-between mb-3"><span>Tax</span><span className="fw-bold">0.00USD</span></div>
                                <div className="pricing d-flex justify-content-between"><span>Shipping</span><span className="fw-bold">0.00USD</span></div>
                            </div>
                            <div className="pricing d-flex justify-content-between font-weight-normal"><span>Total</span><span className="total fw-bold">{total}USD</span></div>
                        </div>
                    </div>
                </Col>

                <Col xs={12}>
                    <div className={props.cart.length ? "details-mobile h-100" : "d-none"}>
                        <Accordion className="mobile-accordion">
                            <Accordion.Header >
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <div className="order-mobile-image"><StaticImage src="../images/checkout-cart.svg" alt="cart"></StaticImage></div>
                                        <span className="order-mobile-title">Order Summary</span>
                                        <div className="order-mobile-image-arrow"><StaticImage src="../images/checkout-arrow.svg" alt="arrow" className="img-arrow"></StaticImage></div>
                                    </div>

                                    <span className="order-mobile-price">{total}USD</span>
                                </div>
                            </Accordion.Header>

                            <Accordion.Body className="mobile-accordion-body">
                                <div className="content">
                                    {props.cart.map(item => {
                                        return (
                                            item.id === 4
                                                ? <div className="product d-flex" key={item.id}>
                                                    <div className="product-image bg-white">
                                                        <GatsbyImage image={getImage(item.image)} alt=''></GatsbyImage>
                                                        {/* <span className="amount-image fw-bold text-center text-white position-absolute rounded-circle">1</span> */}
                                                    </div>
                                                    <div className="product-name"><span className="fw-bold">{item.title}</span></div>
                                                    <div className="price"><span>{item.price}USD</span></div>
                                                </div>
                                                : <div className="product d-flex" key={item.id}>
                                                    <div className="product-image bg-white">
                                                        <GatsbyImage image={getImage(item.image)} alt=''></GatsbyImage>
                                                    </div>
                                                    <div className="product-name"><span className="fw-bold">{item.title}</span></div>
                                                    <div className="price"><span>{item.price}USD</span></div>
                                                </div>
                                        )
                                    })}
                                    <div className="product">
                                        <div className="pricing d-flex justify-content-between mb-3"><span>Tax</span><span className="fw-bold">0.00USD</span></div>
                                        <div className="pricing d-flex justify-content-between"><span>Shipping</span><span className="fw-bold">0.00USD</span></div>
                                    </div>
                                    <div className="pricing d-flex justify-content-between font-weight-normal"><span>Total</span><span className="total fw-bold">{total}USD</span></div>
                                </div>
                            </Accordion.Body>
                        </Accordion >
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FormOrder

