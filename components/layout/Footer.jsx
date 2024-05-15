import Link from 'next/link';

import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer>
                <section className="bg-[#222324] text-[#fff] py-[50px]">
                    <div className="container max-w-[1600px] px-[10px] lg:px-[80px] mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-1/3 lg:border-r border-solid border-[#444] max-lg:mb-[60px]">
                                <div className="lg:pr-[30px] max-lg:text-center">
                                    <div className="max-w-[200px] mb-[20px] max-lg:mx-auto">
                                        <Link href="/">
                                            <img className="w-full brightness-0 invert-[1]" src="/images/DigiMantraLogo.svg" alt="DigiMantrs" />
                                        </Link>
                                    </div>

                                    <p className="mb-[20px]">
                                        Trusted collaborator in propelling innovation forward
                                    </p>

                                    <ul className="flex flex-wrap gap-x-[21px] uppercase [&>li>a:hover]:text-[#ccc] [&>li]:relative [&>li:after]:content-[''] [&>li:after]:w-[1px] [&>li:after]:h-[14px] [&>li:after]:bg-[rgba(255,255,255,0.5)] [&>li:after]:absolute [&>li:after]:right-[-10px] [&>li:after]:top-[6px] max-lg:justify-center">
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/services">Services</Link></li>
                                        <li><Link href="/about-us">About Us</Link></li>
                                        <li className="after:hidden"><Link href="/blog">Blog</Link></li>
                                    </ul>

                                    <ul className="mt-[40px] flex flex-wrap gap-[30px] text-[24px] [&>li>a]:text-[#5a6271] [&>li>a:hover]:text-[#ffffff] max-lg:justify-center">
                                        <li><Link href="https://www.facebook.com/digimantra"><FaFacebookF /></Link></li>
                                        <li><Link href="https://www.linkedin.com/company/digimantra-labs"><FaLinkedinIn /></Link></li>
                                        <li><Link href="https://twitter.com/digimantralabs"><FaXTwitter /></Link></li>
                                        <li><Link href="https://www.youtube.com/user/digimantralabs"><FaYoutube /></Link></li>
                                        <li><Link href="https://www.instagram.com/digimantralabs/"><FaInstagram /></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="w-full lg:w-2/3">
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-1/2 px-[30px]"></div>

                                    <div className="w-full lg:w-1/2">
                                        <div className="relative">
                                            <img src="/images/digimap.png" alt="Office Locations" />

                                            <ul>
                                                <li className="w-[10px] h-[10px] rounded-full bg-[#1c75ba] absolute top-[31%] left-[24%] cursor-pointer [&:hover>.txt]:block">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                    <span className="txt absolute bg-[#fff] text-[#1c75ba] px-[12px] top-[-35px] left-[50%] translate-x-[-50%] hidden">USA</span>
                                                </li>
                                                <li className="w-[10px] h-[10px] rounded-full bg-[#1c75ba] absolute top-[43%] left-[69%] cursor-pointer [&:hover>.txt]:block">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                    <span className="txt absolute bg-[#fff] text-[#1c75ba] px-[12px] top-[-35px] left-[50%] translate-x-[-50%] hidden">India</span>
                                                </li>
                                                <li className="w-[10px] h-[10px] rounded-full bg-[#1c75ba] absolute top-[48%] left-[61%] cursor-pointer [&:hover>.txt]:block">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                    <span className="txt absolute bg-[#fff] text-[#1c75ba] px-[12px] top-[-35px] left-[50%] translate-x-[-50%] hidden">Dubai</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-center py-[15px]">
                    <div className="container max-w-[1600px] px-[10px] lg:px-[80px] mx-auto">
                        Copyright © {currentYear}. DigiMantra - All rights reserved.
                    </div>
                </section>
            </footer>
        </>
    );
}