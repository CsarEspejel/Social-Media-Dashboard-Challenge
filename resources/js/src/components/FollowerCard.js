import React from 'react';


const FollowerCard = () => {
    return(
        <div className='card'>
            
            <div className='username'>
                <i className="fab fa-facebook-square" />
                <p>@username</p>
            </div>
            <div className='followers'>
                <h3>1234</h3>
                <p>FOLLOWERS</p>
            </div>
            <div className='porcent'>
                <p><i className='fas fa-sort-up'></i>12 Today</p>
            </div>
            
        </div>
    )
}

export default FollowerCard;