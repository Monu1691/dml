import HomeBannerSection from "./components/HomeBannerSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import OurExpertiseSection from "./components/OurExpertiseSection";

export default function HomePage(props) {
  const { homePage } = props;
  // console.log(homePage);
  
  const { homeBannerSliderRepeater } = homePage;
  const { whatWeDoTitle, whatWeDoDescription, whatWeDoRepeater } = homePage;
  const { ourExpertiseTitle, ourExpertiseDescription, ourExpertiseRepeater } = homePage;

  return (
    <>
      <section className="">
        <HomeBannerSection homeBannerSliderRepeater={homeBannerSliderRepeater} />
        <WhatWeDoSection whatWeDoTitle={whatWeDoTitle} whatWeDoDescription={whatWeDoDescription} whatWeDoRepeater={whatWeDoRepeater} />
        <OurExpertiseSection ourExpertiseTitle={ourExpertiseTitle} ourExpertiseDescription={ourExpertiseDescription} ourExpertiseRepeater={ourExpertiseRepeater}/>
      </section>
    </>
  );
}
