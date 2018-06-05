import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            menu: 'sidemenuhidden'
        };
    };

    toggleHeader = () => {
        this.state.menu === 'sidemenuhidden' ? this.setState({ menu:'sidemenu'} ) : this.setState({ menu:'sidemenuhidden' })
    };

    render() {
        return(
            <div>
                <div className='header'>
                    <div id='header-name'>
                        JONATHAN
                    </div>
                    <div className='header-three'>
                        <div className='header-el'>CONTACT</div>
                        <div className='header-el'>PROJECTS</div>
                        <div className='header-el'>ABOUT ME</div>
                        
                        <div id='veggieburger' onClick={() => this.toggleHeader()}>
                            <div className='line'></div>
                            <div className='line'></div>
                            <div className='line'></div>
                        </div>
                    </div>
                </div>
                <div id='smu' className={this.state.menu}>
                    <div id='menuhead'>MENU</div>
                    <div className='sideitem'>CONTACT</div>
                    <div className='sideitem'>PROJECTS</div>
                    <div className='sideitem'>ABOUT ME</div>
                </div>
            </div>
        )
    };
};

export default Header;