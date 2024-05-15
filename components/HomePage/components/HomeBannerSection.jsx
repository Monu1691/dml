import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function HomeBannerSection({ homeBannerSliderRepeater }) {
    const CustomArrow = ({ currentSlide, slideCount, children, ...props }) => (
        <button {...props}>{children}</button>
    );

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomArrow><BsChevronCompactLeft className="text-[52px] text-[#007aff]" /></CustomArrow>,
        nextArrow: <CustomArrow><BsChevronCompactRight className="text-[52px] text-[#007aff]" /></CustomArrow>,
    };

    return (
        <>
            <section className="py-[80px]">
                <div className="container max-w-[1600px] px-[30px] lg:px-[80px] mx-auto">

                    <div className="px-[60px] [&>.slick-slider>.slick-arrow:before]:hidden [&>.slick-slider>.slick-arrow]:w-[52px] [&>.slick-slider>.slick-arrow]:h-[52px] [&>.slick-slider>.slick-prev]:left-[-60px] [&>.slick-slider>.slick-next]:right-[-60px]">
                        <Slider {...settings}>
                            {homeBannerSliderRepeater.length > 0 && homeBannerSliderRepeater.map((data, index) => (
                                <div key={index}>
                                    <section className="lg:grid lg:grid-cols-2 items-center gap-x-[100px]">
                                        <div className="">
                                            <h2 className="text-[52px] text-[#323848] mb-[24px]">{data.homeBannerTitle}</h2>
                                            <div className="text-[24px] text-[#364056]" dangerouslySetInnerHTML={{ __html: data.homeBannerDescription }} />
                                        </div>
                                        <div className="text-center">
                                            <img src={data.homeBannerImage.node.mediaItemUrl} />
                                        </div>
                                    </section>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </section>
        </>
    )
}
