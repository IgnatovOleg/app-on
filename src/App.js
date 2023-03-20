import React, {useState} from 'react';
import './App.css';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';
import Arrows from './Arrows/Arrows';
import ClientQuestions from './ClientQuestions/ClientQuestions';
import ContactUse from './ContactUse/ContactUse';
import Faqs from './Faqs/Faqs';
import FutureSection from './FutureSection/FutureSection';
import GettingCloser from './GettingCloser/GettingCloser';
import LikeThisAPP from './LikeThisAPP/LikeThisAPP';
import MoreApps from './MoreApps/MoreApps';
import NavBar from './NavBar/NavBar';
import OurTeam from './OurTeam/OurTeam';
import Ready from './Ready/Ready';
import RecentPosts from './RecentPosts/RecentPosts';
import Screenshots from './Screenshots/Screenshots';
import SelectYourPrice from './SelectYourPrice/SelectYourPrice';
import Subscribe from './Subscribe/Subscribe';
import Top from './Top/Top';
import UpArrow from './UpArrow/UpArrow';
import Works from './Works/Works';

function App() {

  const [menuActive, setMenuActive] = useState(false)




  return (
    <div className='App'>
      <div className='navbar'>
        <NavBar
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />
      </div>
      <div className='#page' onClick={() => setMenuActive(false)}>
      <Element name='home'>
        <Top/>
      </Element>
      <Element name='feature'>
        <FutureSection/>
      </Element>
      <Arrows next={"works"} previous={"feature"}/>
      <Element name='works'>
        <Works/>
      </Element>
      <Arrows next={"screenshots"} previous={"works"}/>
      <Element name='screenshots'>
        <Screenshots/>
      </Element>
      <Arrows next={"appView"} previous={"screenshots"}/>
      <Element name='appView'>
        <GettingCloser/>
      </Element>
      <Arrows next={"ready"} previous={"appView"}/>
      <Element name="ready">
        <Ready/>
      </Element>
      <Arrows next={"ourTeam"} previous={"ready"}/>
      <Element name='ourTeam'>
        <OurTeam/>
      </Element>
      <Arrows next={"moreApps"} previous={"ourTeam"}/>
      <Element name='moreApps'>
        <MoreApps/>
      </Element>
      <Arrows next={"faqs"} previous={"moreApps"}/>
      <Element name='faqs'>
        <Faqs/>
      </Element>
      <Arrows next={"testimonials"} previous={"faqs"}/>
      <Element name='testimonials'>
        <ClientQuestions/>
      </Element>
      <Arrows next={"prisingTables"} previous={"testimonials"}/>
      <Element name='prisingTables'>
        <SelectYourPrice/>
      </Element>
      <Arrows next={"recentPosts"} previous={"prisingTables"}/>
      <Element name='recentPosts'>
        <RecentPosts/>
      </Element>
      <Arrows next={"contactUse"} previous={"recentPosts"}/>
      <Element name='contactUse'>
        <ContactUse/>
      </Element>
      <Arrows next={"likeApp"} previous={"contactUse"}/>
      <Element name='subscribe'>
        <Subscribe/>
      </Element>
      <Link to="home" duration={1000} smooth={true}><UpArrow/></Link>
      <Element name="likeApp">
        <LikeThisAPP/>
      </Element>
      </div>
    </div>
  );
}

export default App;
