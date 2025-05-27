import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { enUS, ka } from 'date-fns/locale';
import { Star } from 'lucide-react';

interface Review {
    rating: number;
    comment: string;
    userName: string;
    date: Date;
}

interface EventReviewsProps {
    reviews: Review[];
}

const EventReviews: React.FC<EventReviewsProps> = ({ reviews }) => {
    const { t, i18n } = useTranslation();
    const currentLocale = i18n.language === 'ka' ? ka : enUS;

    // Calculate average rating
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

    const formatDate = (date: Date) => {
        return format(date, 'PP', { locale: currentLocale });
    };

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{t('events.reviews')}</h2>
                <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="font-bold">{averageRating.toFixed(1)}</span>
                    <span className="text-gray-600 ml-1">({reviews.length})</span>
                </div>
            </div>

            <div className="space-y-6">
                {reviews.map((review, index) => (
                    <div key={index} className="border-b pb-6 last:border-0">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold">{review.userName}</h3>
                            <span className="text-sm text-gray-500">{formatDate(review.date)}</span>
                        </div>

                        <div className="flex mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                    fill={i < review.rating ? 'currentColor' : 'none'}
                                />
                            ))}
                        </div>

                        <p className="text-gray-700">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventReviews;
