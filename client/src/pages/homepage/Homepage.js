import React from 'react';
import Header from './../../components/header/Header';
import './Homepage.css';
import { ParallaxBanner } from 'react-scroll-parallax';

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
                    <ParallaxBanner
                        className="your-class"
                        layers={[
                            {
                                image: 'https://bonexpose.com/wp-content/uploads/2015/06/Contact-Us.jpg',
                                amount: 0.2,
                                slowerScrollRate: true,
                            },{
                                image: 'http://www.macosxtips.co.uk/geeklets/modules/upload/attachments/cutout.png',
                                amount: 0.5,
                                slowerScrollRate: false,
                            },
                        ]}
                        style={{
                            height: '100vh',
                        }}
                    >
                        <h1>Banner Children</h1>
                    </ParallaxBanner>
                <div className='fullpage'></div>
                </div>
        )
    };
};

export default Home;