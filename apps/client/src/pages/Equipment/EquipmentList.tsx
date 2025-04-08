import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data
const mockEquipment = [
    { id: 1, name: 'Hiking Boots', category: 'Footwear' },
    { id: 2, name: 'Backpack', category: 'Gear' },
    { id: 3, name: 'Water Filter', category: 'Gear' },
];

const EquipmentList: React.FC = () => {
    const [equipment] = useState(mockEquipment);

    return (
        <div className="equipment-list">
            <h1>Hiking Equipment</h1>
            <ul>
                {equipment.map(item => (
                    <li key={item.id}>
                        <Link to={`/equipment/${item.id}`}>
                            <h3>{item.name}</h3>
                            <p>Category: {item.category}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default EquipmentList;
