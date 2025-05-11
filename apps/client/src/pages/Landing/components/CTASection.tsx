import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

export const CTASection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-[#2B6BE7] py-20 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    {t('cta.description')}
                </p>
                <div className="space-x-4">
                    <Button variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
                        {t('cta.signUp')}
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                        {t('cta.learnMore')}
                    </Button>
                </div>
            </div>
        </section>
    );
};
