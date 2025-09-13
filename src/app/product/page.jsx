import ProductDesign from "../../Modules/childComponent/ProductDesign";
import ProductTab from "../../Modules/childComponent/ProductTab";
import Industeries from "../../Modules/childComponent/Industries";
import BrandAcross from "../../Modules/childComponent/BrandAcross";
import Testimonials from "../../Modules/childComponent/Testimonials";
import AnimatedSection from "../../Modules/childComponent/Animated";
import { Fragment } from "react";

export default function Product() {
    return (
        <Fragment>
            <AnimatedSection>
                <ProductDesign />
            </AnimatedSection>
            <AnimatedSection>
                <ProductTab />
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
    )
}