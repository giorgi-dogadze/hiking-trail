import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <header className="container mx-auto px-4 h-[80px] md:h-[120px] lg:h-[150px] flex items-center justify-between relative">
                <Link to="/" >
                    <div className="text-xl sm:text-2xl font-bold">{t('header.title')}</div>
                </Link>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
                    <Link to="/hiking-trails" className="text-base lg:text-lg font-medium hover:text-primary">
                        {t('header.nav.hikingTrails')}
                    </Link>
                    <Link to="/events" className="text-base lg:text-lg font-medium hover:text-primary">
                        {t('header.nav.events')}
                    </Link>
                    <Link to="/equipment" className="text-base lg:text-lg font-medium hover:text-primary">
                        {t('header.nav.equipment')}
                    </Link>
                </nav>

                {/* Desktop auth buttons and language toggle */}
                <div className="hidden md:flex space-x-2 lg:space-x-4 items-center">
                    <LanguageToggle />
                    <Button variant="outline" size="sm" className="lg:text-base">{t('header.buttons.login')}</Button>
                    <Button size="sm" className="lg:text-base">{t('header.buttons.signup')}</Button>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-background z-50 border-b shadow-md md:hidden">
                        <div className="container mx-auto px-4 py-4 flex flex-col">
                            <nav className="flex flex-col space-y-4 mb-4">
                                <Link
                                    to="/hiking-trails"
                                    className="text-lg font-medium hover:text-primary py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t('header.nav.hikingTrails')}
                                </Link>
                                <Link
                                    to="/events"
                                    className="text-lg font-medium hover:text-primary py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t('header.nav.events')}
                                </Link>
                                <Link
                                    to="/equipment"
                                    className="text-lg font-medium hover:text-primary py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t('header.nav.equipment')}
                                </Link>
                            </nav>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-3">
                                    <Button variant="outline" size="sm">{t('header.buttons.login')}</Button>
                                    <Button size="sm">{t('header.buttons.signup')}</Button>
                                </div>
                                <LanguageToggle />
                            </div>
                        </div>
                    </div>
                )}
            </header>
            <div className='border-b' />
        </>
    );
};
