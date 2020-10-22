import React from 'react';

const OverviewCard = (props) => {

    const icon = (type) => {
        return type+' fab fa-'+type
    }

    return props.infos.map(info => {
        return(
            <div className="cards">
                <div className="overview-card" key={info._id}>
                    <div className="title">
                        <p>Likes</p>
                        <i className={icon(info.type)} />
                    </div>
                    <div className="body">
                        <p>{info.likes}</p>
                        <p>{info.percent}%</p>
                    </div>
                </div>

                <div className="overview-card">
                    <div className="title">
                        <p>{info.tag}</p>
                        <i className={icon(info.type)} />
                    </div>
                    <div className="body">
                        <p>{info.actions}</p>
                        <p>{info.percent}%</p>
                    </div>
                </div>
            </div>
        );
    });
    // return(
        
    // )
}

export default OverviewCard;