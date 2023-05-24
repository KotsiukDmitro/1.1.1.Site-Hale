import * as React from "react"
import { Col, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"


const SectionFirst = () => {
    return (
        <section className="section-first ">
            <Row >
                <Col className="section-first-col" xs={12} md={6}>
                    <h2 className="heading fw-bold">Breathe Better Through Your Nose <span className="fst-italic">Instantly</span></h2>
                    <p className="section-first-text">Hale Breathing Aid opens your nasal passage from the inside out. It fits comfortably inside your nose and remains hidden to those around you so you can <strong>breathe better anytime, anywhere.</strong></p>
                    <a className="button-link text-dark text-center fw-bold text-uppercase text-decoration-none d-inline-block rounded-2 border-none" href="#cards">Order Hale Breathing Now</a>
                    <div className="section-icons" >
                        <Row>
                            <Col xs={12} md={3} className="inner">
                                <span className="inner-span d-block text-uppercase fw-bold">As seen on:</span>
                            </Col>
                            <Col xs={3} md={2} className="inner">
                                <div className="image">
                                    <a className="image-link" href="https://www.forbes.com/sites/robinseatonjefferson/2018/06/18/have-johns-hopkins-biomedical-engineering-students-solved-the-nuisance-of-nasal-congestion/?sh=584cd18a1aab" target="_blank" >
                                        <StaticImage objectFit="contain" src="../images/forbes-logo-01.svg" alt="logo" />
                                    </a>
                                </div>
                            </Col>
                            <Col xs={3} md={2} className="inner">
                                <div className="image">
                                    <a className="image-link" href="https://techcrunch.com/2018/06/14/assistent-offers-an-anti-snoring-device-you-stick-in-your-nose/" target="_blank">
                                        <StaticImage objectFit="contain" src="../images/techcrunch-logo-01.svg" alt="logo" />
                                    </a>
                                </div>
                            </Col>
                            <Col xs={3} md={2} className="inner">
                                <div className="image">
                                    <a className="image-link" href="https://abcnews.go.com/Health/tiny-device-people-suffer-chronic-breathing-problems/story?id=60678484" target="_blank">
                                        <StaticImage objectFit="contain " src="../images/abc-logo-01.svg" alt="logo" />
                                    </a>
                                </div>
                            </Col>
                            <Col xs={3} md={3} className="inner">
                                <div className="image">
                                    <a className="image-link" href="https://cbid.bme.jhu.edu/news-events/2018-design-competition/" target="_blank">
                                        <StaticImage objectFit="contain" src="../images/johns-hopkins-university-logo-02.svg" alt="logo" />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                < Col xs={12} md={6}>

                    <div className="video-container ">
                        <div className="video-wrapper">
                            <iframe id="v-intro_video" title="Hale Breathing | Nasal Breathing Aid" src="https://videos.sproutvideo.com/embed/ac9edcbd1a11e4c625/8347299398209079?playerColor=28bbff&amp;transparent=true&amp;volumeControl=0" width="540" height="300" frameBorder="0" allowFullScreen="" loading="lazy"></iframe>

                            <iframe id="v-intro_video-preroll" title="Hale Breathing | Nasal Breathing Aid" data-playing="true" src="https://videos.sproutvideo.com/embed/449eddb41b1de2cdcd/c70b44eae7038ec7?playerColor=28bbff&amp;transparent=true&amp;background=true&amp;autoPlay=true&amp;loop=true&amp;volume=0" width="540" height="300" frameBorder="0" allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>

                </Col>
            </Row>
        </section>
    )
}
export default SectionFirst