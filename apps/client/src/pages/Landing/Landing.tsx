import React, { memo } from 'react';
import { HeroSection } from './components/HeroSection';
import { ImageSlider } from './components/ImageSlider';
import { ExploreGeorgia } from './components/ExploreGeorgia';
import { BestHikingRoutes } from './components/BestHikingRoutes';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Footer, Header } from '../../components/core';

const Landing: React.FC = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <ImageSlider />
            <ExploreGeorgia />
            <BestHikingRoutes />
            <Testimonials />
            <CTASection />
            <Footer />
        </div>
    );
};

export default memo(Landing);
