import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import hero from '../../assets/hero_banner.jpg'
import herotitle from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero} alt="" className='banner' />
        <div className="hero-cap">
          <img src={herotitle} alt="caption" className='caption'/>
          <p> Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy</p>
        <div className="hero-btn">
          <button className='btn'><img src={play} alt="" />Play</button>
          <button className='btn dbtn'><img src={info} alt="" />More info</button>
        </div>
        <TitleCards />
        </div>
      </div>
      <div className="morecards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top pics for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
