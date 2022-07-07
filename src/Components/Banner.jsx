import React, { Component } from 'react'
import logo from '../Components/public/image/maxresdefault.jpg';
import cse from '../Components/public/image/yt1.png';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Hello My Name Is Bakdaulet Serikuly </h1>
                    <p id="paragarph1"> Frontend developer, fullstack developer <br/>
                    Youtube Creator</p>
                    <a id="logo" href="https://www.youtube.com/channel/UChK069dcHpDv7ZhOliRM0zA" ><img src={cse} width="30" height="30" alt="cselogo"/></a>
                    
            </section>
        )
    }
}

export default Banner


