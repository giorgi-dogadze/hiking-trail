import React from 'react';
import { Button } from './button';
import { useLanguage } from '@/context/LanguageContext';

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'ka' : 'en';
        setLanguage(newLanguage);
    };

    return (
        <Button
            variant="outline"
            className="w-16 text-sm"
            onClick={toggleLanguage}
        >
            {language === 'en' ? 'GE' : 'EN'}
        </Button>
    );
}
