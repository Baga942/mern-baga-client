import React, { Component } from 'react'
import biologo from './public/image/biopicimg.jpg'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={biologo} width="180" height="180" alt="abtimg"/>
                    <p> 21 years old from Kazakhstan, in childhood period lived in Taraz and studied there at Nazarbayev Intellectual School of Physics and Mathematics. My primary object was Informatics so
                        since this time I knew that this sphere gonna be my future.
                        After graduation I started to work as a trainee in Taraz HUB. Since I was interested in IT sphere i had no choice but to apply to IT University opened in Nur-Sultan.
                        There I got knowledge in PHP, Html, CSS, Python, Java, Django and at current time I know them on an academic Level. During my second year of uni I become React developer in Oilan company so I gathered knowledge
                        around JSX syntax along with Html, CSS, Js animation. My duties was to work with bugs and make site look better by using animations.

                    </p>
                
            </section>
        )
    }
}

export default About
