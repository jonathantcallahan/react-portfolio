import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            menu: 'sidemenuhidden',
            header: 'header',
            rotate: false
        };
    };

    toggleHeader = () => {
        if(this.state.menu === 'sidemenuhidden'){
            this.setState({ menu:'sidemenu', header:'headercol', rotate:'true'})
        } else {    
            this.setState({ menu:'sidemenuhidden', header:'header'})
        }
};

    

    render() {
        return(
            <div>
                <div className={this.state.header}>
                    <div id='header-name'>
                        <a href='#section1'>JONATHAN</a>
                    </div>
                    <div className='header-three'>
                        <div className='header-el'><a href='#section4'>CONTACT</a></div>
                        <div className='header-el'><a href='#section3'>PROJECTS</a></div>
                        <div className='header-el'><a href='#section2'>ABOUT ME</a></div>
                        
                        <div id='veggieburger' onClick={() => this.toggleHeader()}>
                            <div id='line1' className={this.state.rotate == 'true' ? 'rotateR' : 'line'}></div>
                            <div id='line2' className='line'></div>
                            <div id='line3' className='line'></div>
                        </div>
                    </div>
                </div>
                <div id='smu' className={this.state.menu}>
                    <div id='menuhead'>MENU</div>
                    <div className='sideitem'><a href='#section4'>CONTACT</a></div>
                    <div className='sideitem'><a href='#section3'>PROJECTS</a></div>
                    <div className='sideitem'><a href='#section2'>ABOUT ME</a></div>
                </div>
            </div>
        )
    };
};

export default Header;