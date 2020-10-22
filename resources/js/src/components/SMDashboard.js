import React from 'react';
import FollowerCard from './FollowerCard';

const SMDashboard = (props) => {

    
    const createCard = () => {
        return (
            <FollowerCard infos={props.datos} />
        )
    }

    return(
        <div className="generalStats">
            <div className='header'>
                <h2>Social Media Dashboard</h2>
                <p>Total followers: 23,004</p>
            </div>
            <div className='stats'>
                {createCard()}
            </div>
        </div>
    )
}

export default SMDashboard;