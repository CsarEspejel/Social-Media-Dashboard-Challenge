import { reduce } from 'lodash';
import React from 'react';

const OverviewCard = (props) => {

    const icon = (type) => {
        return type+' fab fa-'+type
    }
    const statusChange = (status) => {
        if(status == 'up'){
            return(
                {
                    color: {color: '#1DB489'},
                    arrow: 'fas fa-sort-up'
                }
            )
        }else{
            return(
                {
                    color: {color: '#DC414C'},
                    arrow: 'fas fa-sort-down'
                }
            )
        }   
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
                        <h1>{info.likes}</h1>
                        <div style={statusChange(info.statusLikes).color}>
                            <i className={statusChange(info.statusLikes).arrow} />
                            <p className={info.statusLikes}>{info.percent}%</p>
                        </div>
                    </div>
                </div>

                <div className="overview-card">
                    <div className="title">
                        <p>{info.tag}</p>
                        <i className={icon(info.type)} />
                    </div>
                    <div className="body">
                        <h1>{info.actions}</h1>
                        <div style={statusChange(info.statusActions).color}>
                            <i className={statusChange(info.statusActions).arrow} />
                            <p className={info.statusActions}>{info.percent}%</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    // return(
        
    // )
}

export default OverviewCard;