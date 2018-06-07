import React from 'react';
import Header from './../../components/header/Header';
import './Homepage.css';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    };

    render() {
        return(
            <div>
                <Header />
                <div className='fullpage red'>
                </div>
                </div>
        )
    };
};

export default Home;