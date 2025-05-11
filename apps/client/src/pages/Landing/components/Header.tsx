import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <header className="container mx-auto px-4 h-[150px] flex items-center justify-between">
                <div className="text-2xl font-bold">{t('header.title')}</div>

                <nav className="flex items-center space-x-8">
                    <Link to="/hiking-trails" className="text-lg font-medium hover:text-primary">
                        {t('header.nav.hikingTrails')}
                    </Link>
                    <Link to="/events" className="text-lg font-medium hover:text-primary">
                        {t('header.nav.events')}
                    </Link>
                    <Link to="/equipment" className="text-lg font-medium hover:text-primary">
                        {t('header.nav.equipment')}
                    </Link>
                </nav>

                <div className="flex space-x-4 items-center">
                    <LanguageToggle />
                    <Button variant="outline">{t('header.buttons.login')}</Button>
                    <Button>{t('header.buttons.signup')}</Button>
                </div>
            </header>
            <div className='border-b' />
        </>
    );
};
