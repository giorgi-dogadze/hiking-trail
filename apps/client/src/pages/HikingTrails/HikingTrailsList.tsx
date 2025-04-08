import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data
const mockTrails = [
    { id: 1, name: 'Mountain Ridge Trail', difficulty: 'Moderate' },
    { id: 2, name: 'Lake View Path', difficulty: 'Easy' },
    { id: 3, name: 'Valley Discovery Route', difficulty: 'Hard' },
];

const HikingTrailsList: React.FC = () => {
    const [trails] = useState(mockTrails);

    return (
        <div className="hiking-trails-list">
            <h1>Hiking Trails</h1>
            <ul>
                {trails.map(trail => (
                    <li key={trail.id}>
                        <Link to={`/hiking-trails/${trail.id}`}>
                            <h3>{trail.name}</h3>
                            <p>Difficulty: {trail.difficulty}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default memo(HikingTrailsList);
