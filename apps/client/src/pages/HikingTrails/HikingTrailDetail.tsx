import React, { memo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { trails } from './trails.data';
import { HikingTrail } from './types';
import { Footer, Header } from '@/components/core';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TrailDetailHeader from './components/TrailDetailHeader';
import TrailDescription from './components/TrailDescription';
import TrailHighlights from './components/TrailHighlights';
import TrailHazards from './components/TrailHazards';
import TrailInformation from './components/TrailInformation';
import TrailSeasons from './components/TrailSeasons';
import TrailFacilities from './components/TrailFacilities';
import { useTranslation } from 'react-i18next';

const HikingTrailDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [trail, setTrail] = useState<HikingTrail | null>(null);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        // Find trail by ID
        if (id) {
            const foundTrail = trails.find(t => t.id === Number(id));
            setTrail(foundTrail || null);
        }
        setLoading(false);
    }, [id]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
    );

    if (!trail) return (
        <div className="min-h-screen flex items-center justify-center flex-col gap-4">
            <h1 className="text-2xl font-bold">{t('trail.notFound')}</h1>
            <Link to="/hiking-trails">
                <Button>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('trail.backToTrails')}
                </Button>
            </Link>
        </div>
    );

    return (
        <div>
            <Header />
            <main className="container mx-auto py-8 px-4">
                <TrailDetailHeader
                    title={trail.title}
                    region={trail.region}
                    difficulty={trail.difficulty.level}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <TrailDescription
                            description={trail.description}
                            image={trail.image}
                            title={trail.title}
                        />
                        <TrailHighlights highlights={trail.highlights} />
                        <TrailHazards hazards={trail.hazards} />
                    </div>

                    <div className="lg:col-span-1">
                        <TrailInformation trail={trail} />
                        <TrailSeasons seasons={trail.seasons} />
                        <TrailFacilities facilities={trail.facilities} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default memo(HikingTrailDetail);
