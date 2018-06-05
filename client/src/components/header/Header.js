import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    };

    toggleHeader = () => {

    };

    render() {
        return(
            <div className='header'>
                <div id='header-name'>
                    JONATHAN
                </div>
                <div className='header-three'>
                    <div className='header-el'>CONTACT</div>
                    <div className='header-el'>PROJECTS</div>
                    <div className='header-el'>ABOUT ME</div>
                    
                    <div id='veggieburger'>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>    
                </div>
            </div>
        )
    };
};

export default Header;