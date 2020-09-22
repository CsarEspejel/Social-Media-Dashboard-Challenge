import React, {useState, useEffect} from 'react';
import FollowerCard from './FollowerCard';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api'
})

const SMDashboard = () => {

    const [infos, setInfo] = useState([]);

    const fetchingData = () => {
        api.get('/socialData').then(res => {
            console.log(res);
            const result = res.data;
            setInfo(result);
            console.log(result);
        });
    }

    useEffect(() => {
        fetchingData();
    },[])
    
    const createCard = () => {
        return (
            <FollowerCard infos={infos} />
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