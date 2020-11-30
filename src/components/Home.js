import React from 'react';
import {Link} from 'react-router-dom';

function Home () {
    return (
        <div style={{marginTop: "30px"}}>
            <Link to={`/countrieslist`}>
                <h1>Go to Countries List</h1>
            </Link>
        </div>
    )
}

export default Home;