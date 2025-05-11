import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import AutumnTrailsOfKakheti from "../../../assets/ExploreGeorgiaCardImages/Autumn Trails of Kakheti.jpg";
import HiddenWaterfallsOfMartvili from "../../../assets/ExploreGeorgiaCardImages/Hidden Waterfalls of Martvili.jpg";
import MountainPeaksOfKazbegi from "../../../assets/ExploreGeorgiaCardImages/Mountain Peaks of Kazbegi.jpeg";
import WildlifeEncountersInBorjomi from "../../../assets/ExploreGeorgiaCardImages/Wildlife Encounters in Borjomi.jpg";

export const ExploreGeorgia: React.FC = () => {
    const { t } = useTranslation();

    const blogs = [
        {
            title: t('exploreGeorgia.blogs.kazbegi.title'),
            description: t('exploreGeorgia.blogs.kazbegi.description'),
            image: MountainPeaksOfKazbegi,
            date: "May 15, 2023",
        },
        {
            title: t('exploreGeorgia.blogs.martvili.title'),
            description: t('exploreGeorgia.blogs.martvili.description'),
            image: HiddenWaterfallsOfMartvili,
            date: "June 22, 2023",
        },
        {
            title: t('exploreGeorgia.blogs.borjomi.title'),
            description: t('exploreGeorgia.blogs.borjomi.description'),
            image: WildlifeEncountersInBorjomi,
            date: "July 8, 2023",
        },
        {
            title: t('exploreGeorgia.blogs.kakheti.title'),
            description: t('exploreGeorgia.blogs.kakheti.description'),
            image: AutumnTrailsOfKakheti,
            date: "September 30, 2023",
        },
    ];

    return (
        <section className="py-20 pt-56">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{t('exploreGeorgia.title')}</h2>

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
                                <Button variant="link" className="ml-auto">{t('exploreGeorgia.readMore')}</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
