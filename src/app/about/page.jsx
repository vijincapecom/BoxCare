import Achievement from "../../Modules/childComponent/Achievement";
import BrandAcross from "../../Modules/childComponent/BrandAcross";
import CoreValues from "../../Modules/childComponent/CoreValues";
import Experience from "../../Modules/childComponent/Experience";
import Testimonials from "../../Modules/childComponent/Testimonials";
import WhyChoose from "../../Modules/childComponent/WhyChoose";
import { Fragment } from "react";
import AnimatedSection from "../../Modules/childComponent/Animated";

export default function Aboutus() {
    return (
        <Fragment>
            <AnimatedSection>
                <Experience />
            </AnimatedSection>
            <AnimatedSection>
                <CoreValues />
            </AnimatedSection>
            <AnimatedSection>
                <WhyChoose />
            </AnimatedSection>
            <AnimatedSection>
                <Achievement />
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