import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    };
    render() {
        return(
            <div className='header'>
                <div id='header-name' className='header-el'>
                    JONATHAN
                </div>
                <div className='header-three'>
                    <div className='header-el'>CONTACT</div>
                    <div className='header-el'>PROJECTS</div>
                    <div className='header-el'>ABOUT ME</div>
                </div>
            </div>
        )
    };
};

export default Header;