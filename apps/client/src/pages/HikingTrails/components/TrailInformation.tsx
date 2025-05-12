import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { HikingTrail } from '../types';

interface TrailInformationProps {
    trail: HikingTrail;
}

const TrailInformation: React.FC<TrailInformationProps> = ({ trail }) => {
    const { t } = useTranslation();

    return (
        <Card className="mb-6">
            <CardHeader>
                <h3 className="font-bold text-xl">{t('trail.information.title')}</h3>
            </CardHeader>
            <CardContent className="space-y-3">
                <div>
                    <p className="text-sm font-medium text-gray-500">{t('trail.information.trailType')}</p>
                    <p>{trail.trailType}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500">{t('trail.information.length')}</p>
                    <p>{trail.length} {trail.lengthUnit}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500">{t('trail.information.estimatedTime')}</p>
                    <p>{trail.estimatedTime.minimum}-{trail.estimatedTime.maximum} {t(`trail.${trail.estimatedTime.timeUnit}`)}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500">{t('trail.information.elevation')}</p>
                    <p>
                        {t('trail.information.up')}: {trail.heightUp}{trail.elevationUnit},
                        {t('trail.information.down')}: {trail.heightDown}{trail.elevationUnit}
                    </p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500">{t('trail.information.difficulty')}</p>
                    <p> {t(`hikingRoutes.difficulty.${trail.difficulty.level}`)}</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default TrailInformation;
