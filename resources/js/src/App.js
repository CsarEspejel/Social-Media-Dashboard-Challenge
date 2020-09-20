import React from 'react';
import ReactDOM from 'react-dom';

import SMDashboard from './components/SMDashboard';

const App = () => {
    return(
        <div className="container">
            <SMDashboard />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('App'));