import { FaPhoneVolume } from "react-icons/fa6";

export default function Header() {
  return (
    <>
      <header className="font-neue-400">
        <section className="bg-[#1c75ba] text-[#fff] py-[15px]">
          <div className="container max-w-[1600px] px-[80px] mx-auto">
            <div className="text-right">
              <ul className="inline-flex flex-wrap">
                <li className="flex gap-x-[30px]">
                  <span className="flex gap-x-[10px] items-center"><FaPhoneVolume /> Contact Us</span>
                  <a href="tel:+911726131700">+91-172-613-1700</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-[15px]">
          <div className="container max-w-[1600px] px-[80px] mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full max-w-[200px]">
                <a href="/">
                  <img className="w-full" src="/images/DigiMantraLogo.svg" alt="DigiMantrs" />
                </a>
              </div>
              <div className="ml-auto">
                <a href="" className="inline-block bg-[#1c75ba] text-[#fff] rounded-[10px] p-[10px] text-[16px] leading-[24px] tracking-[0.28px] font-bold">Let's Talk</a>
              </div>
            </div>
          </div>
        </section>

        <nav className="border-t border-solid border-[#f6f6f6] shadow-[0_4px_12px_0_rgba(0,0,0,.03)]">
          <div className="container max-w-[1600px] px-[80px] mx-auto">

            <ul className="flex flex-wrap justify-center gap-x-[40px] text-[18px] leading-[19px] [&>li]:py-[16px] [&>li>a]:text-[#323848]">
              <li><a href="">Home</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Career</a></li>
              <li><a href="">Work</a></li>
              <li><a href="">Blog</a></li>
            </ul>

          </div>
        </nav>

      </header>
    </>
  );
}
