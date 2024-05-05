import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function HomeBannerSection({ homeBannerSliderRepeater }) {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className="py-[80px]">
                <div className="container max-w-[1600px] px-[80px] mx-auto">

                    <div className="">
                        <Slider {...settings}>
                            {homeBannerSliderRepeater.length > 0 && homeBannerSliderRepeater.map((data, index) => (
                                <div key={index}>
                                    <section className="grid grid-cols-2 items-center gap-x-[100px]">
                                        <div className="">
                                            <h2 className="text-[52px] text-[#323848] mb-[24px] font-[500]">{data.homeBannerTitle}</h2>
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
