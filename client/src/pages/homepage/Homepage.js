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
            </div>
        )
    };
};

export default Home;