/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { memo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { enUS, ka } from 'date-fns/locale';
import { hikingEvents } from './events.data';
import { HikingEvent, TripStatus } from './types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import {
    ArrowLeft, Calendar, Clock, Flag, MapPin, Compass, Mountain, Users,
    Star, Info, AlertTriangle, Tent, Utensils, CheckCircle,
    X, HelpCircle, GitFork, Check
} from 'lucide-react';

import EventImageGallery from './components/EventImageGallery';
import EventItineraryTimeline from './components/EventItineraryTimeline';
import EventEquipmentList from './components/EventEquipmentList';
import EventRegistrationCard from './components/EventRegistrationCard';
import EventReviews from './components/EventReviews';
import EventFAQ from './components/EventFAQ';
import { Footer, Header } from '@/components/core';
import EventLocationMap from './components/EventLocationMap/EventLocationMap';

const EventDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [event, setEvent] = useState<HikingEvent | null>(null);
    const [loading, setLoading] = useState(true);
    const { t, i18n } = useTranslation();

    const currentLocale = i18n.language === 'ka' ? ka : enUS;

    useEffect(() => {
        // Find event by ID
        if (id) {
            const foundEvent = hikingEvents.find(e => e.id === id);
            setEvent(foundEvent || null);
        }
        setLoading(false);
    }, [id]);

    const getStatusColor = (status: TripStatus) => {
        switch (status) {
            case TripStatus.UPCOMING: return 'bg-blue-500';
            case TripStatus.ONGOING: return 'bg-green-500';
            case TripStatus.COMPLETED: return 'bg-gray-500';
            case TripStatus.CANCELLED: return 'bg-red-500';
            default: return 'bg-blue-500';
        }
    };

    const formatDate = (date: Date) => {
        return format(date, 'PPP', { locale: currentLocale });
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
    );

    if (!event) return (
        <div className="min-h-screen flex items-center justify-center flex-col gap-4">
            <h1 className="text-2xl font-bold">{t('events.notFound')}</h1>
            <Link to="/events">
                <Button>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('events.backToEvents')}
                </Button>
            </Link>
        </div>
    );

    return (
        <div className="bg-gray-50">
            <Header />

            {/* Hero Section */}
            <div className="relative h-96 overflow-hidden">
                {event.images && event.images.length > 0 && (
                    <div className="absolute inset-0">
                        <img
                            src={event.images[3]}
                            alt={event.title}
                            className="w-full h-full object-cover"
                        />
                        {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
                    </div>
                )}
                <div className="relative container mx-auto h-full flex flex-col justify-end pb-8 px-4">
                    <Link to="/events" className="text-white mb-4 inline-flex items-center">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        {t('events.backToEvents')}
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{event.title}</h1>

                    <div className="flex flex-wrap gap-3">
                        <Badge className={`${getStatusColor(event.status)} text-white`}>
                            {t(`events.status.${event.status}`)}
                        </Badge>
                        <Badge className="bg-orange-500 text-white">
                            {t(`events.difficulty.${event.difficulty}`)}
                        </Badge>
                    </div>
                </div>
            </div>

            <main className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Quick Overview */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                    <Calendar className="h-6 w-6 text-blue-600 mb-2" />
                                    <p className="text-sm text-gray-500">{t('events.card.dates')}</p>
                                    <p className="text-sm font-medium text-center">
                                        {formatDate(event.startDate)} - {formatDate(event.endDate)}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                    <Clock className="h-6 w-6 text-blue-600 mb-2" />
                                    <p className="text-sm text-gray-500">{t('events.card.duration')}</p>
                                    <p className="text-sm font-medium">
                                        {event.duration.days} {t('events.filters.days')}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                    <Flag className="h-6 w-6 text-blue-600 mb-2" />
                                    <p className="text-sm text-gray-500">{t('events.card.distance')}</p>
                                    <p className="text-sm font-medium">
                                        {event.distance} {t('events.filters.km')}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                    <MapPin className="h-6 w-6 text-blue-600 mb-2" />
                                    <p className="text-sm text-gray-500">{t('location')}</p>
                                    <p className="text-sm font-medium text-center">{event.location.name}</p>
                                </div>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <EventImageGallery images={event.images} title={event.title} />

                        {/* Description */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-2xl font-bold mb-4">{t('description')}</h2>
                            <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
                        </div>

                        {/* Tabs for Different Sections */}
                        <Tabs defaultValue="itinerary" className="bg-white rounded-lg shadow">
                            <TabsList className="w-full border-b p-0 bg-transparent">
                                <TabsTrigger value="itinerary" className="flex-1 py-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                                    <GitFork className="w-4 h-4 mr-2" />
                                    {t('events.itinerary')}
                                </TabsTrigger>
                                <TabsTrigger value="highlights" className="flex-1 py-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                                    <Star className="w-4 h-4 mr-2" />
                                    {t('highlights')}
                                </TabsTrigger>
                                <TabsTrigger value="equipment" className="flex-1 py-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                                    <Compass className="w-4 h-4 mr-2" />
                                    {t('events.equipment')}
                                </TabsTrigger>
                                <TabsTrigger value="hazards" className="flex-1 py-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                                    <AlertTriangle className="w-4 h-4 mr-2" />
                                    {t('hazards')}
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="itinerary" className="p-6">
                                <h3 className="text-xl font-bold mb-4">{t('events.itinerary')}</h3>
                                <EventItineraryTimeline itinerary={event.itinerary} />
                            </TabsContent>

                            <TabsContent value="highlights" className="p-6">
                                <h3 className="text-xl font-bold mb-4">{t('highlights')}</h3>
                                <ul className="space-y-2">
                                    {event.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                {event.activities.length > 0 && (
                                    <div className="mt-8">
                                        <h4 className="text-lg font-semibold mb-3">{t('events.activities')}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {event.activities.map((activity, index) => (
                                                <Badge key={index} variant="outline" className="bg-blue-50">
                                                    {activity}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Card>
                                        <CardContent className="pt-6">
                                            <h4 className="flex items-center text-lg font-semibold mb-3">
                                                <Tent className="h-5 w-5 mr-2 text-blue-600" />
                                                {t('events.accommodation')}
                                            </h4>
                                            <p className="text-gray-700">
                                                {event.includesAccommodation ? (
                                                    <span className="flex items-center text-green-600">
                                                        <Check className="h-4 w-4 mr-1" />
                                                        {t('events.included')}
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center text-red-600">
                                                        <X className="h-4 w-4 mr-1" />
                                                        {t('events.notIncluded')}
                                                    </span>
                                                )}
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className="pt-6">
                                            <h4 className="flex items-center text-lg font-semibold mb-3">
                                                <Utensils className="h-5 w-5 mr-2 text-blue-600" />
                                                {t('events.food')}
                                            </h4>
                                            <p className="text-gray-700">
                                                {event.includesFood ? (
                                                    <span className="flex items-center text-green-600">
                                                        <Check className="h-4 w-4 mr-1" />
                                                        {t('events.included')}
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center text-red-600">
                                                        <X className="h-4 w-4 mr-1" />
                                                        {t('events.notIncluded')}
                                                    </span>
                                                )}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                            <TabsContent value="equipment" className="p-6">
                                <h3 className="text-xl font-bold mb-4">{t('events.equipment')}</h3>
                                <EventEquipmentList
                                    required={event.requiredEquipment}
                                    recommended={event.recommendedEquipment}
                                />
                            </TabsContent>

                            <TabsContent value="hazards" className="p-6">
                                <h3 className="text-xl font-bold mb-4">{t('events.hazards')}</h3>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                                    <ul className="space-y-2">
                                        {event.dangers.map((danger, index) => (
                                            <li key={index} className="flex items-start">
                                                <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{danger}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <h4 className="text-lg font-semibold mb-3">{t('events.requirements')}</h4>
                                <ul className="space-y-2">
                                    {event.requirementsAndPreparation.map((req, index) => (
                                        <li key={index} className="flex items-start">
                                            <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{req}</span>
                                        </li>
                                    ))}
                                </ul>

                                {event.ageRestriction && (
                                    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                                        <h4 className="text-lg font-semibold mb-2">{t('events.ageRestriction')}</h4>
                                        <p className="text-gray-700">
                                            {t('events.minAge')}: {event.ageRestriction.minAge} {t('events.years')}
                                            {event.ageRestriction.maxAge && (
                                                <>, {t('events.maxAge')}: {event.ageRestriction.maxAge} {t('events.years')}</>
                                            )}
                                        </p>
                                    </div>
                                )}
                            </TabsContent>
                        </Tabs>

                        {/* Map and Location */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-2xl font-bold mb-4">{t('events.location')}</h2>
                            <div className="mb-4">
                                <p className="flex items-start mb-2">
                                    <MapPin className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">
                                        {event.location.name}, {event.location.region}
                                    </span>
                                </p>
                                <p className="flex items-start mb-2">
                                    <Flag className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">
                                        {t('events.meetingPoint')}: {event.location.meetingPoint}
                                    </span>
                                </p>
                                <p className="flex items-start">
                                    <Mountain className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">
                                        {t('events.elevation')}: {event.location.elevation.start}m - {event.location.elevation.peak}m
                                    </span>
                                </p>
                            </div>
                            <EventLocationMap
                                lat={event.location.coordinates.latitude}
                                lng={event.location.coordinates.longitude}
                                name={event.location.name}
                                showMestiaToUshguliRoute
                                event={event}
                            />
                        </div>

                        {/* Organizer Information */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-2xl font-bold mb-4">{t('events.organizer')}</h2>
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    {event.organizer.profilePicture ? (
                                        <img
                                            src={event.organizer.profilePicture}
                                            alt={event.organizer.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    ) : (
                                        <Users className="h-8 w-8 text-blue-600" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{event.organizer.name}</h3>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                        <span className="text-gray-700">{event.organizer.rating} • {event.organizer.yearsOfExperience} {t('events.yearsOfExperience')}</span>
                                    </div>
                                </div>
                            </div>

                            {event.organizer.certifications && event.organizer.certifications.length > 0 && (
                                <div className="mb-4">
                                    <h4 className="text-md font-semibold mb-2">{t('events.certifications')}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {event.organizer.certifications.map((cert, index) => (
                                            <Badge key={index} variant="outline" className="bg-green-50">
                                                {cert}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {event.guides && event.guides.length > 0 && (
                                <div>
                                    <h4 className="text-md font-semibold mb-2">{t('events.guides')}</h4>
                                    <div className="space-y-3">
                                        {event.guides.map((guide, index) => (
                                            <div key={index} className="flex items-center">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                                    {guide.profilePicture ? (
                                                        <img
                                                            src={guide.profilePicture}
                                                            alt={guide.name}
                                                            className="w-full h-full rounded-full object-cover"
                                                        />
                                                    ) : (
                                                        <Users className="h-6 w-6 text-blue-600" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-medium">{guide.name}</p>
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <Star className="h-3 w-3 text-yellow-500 mr-1" />
                                                        <span>{guide.rating} • {guide.yearsOfExperience} {t('events.yearsOfExperience')}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Reviews */}
                        {event.reviews && event.reviews.length > 0 && (
                            <EventReviews reviews={event.reviews} />
                        )}

                        {/* FAQ */}
                        {event.faq && event.faq.length > 0 && (
                            <EventFAQ faqs={event.faq} />
                        )}

                        {/* Cancellation Policy */}
                        {event.cancellationPolicy && (
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-2xl font-bold mb-4 flex items-center">
                                    <HelpCircle className="h-6 w-6 mr-2 text-blue-600" />
                                    {t('events.cancellationPolicy')}
                                </h2>
                                <p className="text-gray-700 whitespace-pre-line">{event.cancellationPolicy}</p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Registration Card */}
                        <EventRegistrationCard
                            price={event.price}
                            currency={event.currency}
                            startDate={event.startDate}
                            endDate={event.endDate}
                            deadline={event.registrationDeadline}
                            maxParticipants={event.maxParticipants}
                            currentParticipants={event.currentParticipants}
                            //@ts-expect-error
                            earlyBirdDiscount={event.earlyBirdDiscount}
                            //@ts-expect-error
                            groupDiscount={event.groupDiscount}
                            status={event.status}
                        />

                        {/* Included Services */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-bold mb-3">{t('events.includedServices')}</h3>
                            <ul className="space-y-2">
                                {event.includedServices.map((service, index) => (
                                    <li key={index} className="flex items-start">
                                        <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tour Details Card */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-bold mb-3">{t('events.tourDetails')}</h3>
                            <dl className="space-y-3">
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">{t('hikingRoutes.difficultyLevel')}</dt>
                                    <dd className="font-medium">{t(`events.difficulty.${event.difficulty}`)}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">{t('events.season')}</dt>
                                    <dd className="font-medium">{t(`equipment.seasons.${event.season}`)}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">{t('events.terrain')}</dt>
                                    <dd className="font-medium text-right">
                                        {event.terrain.map((item, index) => (
                                            <Badge key={index} variant="outline" className="bg-blue-50 text-xs">
                                                {t(`events.terrainType.${item}`)}
                                            </Badge>
                                        ))}
                                    </dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">{t('events.fitnessLevel')}</dt>
                                    <dd className="font-medium">{event.fitnessLevel}</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-gray-500">{t('events.expectedWeather')}</dt>
                                    <dd className="font-medium">
                                        <div className="flex flex-wrap gap-1">
                                            {event.expectedWeather.map((weather, index) => (
                                                <Badge key={index} variant="outline" className="bg-blue-50 text-xs">
                                                    {t(`events.weather.${weather}`)}
                                                </Badge>
                                            ))}
                                        </div>
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        {/* Tags */}
                        {event.tags && event.tags.length > 0 && (
                            <div className="bg-white rounded-lg shadow p-6">
                                <h3 className="text-lg font-bold mb-3">{t('events.tags')}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {event.tags.map((tag, index) => (
                                        <Badge key={index} variant="outline" className="bg-gray-50">
                                            #{tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Share */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-bold mb-3">{t('events.shareThis')}</h3>
                            <div className="flex gap-3">
                                <Button variant="outline" size="sm">
                                    {t('events.copyLink')}
                                </Button>
                                {/* Social media sharing buttons would go here */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default memo(EventDetail);
