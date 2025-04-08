import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

// Mock data
const mockEvents = [
    { id: 1, name: 'Spring Trail Cleanup', date: '2023-04-15' },
    { id: 2, name: 'Group Hike: Mountain Ridge', date: '2023-05-02' },
    { id: 3, name: 'Hiking Safety Workshop', date: '2023-05-20' },
];

const EventsList: React.FC = () => {
    const [events] = useState(mockEvents);

    return (
        <div className="events-list">
            <h1>Upcoming Events</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <Link to={`/events/${event.id}`}>
                            <h3>{event.name}</h3>
                            <p>Date: {event.date}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default memo(EventsList);
