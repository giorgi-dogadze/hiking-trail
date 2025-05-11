import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import BorjomiKharagauliTrail from "../../../assets/HikingRoutes/Borjomi-Kharagauli Trail.jpg";
import GergetiTrinityChurchTrail from "../../../assets/HikingRoutes/Gergeti Trinity Church Trail.jpeg";
import TbilisiNationalParkLoop from "../../../assets/HikingRoutes/Tbilisi National Park Loop.jpg";

export const BestHikingRoutes: React.FC = () => {
    const { t } = useTranslation();

    const getDifficultyTranslation = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case 'easy': return t('hikingRoutes.difficulty.easy');
            case 'moderate': return t('hikingRoutes.difficulty.moderate');
            case 'hard': return t('hikingRoutes.difficulty.hard');
            default: return difficulty;
        }
    };

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
                <h2 className="text-3xl font-bold text-center mb-12">{t('hikingRoutes.title')}</h2>

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
                                        {getDifficultyTranslation(route.difficulty)}
                                    </span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">{t('hikingRoutes.viewRoute')}</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
