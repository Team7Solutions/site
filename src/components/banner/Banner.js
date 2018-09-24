import React, { Component } from 'react';
import './Banner.css';

import quote from './assets/img/quote.png'
import bg from './assets/img/bg9.png'
import hash from './assets/img/hash.png'

var backgroundImg = {
    backgroundImage: 'url(' + quote + ')'
}

var bannerBackgroundImg = {
    backgroundImage: 'url(' + bg + ')'
}

export default class Banner extends Component {
    render() {
        return (
            <div id="Banner" style={bannerBackgroundImg}>
                <div className="quote" style={backgroundImg}>

                    <div className="text">
                        <p>
                            <span>_</span>Bring<br />your idea<br />
                            to reality<span>/</span><br />
                            <span>><span className="blink_me">_</span></span>
                        </p>
                    </div>
                </div>
                <img className="hash" src={hash} alt="hash" />
            </div>
        )
    }
}