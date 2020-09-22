import React from 'react';

const FollowerCard = (props) => {

    const icon = (type) => {
        return "fab fa-"+type
    };

    return(
        props.infos.map(info => {
            return <div className='card' key={info._id}>
                <div className='username'>
                    <i className={icon(info.type)} />
                    <p>{info.username}</p>
                </div>
                <div className='followers'>
                    <h3>{info.followers}</h3>
                    <p>FOLLOWERS</p>
                </div>
                <div className='percent'>
                    <i className='fas fa-sort-up'></i>
                    <p>{info.percent} Today</p>
                </div>
                
            </div>
        })
    );
}

export default FollowerCard;