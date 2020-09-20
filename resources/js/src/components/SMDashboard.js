import React from 'react';
import FollowerCard from './FollowerCard';


const SMDashboard = () => {
    return(
        <div className="generalStats">
            <div className='header'>
                <h2>Social Media Dashboard</h2>
                <p>Total followers: 23,004</p>
            </div>
            <div className='stats'>
                <FollowerCard />
                <FollowerCard />
                <FollowerCard />
                <FollowerCard />
            </div>
        </div>
    )
}

export default SMDashboard;