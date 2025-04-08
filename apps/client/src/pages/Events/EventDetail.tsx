import React, { memo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock data
const mockEventDetails = {
    1: { id: 1, name: 'Spring Trail Cleanup', date: '2023-04-15', time: '9:00 AM - 12:00 PM', location: 'Mountain Ridge Trailhead', description: 'Join us for our annual trail cleanup. Tools and refreshments provided!' },
    2: { id: 2, name: 'Group Hike: Mountain Ridge', date: '2023-05-02', time: '8:00 AM - 2:00 PM', location: 'Mountain Ridge Trailhead', description: 'A guided group hike through the beautiful Mountain Ridge Trail.' },
    3: { id: 3, name: 'Hiking Safety Workshop', date: '2023-05-20', time: '10:00 AM - 12:00 PM', location: 'Community Center', description: 'Learn essential hiking safety tips from experienced guides.' },
};

const EventDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [event, setEvent] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            if (id && mockEventDetails[id as unknown as keyof typeof mockEventDetails]) {
                setEvent(mockEventDetails[id as unknown as keyof typeof mockEventDetails]);
            }
            setLoading(false);
        }, 500);
    }, [id]);

    if (loading) return <div>Loading event details...</div>;
    if (!event) return <div>Event not found</div>;

    return (
        <div className="event-detail">
            <h1>{event.name}</h1>
            <div className="event-info">
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
            </div>
            <div className="event-description">
                <h2>Description</h2>
                <p>{event.description}</p>
            </div>
            <Link to="/events">Back to Events</Link>
        </div>
    );
};

export default memo(EventDetail);
