import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

interface EventImageGalleryProps {
    images: string[];
    title: string;
}

const EventImageGallery: React.FC<EventImageGalleryProps> = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showLightbox, setShowLightbox] = useState(false);
    const { t } = useTranslation();

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setShowLightbox(true);
    };

    return (
        <>
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-4">{t('gallery')}</h2>
                <div className="grid grid-cols-4 gap-2">
                    <div className="col-span-2 row-span-2">
                        <img
                            src={images[0]}
                            alt={`${title} - 1`}
                            className="w-full h-full object-cover rounded-lg cursor-pointer"
                            onClick={() => openLightbox(0)}
                            style={{ height: '300px' }}
                        />
                    </div>
                    {images.slice(1, 5).map((image, index) => (
                        <div key={index} className="col-span-1">
                            <img
                                src={image}
                                alt={`${title} - ${index + 2}`}
                                className="w-full h-32 object-cover rounded-lg cursor-pointer"
                                onClick={() => openLightbox(index + 1)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {showLightbox && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white"
                        onClick={() => setShowLightbox(false)}
                    >
                        <X className="h-6 w-6" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 text-white"
                        onClick={handlePrev}
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </Button>

                    <img
                        src={images[currentIndex]}
                        alt={`${title} - ${currentIndex + 1}`}
                        className="max-h-[80vh] max-w-full object-contain"
                    />

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 text-white"
                        onClick={handleNext}
                    >
                        <ChevronRight className="h-8 w-8" />
                    </Button>

                    <div className="absolute bottom-4 text-white text-sm">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
};

export default EventImageGallery;
