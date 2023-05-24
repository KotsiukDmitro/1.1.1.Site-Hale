import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import CheckCircle from "../components/icons/CheckCircle"

const SectionSlideText = () => {
    return (
        <section className="slide-with-recommendations">
            <h2 className="slide-with-rec-title text-center fw-bold ">Here's Why People Love Hale</h2>
            <Swiper modules={[Navigation, Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    320: {
                        slidesPerView: 1
                    },
                }}

                pagination={{
                    clickable: true,
                    el: '.swiper-custom-pagination-slide'
                }} loop={true} className="slide">
                <SwiperSlide className="h-auto">
                    <div className="slide-card h-100 d-flex flex-column">
                        <a className="slide-card-link text-decoration-none fw-bold" target="_blank" href="https://www.amazon.com/gp/customer-reviews/R2BLQSYP53OQRL/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B095966T41">Life Changing</a>
                        <p className="block-text">"I've tried a number of nasal devices before, I'm always trying new ones, I think these guys got it right. My breathing is almost perfect when I wear it. The medium fits my nose well, I find it extremely comfortable. It’s very easy to use."</p>
                        <div className="rating d-flex justify-content-between">
                            <div className="user">
                                <div className="reviewer-name fw-bold">Joe L.</div>
                                <CheckCircle color="#37a54c" width={12} />
                                <span className="icon-text fw-lighter">Verified Buyer</span>
                            </div>
                            <div className="stars">
                                <StaticImage width={75} alt="rating" src="https://gethalebreathing.io/wp-content/themes/giddyupio-v3/images/five-stars.jpg"></StaticImage>
                                <div className="star-count">5.0 star rating</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-auto">
                    <div className="slide-card h-100 d-flex flex-column">
                        <a className="slide-card-link text-decoration-none fw-bold" target="_blank" href="https://www.amazon.com/gp/customer-reviews/R2BLQSYP53OQRL/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B095966T41">I Can Finally Sleep</a>
                        <p className="block-text">"I have trouble sleeping when I can't breathe well. My daughter is in healthcare and suggested Hale since it was designed by doctors at Johns Hopkins. I definitely notice a difference and can breathe better. The large size is terrific for me, but I am a big guy, over 6 feet tall. I love how no one can tell I have it in my nose, even my wife who always nags me to look nice when we go out. Thanks Hale, Now I sleep better at night!"</p>
                        <div className="rating d-flex justify-content-between">
                            <div className="user ">
                                <div className="reviewer-name fw-bold">Ron B.</div>
                                <CheckCircle color="#37a54c" width={12} />
                                <span className="icon-text fw-lighter">Verified Buyer</span>
                            </div>
                            <div className="stars">
                                <StaticImage width={75} alt="rating" src="https://gethalebreathing.io/wp-content/themes/giddyupio-v3/images/five-stars.jpg"></StaticImage>
                                <div className="star-count">5.0 star rating</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-auto">
                    <div className="slide-card h-100 d-flex flex-column">
                        <a className="slide-card-link text-decoration-none fw-bold" target="_blank" href="https://www.amazon.com/gp/customer-reviews/R2BLQSYP53OQRL/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B095966T41">Makes My Workouts Way Easier</a>
                        <p className="block-text">"I've been wearing this while working out and it's pretty amazing how easy it is to breathe. I'm usually panting through my mouth but with this I can keep breathing through my nose. I was looking for something like this after hearing a podcast about how much healthier nasal breathing is than mouth breathing. I believe it, it honestly makes the workout way easier."</p>
                        <div className="rating d-flex justify-content-between">
                            <div className="user ">
                                <div className="reviewer-name fw-bold">Will A.</div>
                                <CheckCircle color="#37a54c" width={12} />
                                <span className="icon-text fw-lighter">Verified Buyer</span>
                            </div>
                            <div className="stars">
                                <StaticImage width={75} alt="rating" src="https://gethalebreathing.io/wp-content/themes/giddyupio-v3/images/four-stars.jpg"></StaticImage>
                                <div className="star-count">4.0 star rating</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-auto">
                    <div className="slide-card h-100 d-flex flex-column">
                        <a className="slide-card-link text-decoration-none fw-bold" target="_blank" href="https://www.amazon.com/gp/customer-reviews/R2BLQSYP53OQRL/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B095966T41">The Best I Have Ever Breathed</a>
                        <p className="block-text">"First of all I've never breathed so clearly through my nose. It's been a lifelong struggle. I've tried sprays, allergy pills, neti pot, and other nasal devices, but this opens up my nose like nothing else. I do want to mention it doesn't feel like a magical cloud, it feels like you have something in your nose, because you do. I've gotten so used to wearing it I have to squeeze my nose to remember if I'm wearing it sometimes. You'll be blown away by your breathing and once you get used to it, you'll love it. I do anyway."</p>
                        <div className="rating d-flex justify-content-between">
                            <div className="user ">
                                <div className="reviewer-name fw-bold">Mark W.</div>
                                <CheckCircle color="#37a54c" width={12} />
                                <span className="icon-text fw-lighter">Verified Buyer</span>
                            </div>
                            <div className="stars">
                                <StaticImage width={75} alt="rating" src="https://gethalebreathing.io/wp-content/themes/giddyupio-v3/images/five-stars.jpg"></StaticImage>
                                <div className="star-count">5.0 star rating</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-custom-pagination-slide text-center bg-white mt-4" />
            <div className="text-center mt-5">
                <a className="button-link text-dark text-center fw-bold text-uppercase text-decoration-none d-inline-block rounded-2 border-none" href="#cards">Order Hale Breathing Now</a>
            </div>
        </section>
    )
}

export default SectionSlideText