import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Borjomi from "../../assets/CarouselImages/borjomi.jpg"
import Borjomi2 from "../../assets/CarouselImages/borjomi2.jpg"
import Gergeti from "../../assets/CarouselImages/gergeti.jpg"
import Juta from "../../assets/CarouselImages/juta.jpg"
import Lagodekhi from "../../assets/CarouselImages/lagodekhi.jpg"
import Lake from "../../assets/CarouselImages/lake.jpg"
import Montains from "../../assets/CarouselImages/montains.jpg"
import Some from "../../assets/CarouselImages/some other.jpg"
import Tobavarchkhli from "../../assets/CarouselImages/tobavarchkhli.jpg"

import AutumnTrailsOfKakheti from "../../assets/ExploreGeorgiaCardImages/Autumn Trails of Kakheti.jpg"
import HiddenWaterfallsOfMartvili from "../../assets/ExploreGeorgiaCardImages/Hidden Waterfalls of Martvili.jpg"
import MountainPeaksOfKazbegi from "../../assets/ExploreGeorgiaCardImages/Mountain Peaks of Kazbegi.jpeg"
import WildlifeEncountersInBorjomi from "../../assets/ExploreGeorgiaCardImages/Wildlife Encounters in Borjomi.jpg"

import BorjomiKharagauliTrail from "../../assets/HikingRoutes/Borjomi-Kharagauli Trail.jpg"
import GergetiTrinityChurchTrail from "../../assets/HikingRoutes/Gergeti Trinity Church Trail.jpeg"
import TbilisiNationalParkLoop from "../../assets/HikingRoutes/Tbilisi National Park Loop.jpg"

const Header: React.FC = () => (
    <>
        <header className="container mx-auto px-4 h-[150px] flex items-center justify-between">
            <div className="text-2xl font-bold">Hiking Trail</div>

            <nav className="flex items-center space-x-8">
                <Link to="/hiking-trails" className="text-lg font-medium hover:text-primary">Hiking Trails</Link>
                <Link to="/events" className="text-lg font-medium hover:text-primary">Events</Link>
                <Link to="/equipment" className="text-lg font-medium hover:text-primary">Equipment</Link>
            </nav>

            <div className="flex space-x-4">
                <Button variant="outline">Log In</Button>
                <Button>Sign Up</Button>
            </div>
        </header>
        <div className='border-b' />
    </>

);

const HeroSection: React.FC = () => (
    <section className="py-20 pb-56 text-center">
        <h1 className="text-5xl font-bold mb-4">Discover Georgia's Beautiful Trails</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the breathtaking landscapes, hidden gems, and unforgettable hiking experiences across Georgia.
        </p>
    </section>
);

const ImageSlider: React.FC = () => {
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

    const [api, setApi] = useState<any>(null);
    const [current, setCurrent] = useState(0);

    React.useEffect(() => {
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

const ExploreGeorgia: React.FC = () => {
    const blogs = [
        {
            title: "Mountain Peaks of Kazbegi",
            description: "Discover the majestic mountains and trails around Mount Kazbegi.",
            image: MountainPeaksOfKazbegi,
            date: "May 15, 2023",
        },
        {
            title: "Hidden Waterfalls of Martvili",
            description: "Experience the serene beauty of Martvili's secret waterfall trails.",
            image: HiddenWaterfallsOfMartvili,
            date: "June 22, 2023",
        },
        {
            title: "Wildlife Encounters in Borjomi",
            description: "Your guide to spotting Georgia's diverse wildlife on Borjomi trails.",
            image: WildlifeEncountersInBorjomi,
            date: "July 8, 2023",
        },
        {
            title: "Autumn Trails of Kakheti",
            description: "The best hiking experiences in Georgia's wine country during fall.",
            image: AutumnTrailsOfKakheti,
            date: "September 30, 2023",
        },
    ];


    return (
        <section className="py-20 pt-56">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Explore Georgia</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogs.map((blog, index) => (
                        <Card key={index} className="overflow-hidden p-0">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                    onError={(e) => {
                                        e.currentTarget.src = `https://images.unsplash.com/photo-${1500000000000 + index}?q=80&w=800&auto=format`;
                                    }}
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>{blog.title}</CardTitle>
                                <CardDescription>{blog.date}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{blog.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="link" className="ml-auto">Read More</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

const BestHikingRoutes: React.FC = () => {
    const topRoutes = [
        {
            name: "Gergeti Trinity Church Trail",
            location: "Kazbegi",
            rating: 4.9,
            difficulty: "Moderate",
            image: GergetiTrinityChurchTrail
        },
        {
            name: "Tbilisi National Park Loop",
            location: "Tbilisi",
            rating: 4.8,
            difficulty: "Easy",
            image: TbilisiNationalParkLoop
        },
        {
            name: "Borjomi-Kharagauli Trail",
            location: "Borjomi",
            rating: 4.7,
            difficulty: "Hard",
            image: BorjomiKharagauliTrail
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Best Hiking Routes</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topRoutes.map((route, index) => (
                        <Card key={index} className="overflow-hidden p-0 pb-6">
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={route.image}
                                    alt={route.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = `https://images.unsplash.com/photo-${1500000000000 + index}?q=80&w=800&auto=format`;
                                    }}
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>{route.name}</CardTitle>
                                <CardDescription>{route.location}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <span className="text-yellow-500 mr-1">★</span>
                                        <span className="font-medium">{route.rating}</span>
                                    </div>
                                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                        {route.difficulty}
                                    </span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">View Route</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Testimonials: React.FC = () => {
    const feedback = [
        {
            name: "Ana Kalandadze",
            text: "The hiking trails suggested on this site were amazing! Our family had a wonderful time exploring Kazbegi.",
            avatar: "/images/avatar1.jpg",
        },
        {
            name: "David Nozadze",
            text: "I found my favorite trail through this platform. The detailed maps and difficulty ratings were very helpful.",
            avatar: "/images/avatar2.jpg",
        },
        {
            name: "Mari Tsuladze",
            text: "The equipment recommendations were spot on. I rented everything I needed for my Borjomi trek through this site.",
            avatar: "/images/avatar3.jpg",
        },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Hikers Say</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {feedback.map((item, index) => (
                        <Card key={index} className="text-center">
                            <CardHeader>
                                <div className="flex justify-center mb-4">
                                    <div className="rounded-full overflow-hidden w-16 h-16">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${item.name.replace(" ", "+")}&background=random`;
                                            }}
                                        />
                                    </div>
                                </div>
                                <CardTitle>{item.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="italic">"{item.text}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection: React.FC = () => (
    <section className="bg-[#2B6BE7] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of hikers exploring the beautiful trails of Georgia. Sign up today and start planning your next hike!
            </p>
            <div className="space-x-4">
                <Button variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
                    Sign Up Now
                </Button>
                <Button variant="outline" className="border-white text-blue-600 hover:bg-gray-100">
                    Learn More
                </Button>
            </div>
        </div>
    </section>
);

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">Hiking Trail</h3>
                    <p className="text-gray-400">
                        Discover Georgia's most beautiful hiking routes and outdoor adventures.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link to="/hiking-trails" className="text-gray-400 hover:text-white">Hiking Trails</Link></li>
                        <li><Link to="/events" className="text-gray-400 hover:text-white">Events</Link></li>
                        <li><Link to="/equipment" className="text-gray-400 hover:text-white">Equipment</Link></li>
                        <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Resources</h4>
                    <ul className="space-y-2">
                        <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                        <li><Link to="/safety-tips" className="text-gray-400 hover:text-white">Safety Tips</Link></li>
                        <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                        <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Stay Connected</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                        <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                        <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                <p>© {new Date().getFullYear()} Hiking Trail. All rights reserved.</p>
                <div className="mt-2 space-x-4">
                    <Link to="/terms" className="hover:text-white">Terms of Service</Link>
                    <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                </div>
            </div>
        </div>
    </footer>
);

const Landing: React.FC = () => {
    return (
        <div className="landing-page">
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
