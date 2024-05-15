import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function WhatWeDoSection({ whatWeDoTitle, whatWeDoDescription, whatWeDoRepeater }) {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    };

    return (
        <>
            <section className="py-[80px] bg-[#f6f6f6]">
                <div className="container max-w-[1600px] px-[30px] lg:px-[80px] mx-auto">

                    <div className="text-center mb-[60px]">
                        <h2 className="text-[52px] text-[#323848] mb-[24px] font-[500]">{whatWeDoTitle}</h2>
                        <p className="text-[20px]">{whatWeDoDescription}</p>
                    </div>

                    <div className="[&>.slick-slider]:pb-[50px]">
                        <Slider {...settings}>
                            {whatWeDoRepeater.length > 0 && whatWeDoRepeater.map((item, index) => (
                                <div key={index}>
                                    <div className="px-[22px]">
                                        <div className="aspect-[0.95/1] mb-[20px] rounded-[10px] overflow-hidden hover:[&>img]:grayscale-0">
                                            <img className="w-full h-full object-cover grayscale" src={item.whatWeDoImage.node.mediaItemUrl} />
                                        </div>
                                        <p className="text-center text-[20px] leading-[24px]">{item.whatWeDoImageName}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </section>
        </>
    )
}
