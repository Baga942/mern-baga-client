import React from 'react';
import './Profile.css';
import Header from '../Components/header'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import About from '../Components/About'
import Project from '../Components/Project'
import Contact from '../Components/Contact'



function Profile() {
  return (
      <div className="Profile">
        <Header />
        <hr />
        <Navbar />
        <br />
        <Banner />
        <br />
        <About />
        <br />
        <hr />
        <h1 className="skillheader">My SKills</h1>
        <hr />
        <Project />
        <hr />
        <h1 id="contactnav" className="contact">Contact Information</h1>
        <hr />
        <Contact />

      </div>
  );
}

export default Profile;
