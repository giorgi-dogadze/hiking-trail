import React from 'react';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 pb-56 text-center">
            <h1 className="text-5xl font-bold mb-4">{t('hero.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('hero.description')}
            </p>
        </section>
    );
};
