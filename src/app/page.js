import BrandAcross from "../Modules/childComponent/BrandAcross";
import Industeries from "../Modules/childComponent/Industries";
import OurProcess from "../Modules/childComponent/OurProcess";
import TailoredPacking from "../Modules/childComponent/TailoredPacking";
import Testimonials from "../Modules/childComponent/Testimonials";
import TrustedSec from "../Modules/childComponent/TrustedSec";
import WeOffer from "../Modules/childComponent/WeOffer";
import WhyChoose from "../Modules/childComponent/WhyChoose";
import { Fragment } from "react";
import AnimatedSection from "../Modules/childComponent/Animated";

export default function Home() {
  return (

    <Fragment>
        <AnimatedSection>
      <TrustedSec />
      </AnimatedSection>
        <AnimatedSection>
      <TailoredPacking />
      </AnimatedSection>
      <AnimatedSection>
      <WhyChoose />
      </AnimatedSection>
       <AnimatedSection>
      <WeOffer />
      </AnimatedSection>
      <AnimatedSection>
      <OurProcess />
      </AnimatedSection>
      <AnimatedSection>
      <Industeries />
      </AnimatedSection>
      <AnimatedSection>
      <BrandAcross />
      </AnimatedSection>
      <AnimatedSection>
      <Testimonials />
      </AnimatedSection>
    </Fragment>


  );
}
