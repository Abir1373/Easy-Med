import React from 'react';
import AboutNavbar from './AboutNavbar';
import OverlyImage from './OverlyImage';
import DrippedFruits from './DrippedFruits';
import WhyChooseUs from './WhyChooseUs';
import AboutFooter from './AboutFooter';
import ItemCard from './ItemCard';


const About = () => {
    return (
        <>
            <div>
                <AboutNavbar></AboutNavbar>
            </div>
            <div className="mx-4 lg:mx-48 space-y-10">
                <OverlyImage />
                <DrippedFruits />
                <WhyChooseUs></WhyChooseUs>
                <ItemCard></ItemCard>
            </div>
            <AboutFooter/>
        </>
    );
};

export default About;