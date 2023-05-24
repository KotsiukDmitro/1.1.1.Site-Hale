import * as React from "react"
import { Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { useEffect, useState } from "react"


const PopUpFooter = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {

        const topPosition = window.scrollY
        const bottomPosition = Math.ceil(window.innerHeight + window.scrollY)
        const { top: cardsPosition } = document.getElementById('cards').getBoundingClientRect()
        if (topPosition > 100 && bottomPosition < (cardsPosition + window.pageYOffset)) {
            setIsVisible(true)
            return
        }
        setIsVisible(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={isVisible ? "show-footer" : 'show-footer show-footer--hidden'}>
            <Row className="show-footer-inner">
                <Col md={8} className="d-none d-md-flex">
                    <div><StaticImage className='main-logo' src="../images/main-logo.svg" alt="logo"></StaticImage></div>
                    <div className="msg"><span>Breathe Better Through Your Nose Instantly</span></div>
                </Col>
                <Col xs={12} md={4} className="m-auto">
                    <div className="button-link-footer"><a className="button-link text-dark text-center fw-bold text-uppercase text-decoration-none d-inline-block rounded-2 border-none w-100" href="#cards">Order Now</a></div>
                </Col>
            </Row>
        </div>
    )
}

export default PopUpFooter