import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Equipment {
    name: string;
    description?: string;
    category: 'ESSENTIAL' | 'RECOMMENDED' | 'OPTIONAL';
    availableForRent?: boolean;
}

interface EventEquipmentListProps {
    required: Equipment[];
    recommended: Equipment[];
}

const EventEquipmentList: React.FC<EventEquipmentListProps> = ({ required, recommended }) => {
    const { t } = useTranslation();

    const renderEquipmentItem = (item: Equipment) => (
        <li key={item.name} className="flex items-start py-2 border-b last:border-b-0">
            <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
            <div>
                <span className="font-medium">{item.name}</span>
                {item.description && <p className="text-sm text-gray-600 mt-1">{item.description}</p>}
                <div className="flex gap-2 mt-1">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        {t(`events.equipmentCategory.${item.category}`)}
                    </span>
                    {item.availableForRent && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                            {t('events.availableForRent')}
                        </span>
                    )}
                </div>
            </div>
        </li>
    );

    return (
        <div className="space-y-6">
            {/* Required Equipment */}
            <div>
                <h4 className="font-semibold mb-3">{t('events.requiredEquipment')}</h4>
                <ul className="bg-gray-50 rounded-lg p-4">
                    {required.map(renderEquipmentItem)}
                </ul>
            </div>

            {/* Recommended Equipment */}
            <div>
                <h4 className="font-semibold mb-3">{t('events.recommendedEquipment')}</h4>
                <ul className="bg-gray-50 rounded-lg p-4">
                    {recommended.map(renderEquipmentItem)}
                </ul>
            </div>
        </div>
    );
};

export default EventEquipmentList;
