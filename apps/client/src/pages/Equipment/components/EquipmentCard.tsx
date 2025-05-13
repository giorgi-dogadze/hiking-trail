import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Equipment, AvailabilityStatus, Categories } from '../equipments.data';
import { Tag, ArrowRight, DollarSign, Package2 } from 'lucide-react';

interface EquipmentCardProps {
    equipment: Equipment;
    viewMode: 'grid' | 'list';
    onClick: (id: string) => void;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ equipment, viewMode, onClick }) => {
    const { t } = useTranslation();

    const handleClick = () => {
        onClick(equipment.id);
    };

    const renderAvailabilityBadge = () => {
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

    const renderPrice = () => {
        const { amount, currency, discountAmount } = equipment.price;

        if (discountAmount) {
            return (
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">{discountAmount} {currency}</span>
                    <span className="text-sm line-through text-gray-500">{amount} {currency}</span>
                </div>
            );
        }

        return <span className="text-lg font-bold">{amount} {currency}</span>;
    };

    // Find the category name using the categoryId
    const categoryName = Categories.find(cat => cat.id === equipment.categoryId)?.name || '';

    if (viewMode === 'grid') {
        return (
            <div
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
                onClick={handleClick}
            >
                <div className="h-48 overflow-hidden relative">
                    <img
                        src={equipment.image}
                        alt={equipment.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                        {renderAvailabilityBadge()}
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="font-bold text-lg mb-1 line-clamp-1">{equipment.name}</h3>

                    <div className="flex justify-between items-center mb-2">
                        {renderPrice()}
                        <Badge className="bg-gray-200 text-gray-800">
                            {t(`equipment.categories.${equipment.categoryId}`, categoryName)}
                        </Badge>
                    </div>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {equipment.description.substring(0, 100)}...
                    </p>

                    <div className="flex items-center text-sm text-gray-500">
                        <Package2 size={16} className="mr-1" />
                        <span>
                            {equipment.weight.value} {equipment.weight.unit}
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 flex"
            onClick={handleClick}
        >
            <div className="w-1/4 min-w-[200px] max-w-xs">
                <img
                    src={equipment.image}
                    alt={equipment.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-5 flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-xl mb-2">{equipment.name}</h3>
                        <div className="flex gap-2 mb-3">
                            <Badge className="bg-gray-200 text-gray-800">
                                {t(`equipment.categories.${equipment.categoryId}`, categoryName)}
                            </Badge>
                            <Badge className="bg-gray-200 text-gray-800">
                                {t(`equipment.seasons.${equipment.seasonRating}`)}
                            </Badge>
                            {renderAvailabilityBadge()}
                        </div>
                    </div>

                    <div className="text-right">
                        {renderPrice()}
                    </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                    {equipment.description}
                </p>

                <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center text-sm text-gray-500">
                        <Package2 size={16} className="mr-1" />
                        <span>
                            {equipment.weight.value} {equipment.weight.unit}
                        </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                        <DollarSign size={16} className="mr-1" />
                        <span>
                            {equipment.origin}
                        </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                        <Tag size={16} className="mr-1" />
                        <span>
                            {equipment.material.substring(0, 20)}...
                        </span>
                    </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {equipment.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                    {equipment.tags.length > 3 && (
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            +{equipment.tags.length - 3}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex items-center pr-4">
                <ArrowRight className="text-gray-400" />
            </div>
        </div>
    );
};

export default EquipmentCard;
