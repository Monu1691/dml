import HomeBannerSection from "./components/HomeBannerSection";
import WhatWeDoSection from "./components/WhatWeDoSection";

export default function HomePage(props) {
  const { homePage } = props;
  // console.log(homePage);
  
  const { homeBannerSliderRepeater } = homePage;

  const { whatWeDoTitle, whatWeDoDescription, whatWeDoRepeater } = homePage;

  return (
    <>
      <section className="">
        <HomeBannerSection homeBannerSliderRepeater={homeBannerSliderRepeater} />
        <WhatWeDoSection whatWeDoTitle={whatWeDoTitle} whatWeDoDescription={whatWeDoDescription} whatWeDoRepeater={whatWeDoRepeater} />
      </section>
    </>
  );
}
