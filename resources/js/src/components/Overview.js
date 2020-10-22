import React from 'react';
import OverviewCard from './OverviewCard';

const OverView = (props) => {

    const createCard = () => {
        return(
            <OverviewCard infos={props.datos} />
        )
    }

    return(
        <div className="overview">
            <div className="header">
                <h3>Overview - Today</h3>
            </div>
            <div className="body">
                {createCard()}
            </div>
        </div>
    )

}

export default OverView;