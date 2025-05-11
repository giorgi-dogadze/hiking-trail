import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Testimonials: React.FC = () => {
    const { t } = useTranslation();

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
                <h2 className="text-3xl font-bold text-center mb-12">{t('testimonials.title')}</h2>

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
