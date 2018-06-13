import React from 'react';
import Header from './../../components/header/Header';
import './Homepage.css';
import { ParallaxBanner } from 'react-scroll-parallax';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: -45, scrollDuration: 2000});

class Home extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    };

    render() {
        return(
            <div>
            <ScrollableAnchor id={'section1'}>
                <Header />
            </ScrollableAnchor>
                    <div id='scrolltext'>scroll</div>
                        <ParallaxBanner
                            className="your-class"
                            layers={[
                                {
                                    image: 'https://bonexpose.com/wp-content/uploads/2015/06/Contact-Us.jpg',
                                    amount: 1,
                                    slowerScrollRate: true,
                                },{
                                    image: 'https://immediateentourage.com/ie2/wp-content/uploads/2016/07/IE-tree-cutout.png',
                                    amount: .5,
                                    slowerScrollRate: true,
                                },{
                                    image: 'http://www.macosxtips.co.uk/geeklets/modules/upload/attachments/cutout.png',
                                    amount: .1,
                                    slowerScrollRate: true,
                                },
                            ]}
                            style={{
                                height: '100vh'
                            }}
                            >
                            <h1>Banner Children</h1>
                        </ParallaxBanner>
                    
                <ScrollableAnchor id={'section2'}>
                    <div className='fullpage'>
                        <div className='avatar'>
                            <ParallaxBanner 
                                offsetYMax='0px'
                                layers={[
                                    {
                                        image: 'https://i.imgur.com/kTtoBlz.jpg',
                                        amount: .5,
                                        slowerScrollRate: false,
                                    }
                                ]}
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '50%',
                                    marginRight: 'auto',
                                    marginLeft: 'auto',
                                    opacity: '.8'
                                }}
                                >
                                <h1>Banner Children</h1>
                            </ParallaxBanner>
                        </div>
                        
                        <div className='helloCont'>
                            <h1>Hello, my name is Jonathan</h1>
                            <p>I am a <span className='hl'>full stack developer</span> and <span className='hl'>search engine marketer</span>.This site is built with React - If you want to take a look it's up on my GitHub. </p>
                        </div>

                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section3'}>
                    <div className='fullpage lightgray'>
                        <h1>Here is another section.</h1>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section4'}>
                    <div className='fullpage'>
                        <h1>Here is another section.</h1>
                    </div>
                </ScrollableAnchor>
                
                </div>
        )
    };
};

export default Home;