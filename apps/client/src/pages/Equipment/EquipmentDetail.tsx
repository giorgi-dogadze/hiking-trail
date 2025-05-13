import React, { memo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Footer, Header } from '@/components/core';
import { equipments, Equipment, AvailabilityStatus, SeasonRating } from './equipments.data';
import { ArrowLeft, Package, Weight, Ruler, Palette, Cloud, Calendar, Award, Check, X, Star, Tag, Info, Globe, Recycle, Clock, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const EquipmentDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [equipment, setEquipment] = useState<Equipment | null>(null);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        // Find equipment by ID
        if (id) {
            const foundEquipment = equipments.find(e => e.id === id);
            setEquipment(foundEquipment || null);
        }
        setLoading(false);
    }, [id]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
    );

    if (!equipment) return (
        <div className="min-h-screen flex items-center justify-center flex-col gap-4">
            <h1 className="text-2xl font-bold">{t('equipment.notFound')}</h1>
            <Link to="/equipment">
                <Button>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('equipment.backToEquipment')}
                </Button>
            </Link>
        </div>
    );

    // Function to render availability status
    const renderAvailabilityStatus = () => {
        switch (equipment.stock.status) {
            case AvailabilityStatus.IN_STOCK:
                return <Badge className="bg-green-500">{t('equipment.inStock')}</Badge>;
            case AvailabilityStatus.LOW_STOCK:
                return <Badge className="bg-yellow-500">{t('equipment.lowStock')}</Badge>;
            case AvailabilityStatus.OUT_OF_STOCK:
                return <Badge className="bg-red-500">{t('equipment.outOfStock')}</Badge>;
            case AvailabilityStatus.PRE_ORDER:
                return <Badge className="bg-blue-500">{t('equipment.preOrder')}</Badge>;
            default:
                return null;
        }
    };

    // Function to render price with possible discount
    const renderPrice = () => {
        const { amount, currency, discountAmount } = equipment.price;

        if (discountAmount) {
            return (
                <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold">{discountAmount} {currency}</span>
                    <span className="text-xl line-through text-gray-500">{amount} {currency}</span>
                </div>
            );
        }

        return <span className="text-3xl font-bold">{amount} {currency}</span>;
    };

    // Function to render seasons
    const renderSeasons = () => {
        switch (equipment.seasonRating) {
            case SeasonRating.ALL_SEASON:
                return (
                    <div className="flex gap-2">
                        <Badge className="bg-green-100 text-green-800">{t('equipment.seasons.SPRING')}</Badge>
                        <Badge className="bg-yellow-100 text-yellow-800">{t('equipment.seasons.SUMMER')}</Badge>
                        <Badge className="bg-orange-100 text-orange-800">{t('equipment.seasons.AUTUMN')}</Badge>
                        <Badge className="bg-blue-100 text-blue-800">{t('equipment.seasons.WINTER')}</Badge>
                    </div>
                );
            case SeasonRating.SPRING:
                return <Badge className="bg-green-100 text-green-800">{t('equipment.seasons.SPRING')}</Badge>;
            case SeasonRating.SUMMER:
                return <Badge className="bg-yellow-100 text-yellow-800">{t('equipment.seasons.SUMMER')}</Badge>;
            case SeasonRating.AUTUMN:
                return <Badge className="bg-orange-100 text-orange-800">{t('equipment.seasons.AUTUMN')}</Badge>;
            case SeasonRating.WINTER:
                return <Badge className="bg-blue-100 text-blue-800">{t('equipment.seasons.WINTER')}</Badge>;
            default:
                return null;
        }
    };

    return (
        <div>
            <Header />
            <main className="container mx-auto py-8 px-4">
                <div className="mb-6">
                    <Link to="/equipment" className="flex items-center text-gray-600 hover:text-gray-900">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {t('equipment.backToEquipment')}
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Image */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                                <div className="aspect-square overflow-hidden rounded-md mb-4">
                                    <img
                                        src={equipment.image}
                                        alt={equipment.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex justify-between items-center mb-4">
                                    {renderPrice()}
                                    {renderAvailabilityStatus()}
                                </div>

                                <div className="space-y-4">
                                    <Button className="w-full">
                                        <Heart className="w-4 h-4 mr-2" />
                                        {t('equipment.addToWishlist')}
                                    </Button>
                                    <Button className="w-full bg-green-600 hover:bg-green-700" disabled={equipment.stock.status === AvailabilityStatus.OUT_OF_STOCK}>
                                        {t('equipment.buyNow')}
                                    </Button>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold mb-3">{t('equipment.specifications.title')}</h3>
                                <Separator className="mb-4" />

                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <Package className="w-4 h-4 mr-3 text-gray-500 mt-1" />
                                        <div>
                                            <p className="text-sm text-gray-500">{t('equipment.specifications.weight')}</p>
                                            <p>{equipment.weight.value} {equipment.weight.unit}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Ruler className="w-4 h-4 mr-3 text-gray-500 mt-1" />
                                        <div>
                                            <p className="text-sm text-gray-500">{t('equipment.specifications.dimensions')}</p>
                                            <p>{equipment.dimensions.length} × {equipment.dimensions.width} × {equipment.dimensions.height} {equipment.dimensions.unit}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Palette className="w-4 h-4 mr-3 text-gray-500 mt-1" />
                                        <div>
                                            <p className="text-sm text-gray-500">{t('equipment.specifications.material')}</p>
                                            <p>{equipment.material}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Tag className="w-4 h-4 mr-3 text-gray-500 mt-1" />
                                        <div>
                                            <p className="text-sm text-gray-500">{t('equipment.specifications.color')}</p>
                                            <p>{equipment.color}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Calendar className="w-4 h-4 mr-3 text-gray-500 mt-1" />
                                        <div>
                                            <p className="text-sm text-gray-500">{t('equipment.specifications.season')}</p>
                                            <div className="mt-1">
                                                {renderSeasons()}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Globe className="w-4 h-4 mr-3 text-gray-500 mt-1" />
                                        <div>
                                            <p className="text-sm text-gray-500">{t('equipment.specifications.origin')}</p>
                                            <p>{equipment.origin}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Shield className="w-4 h-4 mr-3 text-gray-500 mt-1" />
                                        <div>
                                            <p className="text-sm text-gray-500">{t('equipment.specifications.warranty')}</p>
                                            <p>{equipment.warrantyInMonths} {t('equipment.specifications.months')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:col-span-2">
                        {/* Title and Rating */}
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold mb-2">{equipment.name}</h1>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < Math.round(equipment.rating.average)
                                                ? 'text-yellow-400 fill-yellow-400'
                                                : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-600">
                                        ({equipment.rating.count} {t('equipment.reviews')})
                                    </span>
                                </div>

                                <Badge className="bg-gray-200 text-gray-800">
                                    {t(`equipment.categories.${equipment.categoryId}`)}
                                </Badge>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h2 className="text-xl font-bold mb-3">{t('description')}</h2>
                            <p className="text-gray-700 whitespace-pre-line">
                                {equipment.description}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h2 className="text-xl font-bold mb-4">
                                {t('equipment.features')}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {equipment.features.map((feature, index) => (
                                    <div key={index} className="flex items-start">
                                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Weather Resistance */}
                        {Object.keys(equipment.weatherResistance).length > 0 && (
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <h2 className="text-xl font-bold mb-4 flex items-center">
                                    <Cloud className="w-5 h-5 mr-2" />
                                    {t('equipment.weatherResistance')}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                                    {Object.entries(equipment.weatherResistance).map(([key, value]) => (
                                        <div key={key} className="flex items-center">
                                            {typeof value === 'boolean' ? (
                                                value ? (
                                                    <Check className="w-5 h-5 text-green-500 mr-2" />
                                                ) : (
                                                    <X className="w-5 h-5 text-red-500 mr-2" />
                                                )
                                            ) : (
                                                <Info className="w-5 h-5 text-blue-500 mr-2" />
                                            )}
                                            <div>
                                                <span className="font-medium">
                                                    {t(`equipment.weatherProperties.${key}`)}
                                                </span>
                                                {typeof value !== 'boolean' && (
                                                    <span className="ml-2 text-gray-600">{value}</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Recommended For */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h2 className="text-xl font-bold mb-4">
                                {t('equipment.recommendedFor')}
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium text-gray-700 mb-2">
                                        {t('equipment.recommendedFor.difficulty')}:
                                    </h3>
                                    <Badge className="bg-blue-100 text-blue-800">
                                        {t(`equipment.difficulty.${equipment.recommendedFor.difficulty}`)}
                                    </Badge>
                                </div>

                                <div>
                                    <h3 className="font-medium text-gray-700 mb-2">
                                        {t('equipment.recommendedFor.terrain')}:
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {equipment.recommendedFor.terrain.map((item, index) => (
                                            <Badge key={index} className="bg-green-100 text-green-800">
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium text-gray-700 mb-2">
                                        {t('equipment.recommendedFor.activities')}:
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {equipment.recommendedFor.activities.map((item, index) => (
                                            <Badge key={index} className="bg-purple-100 text-purple-800">
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Maintenance */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h2 className="text-xl font-bold mb-3 flex items-center">
                                <Info className="w-5 h-5 mr-2" />
                                {t('equipment.maintenance')}
                            </h2>
                            <p className="text-gray-700">
                                {equipment.maintenanceInfo}
                            </p>
                        </div>

                        {/* Eco Information */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h2 className="text-xl font-bold mb-3 flex items-center">
                                <Recycle className="w-5 h-5 mr-2" />
                                {t('equipment.ecoInfo')}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div className="flex items-center">
                                    {equipment.eco.sustainable ? (
                                        <Check className="w-5 h-5 text-green-500 mr-2" />
                                    ) : (
                                        <X className="w-5 h-5 text-red-500 mr-2" />
                                    )}
                                    <span>{t('equipment.ecoProps.sustainable')}</span>
                                </div>

                                <div className="flex items-center">
                                    {equipment.eco.recyclable ? (
                                        <Check className="w-5 h-5 text-green-500 mr-2" />
                                    ) : (
                                        <X className="w-5 h-5 text-red-500 mr-2" />
                                    )}
                                    <span>{t('equipment.ecoProps.recyclable')}</span>
                                </div>
                            </div>

                            <p className="text-gray-700">
                                {equipment.eco.description}
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-3">
                                {t('equipment.tags')}
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {equipment.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Last Updated */}
                        <div className="text-sm text-gray-500 flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {t('equipment.lastUpdated')}: {new Date(equipment.lastUpdated).toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default memo(EquipmentDetail);
