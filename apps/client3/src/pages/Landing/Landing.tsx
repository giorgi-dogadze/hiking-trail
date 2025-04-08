import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Borjomi from "../../assets/images/borjomi.jpg";
import Borjomi2 from "../../assets/images/borjomi2.jpg";
import Gergeti from "../../assets/images/gergeti.jpg";
import Juta from "../../assets/images/juta.jpg";
import Lagodekhi from "../../assets/images/lagodekhi.jpg";
import Lake from "../../assets/images/lake.jpg";
import Montains from "../../assets/images/montains.jpg";
import Some from "../../assets/images/some other.jpg";
import Tobavarchkhli from "../../assets/images/tobavarchkhli.jpg";

const Header: React.FC = () => (
    <header className="h-[150px] px-8 flex items-center justify-between border-b">
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
);

const HeroSection: React.FC = () => (
    <section className="py-20 text-center">nces to the imported imagesages directly
        <h1 className="text-5xl font-bold mb-4">Discover Georgia's Beautiful Trails</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Borjomi" },
            Explore the breathtaking landscapes, hidden gems, and unforgettable hiking experiences across Georgia."Borjomi 2" },
        </p>Gergeti" },
    </section>  { src: Juta, alt: "Juta" }, Juta,
); { src: Lagodekhi, alt: "Lagodekhi" }, Lagodekhi,
    c: Lake, alt: "Lake" },,
const ImageSlider: React.FC = () => {
    const images = [
        "/images/slider1.jpg",
        "/images/slider2.jpg",
        "/images/slider3.jpg",
        "/images/slider4.jpg",
    ];
    <div className="container mx-auto px-4">
        <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
                {imageRefs.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <div className="overflow-hidden rounded-lg h-[400px]"> rounded-lg h-[400px]">
                                <img
                                    src={image.src}="p-1">c={image}
                                alt={image.alt}lassName="overflow-hidden rounded-lg">  alt={`Scenic View ${index + 1}`}
                                className="w-full h-full object-cover"mg  className="w-full h-full object-cover"
                                        />      src={image}  />
                            </div> alt={`Scenic View ${index + 1}`}
                        </div>                 className="w-full h-[400px] object-cover"     </div>
                            </CarouselItem>      // Placeholder image if actual images aren't availableItem>
                        ))} {
                    </CarouselContent>tTarget.src = `https://images.unsplash.com/photo-${1500000000000 + index}?q=80&w=800&auto=format`;
        <CarouselPrevious className="left-4" />elPrevious className="left-4" />                 }}
        <CarouselNext className="right-4" />  <CarouselNext className="right-4" />                      />
    </Carousel>Carousel >                  </div >
            </div >      </div >                          </div >
        </section >      </section >                          </CarouselItem >
    );    );                        ))}
};
className = "left-4" />
const ExploreGeorgia: React.FC = () => {
    loreGeorgia: React.FC = () => {
        <CarouselNext className="right-4" />
        const blogs = [
            {
                title: "Mountain Peaks of Kazbegi", azbegi",
            description: "Discover the majestic mountains and trails around Mount Kazbegi.", r the majestic mountains and trails around Mount Kazbegi.",
            image: "/images/blog1.jpg", image: "/images/blog1.jpg",
                date: "May 15, 2023", date: "May 15, 2023",
            },
            {
                title: "Hidden Waterfalls of Martvili", f Martvili",
            description: "Experience the serene beauty of Martvili's secret waterfall trails.", ce the serene beauty of Martvili's secret waterfall trails.", of Kazbegi",
            image: "/images/blog2.jpg", image: "/images/blog2.jpg", description: "Discover the majestic mountains and trails around Mount Kazbegi.",
                date: "June 22, 2023", date: "June 22, 2023", image: "/images/blog1.jpg",
            },
            {
                title: "Wildlife Encounters in Borjomi", in Borjomi",
            description: "Your guide to spotting Georgia's diverse wildlife on Borjomi trails.", ide to spotting Georgia's diverse wildlife on Borjomi trails.",alls of Martvili",
            image: "/images/blog3.jpg", image: "/images/blog3.jpg", description: "Experience the serene beauty of Martvili's secret waterfall trails.",
                date: "July 8, 2023", date: "July 8, 2023", image: "/images/blog2.jpg",
            },
            {
                title: "Autumn Trails of Kakheti", kheti",
            description: "The best hiking experiences in Georgia's wine country during fall.", ng experiences in Georgia's wine country during fall.", in Borjomi",
            image: "/images/blog4.jpg", image: "/images/blog4.jpg", description: "Your guide to spotting Georgia's diverse wildlife on Borjomi trails.",
                date: "September 30, 2023", date: "September 30, 2023", image: "/images/blog3.jpg",
            },        }, date: "July 8, 2023",
    ];

return (
    <section className="py-20">
        <div className="container mx-auto px-4">            <div className="container mx-auto px-4">            image: "/images/blog4.jpg",
            <h2 className="text-3xl font-bold text-center mb-12">Explore Georgia</h2>h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">d-cols-4 gap-6">
                {blogs.map((blog, index) => (
                    <Card key={index} className="overflow-hidden">ndex} className="overflow-hidden">
                        <div className="h-48 overflow-hidden">rflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover transition-transform hover:scale-105"
                                onError={(e) => { Error = {(e) => {index) => (
                            e.currentTarget.src = `https://images.unsplash.com/photo-${1500000000000 + index}?q=80&w=800&auto=format`;      e.currentTarget.src = `https://images.unsplash.com/photo-${1500000000000 + index}?q=80&w=800&auto=format`;{index} className="overflow-hidden">
                                    }}  }}lassName="h-48 overflow-hidden">
                                />
                        </div>
                        <CardHeader>
                            <CardTitle>{blog.title}</CardTitle>e>{blog.title}</CardTitle>Name="w-full h-full object-cover transition-transform hover:scale-105"
                        <CardDescription>{blog.date}</CardDescription>ription>{blog.date}</CardDescription>or = {(e) => {
                            </CardHeader>ages.unsplash.com/photo-${1500000000000 + index}?q=80&w=800&auto=format`;
            <CardContent>
                <p>{blog.description}</p>.description}</p>
        </CardContent>
            <CardFooter>
                <Button variant="link" className="ml-auto">Read More</Button> <Button variant="link" className="ml-auto">Read More</Button> <CardTitle>{blog.title}</CardTitle>
            </CardFooter>     </CardFooter>         <CardDescription>{blog.date}</CardDescription>
    </Card>  </Card >      </CardHeader >
                    ))}  ))}          <CardContent>
</div>div > <p>{blog.description}</p>
            </div >      </div >                      </CardContent >
        </section >      </section > <CardFooter>
    );    );                                <Button variant="link" className="ml-auto">Read More</Button>
};

const BestHikingRoutes: React.FC = () => {tHikingRoutes: React.FC = () => {           ))}
    const topRoutes = [
    {
        name: "Gergeti Trinity Church Trail",ti Trinity Church Trail",
    location: "Kazbegi",
    rating: 4.9,
    difficulty: "Moderate",  difficulty: "Moderate",
            image: "/images/route1.jpg",   image: "/images/route1.jpg",tHikingRoutes: React.FC = () => {
    },
    {
        name: "Tbilisi National Park Loop",si National Park Loop",ti Trinity Church Trail",
    location: "Tbilisi",,,
    rating: 4.8,
    difficulty: "Easy",  difficulty: "Easy",  difficulty: "Moderate",
    image: "/images/route2.jpg",   image: "/images/route2.jpg",   image: "/images/route1.jpg",
        },
    {
        name: "Borjomi-Kharagauli Trail",mi-Kharagauli Trail",si National Park Loop",
    location: "Borjomi",,,
    rating: 4.7,
    difficulty: "Hard",  difficulty: "Hard",  difficulty: "Easy",
    image: "/images/route3.jpg",      image: "/images/route3.jpg",      image: "/images/route2.jpg",
        },        },        },
    ];

    return (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">            <div className="container mx-auto px-4">            difficulty: "Hard",
            <h2 className="text-3xl font-bold text-center mb-12">Best Hiking Routes</h2>st Hiking Routes</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">>
                {topRoutes.map((route, index) => (
                    <Card key={index} className="overflow-hidden">ndex} className="overflow-hidden">
                        <div className="h-56 overflow-hidden">flow-hidden">
                            <img
                                src={route.image}
                                alt={route.name}
                                className="w-full h-full object-cover"
                                onError={(e) => { Error = {(e) => {ute, index) => (
                            e.currentTarget.src = `https://images.unsplash.com/photo-${1500000000000 + index}?q=80&w=800&auto=format`;      e.currentTarget.src = `https://images.unsplash.com/photo-${1500000000000 + index}?q=80&w=800&auto=format`;{index} className="overflow-hidden">
                                    }}  }}lassName="h-56 overflow-hidden">
                                />
                        </div>
                        <CardHeader>
                            <CardTitle>{route.name}</CardTitle>e>{route.name}</CardTitle>Name="w-full h-full object-cover"
                        <CardDescription>{route.location}</CardDescription>ription>{route.location}</CardDescription>or = {(e) => {
                            </CardHeader>0&w=800&auto=format`;
            <CardContent>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>pan className="text-yellow-500 mr-1">★</span>
                    <span className="font-medium">{route.rating}</span>
                </div>cription>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">lassName="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {route.difficulty}  {route.difficulty}nt>
                </span>>Name="flex justify-between items-center">
        </div>lassName="flex items-center">
    </CardContent>
    <CardFooter>pan className="font-medium">{route.rating}</span>
    <Button className="w-full">View Route</Button> <Button className="w-full">View Route</Button>     </div>
                            </CardFooter >     </CardFooter > <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
</Card>  </Card > { route.difficulty }
                    ))}  ))}                  </span >
                </div > div >              </div >
            </div >      </div >                      </CardContent >
        </section >      </section > <CardFooter>
    );    );                                <Button className="w-full">View Route</Button>
};

const Testimonials: React.FC = () => {timonials: React.FC = () => {           ))}
    const feedback = [
    {
        name: "Ana Kalandadze",
    text: "The hiking trails suggested on this site were amazing! Our family had a wonderful time exploring Kazbegi.",  text: "The hiking trails suggested on this site were amazing! Our family had a wonderful time exploring Kazbegi.",
    avatar: "/images/avatar1.jpg",   avatar: "/images/avatar1.jpg",
        },
    {
        name: "David Nozadze",
    text: "I found my favorite trail through this platform. The detailed maps and difficulty ratings were very helpful.",  text: "I found my favorite trail through this platform. The detailed maps and difficulty ratings were very helpful.",
    avatar: "/images/avatar2.jpg",   avatar: "/images/avatar2.jpg",   name: "Ana Kalandadze",
        },e were amazing! Our family had a wonderful time exploring Kazbegi.",
    {
        name: "Mari Tsuladze",
    text: "The equipment recommendations were spot on. I rented everything I needed for my Borjomi trek through this site.",  text: "The equipment recommendations were spot on. I rented everything I needed for my Borjomi trek through this site.",
    avatar: "/images/avatar3.jpg",      avatar: "/images/avatar3.jpg",      name: "David Nozadze",
        },        },            text: "I found my favorite trail through this platform. The detailed maps and difficulty ratings were very helpful.",
    ];: "/images/avatar2.jpg",

    return (
    <section className="py-20">
        <div className="container mx-auto px-4">            <div className="container mx-auto px-4">            text: "The equipment recommendations were spot on. I rented everything I needed for my Borjomi trek through this site.",
            <h2 className="text-3xl font-bold text-center mb-12">What Our Hikers Say</h2>at Our Hikers Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">p-8">
                {feedback.map((item, index) => (index) => (
                    <Card key={index} className="text-center">
                        <CardHeader>
                            <div className="flex justify-center mb-4">me="flex justify-center mb-4">o px-4">
                                <div className="rounded-full overflow-hidden w-16 h-16">ull overflow-hidden w-16 h-16"> mb-12">What Our Hikers Say</h2>
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { Error = {(e) => {
                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${item.name.replace(" ", "+")}&background=random`;      e.currentTarget.src = `https://ui-avatars.com/api/?name=${item.name.replace(" ", "+")}&background=random`;Name="flex justify-center mb-4">
                                            }}  }}lassName="rounded-full overflow-hidden w-16 h-16">
                                        />  />  <img
                                    </div>
                        </div>alt={item.name}
                        <CardTitle>{item.name}</CardTitle>e>{item.name}</CardTitle>   className = "w-full h-full object-cover"
                            </CardHeader>
            <CardContent>     e.currentTarget.src = `https://ui-avatars.com/api/?name=${item.name.replace(" ", "+")}&background=random`;
                <p className="italic">"{item.text}"</p> <p className="italic">"{item.text}"</p>             }}
            </CardContent>     </CardContent>                 />
    </Card>  </Card>              </div >
                    ))}  ))}              </div >
                </div > div > <CardTitle>{item.name}</CardTitle>
            </div >      </div >                      </CardHeader >
        </section >      </section > <CardContent>
    );    );                                <p className="italic">"{item.text}"</p>
};

const CTASection: React.FC = () => (
    <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">lassName="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of hikers exploring the beautiful trails of Georgia. Sign up today and start planning your next hike!s exploring the beautiful trails of Georgia. Sign up today and start planning your next hike!
            </p>
            <div className="space-x-4">ce-x-4"> => (
                <Button variant="default" className="bg-white text-blue-600 hover:bg-gray-100">ariant="default" className="bg-white text-blue-600 hover:bg-gray-100">g-blue-600 py-20 text-white">
                    Sign Up Now
                </Button> font-bold mb-4">Ready for Your Next Adventure?</h2>
            <Button variant="outline" className="border-white text-white hover:bg-blue-700">ariant="outline" className="border-white text-white hover:bg-blue-700">"text-xl mb-8 max-w-2xl mx-auto">
                Learn More  Learn Morein thousands of hikers exploring the beautiful trails of Georgia. Sign up today and start planning your next hike!
            </Button>  </Button>p>
    </div>div>iv className="space-x-4">
</div>      </div > <Button variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
</section>    </section > Sign Up Now
);

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">e="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">Hiking Trail</h3>
                    <p className="text-gray-400">lassName="text-gray-400">
                        Discover Georgia's most beautiful hiking routes and outdoor adventures.  Discover Georgia's most beautiful hiking routes and outdoor adventures. = () => (
                    </p>/p>="bg-gray-900 text-white py-12">
                </div>
                <div>
                    <h4 className="font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link to="/hiking-trails" className="text-gray-400 hover:text-white">Hiking Trails</Link></li>nk></li>
                        <li><Link to="/events" className="text-gray-400 hover:text-white">Events</Link></li>
                        <li><Link to="/equipment" className="text-gray-400 hover:text-white">Equipment</Link></li>li><Link to="/equipment" className="text-gray-400 hover:text-white">Equipment</Link></li>
                        <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>  <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                    </ul>/ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Resources</h4>
                    <ul className="space-y-2">
                        <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>i></Link></li>
                        <li><Link to="/safety-tips" className="text-gray-400 hover:text-white">Safety Tips</Link></li></li>
                        <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>li> <Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li >
                        <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>  <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                    </ul >/ul>
                </div >
                <div>
                    <h4 className="font-bold mb-4">Stay Connected</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">Facebook</a>></Link></li>
                        <a href="#" className="text-gray-400 hover:text-white">Instagram</a> href = "#" className = "text-gray-400 hover:text-white" > Instagram</a > i > <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li >
                        <a href="#" className="text-gray-400 hover:text-white">Twitter</a>  <a href="#" className="text-gray-400 hover:text-white">Twitter</a>ul >
                    </div >  </div > div >
                </div >
            </div >
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">-800 mt-8 pt-8 text-center text-gray-500">-4">
        <p>© {new Date().getFullYear()} Hiking Trail. All rights reserved.</p>
        <div className="mt-2 space-x-4">
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>ink to="/terms" className="hover:text-white">Terms of Service</Link>  <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>  <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>  </div>
                </div >  </div >  </div >
            </div > /div>/div >
        </div >      </div > <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
</footer>    </footer > <p>© {new Date().getFullYear()} Hiking Trail. All rights reserved.</p>
);
k to = "/terms" className = "hover:text-white" > Terms of Service</Link >
const Landing: React.FC = () => {
    ssName = "hover:text-white" > Privacy Policy</Link >
    return (
        <div className="landing-page">ding-page">
            <Header />
            <HeroSection />
            <ImageSlider />
            <ExploreGeorgia />/>
            <BestHikingRoutes />tes />() => {
                <Testimonials />als />
            <CTASection />TASection />lassName="landing-page">
            <Footer />      <Footer />      <Header />
        </div>      </div > <HeroSection />
    );    ); <ImageSlider />
};
<BestHikingRoutes />


export default memo(Landing);

export default memo(Landing);            <Testimonials />
            <CTASection />
            <Footer />
        </div >
    );
};


export default memo(Landing);