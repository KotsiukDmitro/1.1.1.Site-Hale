import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'



const SectionSlide = () => {
    return (
        <section className="section-slide text-center">
            <h2 className="section-slide-title fw-bold">Enjoy Full, Effortless Breaths Through Your Nose</h2>
            <p className="section-slide-text fw-normal">Sleep Better... Exercise Better... Live Better!</p>
            <div className="d-flex">
                <div className="btn-slide"> <button className="btn-prev swiper-btn-prev"></button></div>
                <Swiper modules={[Navigation, Pagination]}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        320: {
                            slidesPerView: 1
                        },
                    }}
                    navigation={{
                        clickable: true,
                        prevEl: '.swiper-btn-prev',
                        nextEl: '.swiper-btn-next',
                    }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-custom-pagination'
                    }} loop={true} className="slide">
                    <SwiperSlide><StaticImage src='../images/slide/slide-1.jpg' alt='img-slide' className='carouselImg'></StaticImage></SwiperSlide>
                    <SwiperSlide><StaticImage src='../images/slide/slide-2.jpg' alt='img-slide' className='carouselImg'></StaticImage></SwiperSlide>
                    <SwiperSlide><StaticImage src='../images/slide/slide-3.jpg' alt='img-slide' className='carouselImg'></StaticImage></SwiperSlide>
                    <SwiperSlide><StaticImage src='../images/slide/slide-4.jpg' alt='img-slide' className='carouselImg'></StaticImage></SwiperSlide>
                    <SwiperSlide><StaticImage src='../images/slide/slide-5.jpg' alt='img-slide' className='carouselImg'></StaticImage></SwiperSlide>
                    <SwiperSlide><StaticImage src='../images/slide/slide-6.jpg' alt='img-slide' className='carouselImg'></StaticImage></SwiperSlide>
                    <SwiperSlide><StaticImage src='../images/slide/slide-7.jpg' alt='img-slide' className='carouselImg'></StaticImage></SwiperSlide>
                </Swiper>
                <div className="btn-slide"><button className="btn-next swiper-btn-next"></button></div>
            </div>
            <div className="swiper-custom-pagination" />
            <a className="button-link text-dark text-center fw-bold text-uppercase text-decoration-none d-inline-block rounded-2 border-none" href="#cards">Order Hale Breathing Now</a>
        </section>
    )
}
export default SectionSlide