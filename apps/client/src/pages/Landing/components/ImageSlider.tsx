import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import Borjomi from "../../../assets/CarouselImages/borjomi.jpg";
import Borjomi2 from "../../../assets/CarouselImages/borjomi2.jpg";
import Gergeti from "../../../assets/CarouselImages/gergeti.jpg";
import Juta from "../../../assets/CarouselImages/juta.jpg";
import Lagodekhi from "../../../assets/CarouselImages/lagodekhi.jpg";
import Lake from "../../../assets/CarouselImages/lake.jpg";
import Montains from "../../../assets/CarouselImages/montains.jpg";
import Some from "../../../assets/CarouselImages/some other.jpg";
import Tobavarchkhli from "../../../assets/CarouselImages/tobavarchkhli.jpg";

export const ImageSlider: React.FC = () => {
    const images = [
        Borjomi,
        Borjomi2,
        Gergeti,
        Juta,
        Lagodekhi,
        Lake,
        Montains,
        Some,
        Tobavarchkhli
    ];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [api, setApi] = useState<any>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        // Update current slide index when it changes
        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };
        api.on("select", onSelect);

        // Set up the auto-scroll interval with a slower speed (5 seconds)
        const autoScrollInterval = setInterval(() => {
            const totalSlides = images.length;

            // Get the current position of the carousel
            const currentPosition = api.selectedScrollSnap();

            // Move to the next slide
            if (currentPosition < totalSlides - 1) {
                api.scrollNext();
            } else {
                // When at the last slide, smoothly move back to the first slide
                // We can't just jump to the first slide as it would be abrupt
                // Instead, we'll manually control the scroll position

                // Create a smooth animation from last to first slide
                let startTime: number | null = null;
                const duration = 800; // Increased transition duration for smoother experience

                const animateScroll = (timestamp: number) => {
                    if (!startTime) startTime = timestamp;
                    const elapsed = timestamp - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    api.scrollTo(0, { immediate: true }); // Scroll to first position

                    if (progress < 1) {
                        requestAnimationFrame(animateScroll);
                    }
                };

                requestAnimationFrame(animateScroll);
            }
        }, 5000);

        return () => {
            api.off("select", onSelect);
            clearInterval(autoScrollInterval);
        };
    }, [api, images.length]);

    return (
        <div className="relative">
            {/* Top curved divider with more pronounced curve */}
            <svg
                className="absolute top-0 left-0 w-full transform translate-y-[-98%] rotate-180"
                height="150" /* Increased height for more pronounced curve */
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 1200 150" /* Adjusted viewBox to match height */
                xmlns="http://www.w3.org/2000/svg"
                data-qa='giorgi'
            >
                <path
                    d="M0 150C300 30 900 30 1200 150V0H0V150Z" /* More dramatic curve */
                    fill="#2B6BE7"
                />
            </svg>

            {/* Main content with blue background */}
            <section className="bg-[#2B6BE7] px-4 ">
                <div className="container mx-auto">
                    <Carousel
                        className="w-full max-w-7xl mx-auto"
                        setApi={setApi}
                        opts={{
                            loop: true,
                            align: "start"
                        }}
                    >
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <div className="overflow-hidden rounded-4xl h-[700px] shadow-lg">
                                            <img
                                                src={image}
                                                alt={`Scenic View ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const target = e.currentTarget;
                                                    console.log(`Failed to load image ${index}`);
                                                    target.src = `https://images.unsplash.com/photo-${1500000000000 + index}?q=80&w=800&auto=format`;
                                                    target.onerror = null; // Prevent infinite loop
                                                }}
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 w-[50px] h-[50px]" />
                        <CarouselNext className="right-4 w-[50px] h-[50px]" />
                    </Carousel>
                </div>
            </section>

            {/* Bottom curved divider with more pronounced curve */}
            <svg
                className="absolute bottom-0 left-0 w-full transform translate-y-[98%] rotate-180"
                height="150" /* Increased height for more pronounced curve */
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 1200 150" /* Adjusted viewBox to match height */
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 0C300 120 900 120 1200 0V150H0V0Z" /* More dramatic curve */
                    fill="#2B6BE7"
                />
            </svg>
        </div>
    );
};
