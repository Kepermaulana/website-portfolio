import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import bg from '../../assets/profile.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Rifqi</span>
            <br/> Android Mobile Developer</span>
            <p className='introPara'>I am a skilled android mobile developer with experience <br/> creating user friendly application</p>
            <Link><button className='btn'><img src= { btnImg } alt='Hire me' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={ bg } alt='Profile' className='bg'></img>
    </section>
  )
}

export default Intro