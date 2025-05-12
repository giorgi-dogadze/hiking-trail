import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

interface TrailSeasonsProps {
    seasons: {
        spring: boolean;
        summer: boolean;
        autumn: boolean;
        winter: boolean;
    };
}

const TrailSeasons: React.FC<TrailSeasonsProps> = ({ seasons }) => {
    const { t } = useTranslation();

    return (
        <Card className="mb-6">
            <CardHeader>
                <h3 className="font-bold text-xl">{t('trail.seasons.title')}</h3>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center">
                        {seasons.spring ?
                            <Check className="w-4 h-4 mr-2 text-green-600" /> :
                            <X className="w-4 h-4 mr-2 text-red-600" />}
                        <span>{t('trail.seasons.spring')}</span>
                    </div>
                    <div className="flex items-center">
                        {seasons.summer ?
                            <Check className="w-4 h-4 mr-2 text-green-600" /> :
                            <X className="w-4 h-4 mr-2 text-red-600" />}
                        <span>{t('trail.seasons.summer')}</span>
                    </div>
                    <div className="flex items-center">
                        {seasons.autumn ?
                            <Check className="w-4 h-4 mr-2 text-green-600" /> :
                            <X className="w-4 h-4 mr-2 text-red-600" />}
                        <span>{t('trail.seasons.autumn')}</span>
                    </div>
                    <div className="flex items-center">
                        {seasons.winter ?
                            <Check className="w-4 h-4 mr-2 text-green-600" /> :
                            <X className="w-4 h-4 mr-2 text-red-600" />}
                        <span>{t('trail.seasons.winter')}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TrailSeasons;
