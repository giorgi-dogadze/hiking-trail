import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
    return (
        <div className="landing-page">
            <h1>Welcome to Hiking Trail</h1>
            <div className="navigation-links">
                <Link to="/hiking-trails">Explore Hiking Trails</Link>
                <Link to="/events">Discover Events</Link>
                <Link to="/equipment">Browse Equipment</Link>
            </div>
        </div>
    );
};

export default memo(Landing);
