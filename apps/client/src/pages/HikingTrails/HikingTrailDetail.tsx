import React, { memo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock data
const mockTrailDetails = {
    1: { id: 1, name: 'Mountain Ridge Trail', difficulty: 'Moderate', length: '8.5 miles', elevation: '1200 ft', description: 'A beautiful trail with stunning mountain views.' },
    2: { id: 2, name: 'Lake View Path', difficulty: 'Easy', length: '3.2 miles', elevation: '400 ft', description: 'An easy walk around a scenic lake.' },
    3: { id: 3, name: 'Valley Discovery Route', difficulty: 'Hard', length: '12 miles', elevation: '2800 ft', description: 'A challenging hike through diverse terrain.' },
};

const HikingTrailDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [trail, setTrail] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            if (id && mockTrailDetails[id as unknown as keyof typeof mockTrailDetails]) {
                setTrail(mockTrailDetails[id as unknown as keyof typeof mockTrailDetails]);
            }
            setLoading(false);
        }, 500);
    }, [id]);

    if (loading) return <div>Loading trail details...</div>;
    if (!trail) return <div>Trail not found</div>;

    return (
        <div className="hiking-trail-detail">
            <h1>{trail.name}</h1>
            <div className="trail-stats">
                <p><strong>Difficulty:</strong> {trail.difficulty}</p>
                <p><strong>Length:</strong> {trail.length}</p>
                <p><strong>Elevation Gain:</strong> {trail.elevation}</p>
            </div>
            <div className="trail-description">
                <h2>Description</h2>
                <p>{trail.description}</p>
            </div>
            <Link to="/hiking-trails">Back to Trails</Link>
        </div>
    );
};

export default memo(HikingTrailDetail);
