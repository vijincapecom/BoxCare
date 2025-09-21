import { Fragment } from "react";
import ContactOne from '../../Modules/childComponent/ContactOne'
import ContactTwo from '../../Modules/childComponent/ContactTwo'
import ContactThree from '../../Modules/childComponent/ContactThree'
import AnimatedSection from "../../Modules/childComponent/Animated";

export default function ContactUs () {
    return (
       <Fragment>
          <AnimatedSection>
        <ContactOne/>
        </AnimatedSection>
         <AnimatedSection>
        <ContactTwo/>
        </AnimatedSection>
         <AnimatedSection>
        <ContactThree/>
        </AnimatedSection>

        
       </Fragment>
    );
}