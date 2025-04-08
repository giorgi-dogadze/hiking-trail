import React, { memo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock data
const mockEquipmentDetails = {
    1: { id: 1, name: 'Hiking Boots', category: 'Footwear', price: '$120', description: 'Durable waterproof hiking boots with excellent ankle support.', features: ['Waterproof', 'Vibram soles', 'Breathable'] },
    2: { id: 2, name: 'Backpack', category: 'Gear', price: '$85', description: '35L backpack perfect for day hikes with multiple compartments.', features: ['35L capacity', 'Hydration compatible', 'Rain cover included'] },
    3: { id: 3, name: 'Water Filter', category: 'Gear', price: '$45', description: 'Compact water filter that removes 99.9% of bacteria and parasites.', features: ['Filters 1000L', 'Lightweight', 'Easy to use'] },
};

const EquipmentDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [equipment, setEquipment] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            if (id && mockEquipmentDetails[id as unknown as keyof typeof mockEquipmentDetails]) {
                setEquipment(mockEquipmentDetails[id as unknown as keyof typeof mockEquipmentDetails]);
            }
            setLoading(false);
        }, 500);
    }, [id]);

    if (loading) return <div>Loading equipment details...</div>;
    if (!equipment) return <div>Equipment not found</div>;

    return (
        <div className="equipment-detail">
            <h1>{equipment.name}</h1>
            <div className="equipment-info">
                <p><strong>Category:</strong> {equipment.category}</p>
                <p><strong>Price:</strong> {equipment.price}</p>
            </div>
            <div className="equipment-description">
                <h2>Description</h2>
                <p>{equipment.description}</p>
            </div>
            <div className="equipment-features">
                <h2>Features</h2>
                <ul>
                    {equipment.features.map((feature: string, index: number) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
            <Link to="/equipment">Back to Equipment</Link>
        </div>
    );
};

export default memo(EquipmentDetail);
