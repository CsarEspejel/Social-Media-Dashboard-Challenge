import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SMDashboard from './components/SMDashboard';
import Overview from './components/Overview';
const api = axios.create({
    baseURL: 'http://localhost:8000/api'
})

const App = () => {

    const [socialData, setSocialData] = useState([]);

    const fetchingData = () => {
        api.get('/socialData').then(res => {
            const result = res.data;
            setSocialData(result);
        })
    }

    useEffect(() => {
        fetchingData();
    }, []);

    return(
        <div className="container">
            <SMDashboard datos={socialData} />
            <Overview datos={socialData} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('App'));