import React from 'react'
import BannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css'

export const About = () => {
  return (
    <div className='about'>
      <div 
      className='aboutTop' 
      style={{backgroundImage: `url(${BannerImage})`}}
      ></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ea fugit illo optio blanditiis corrupti impedit ipsa eaque at adipisci hic et fuga pariatur, nam perspiciatis doloremque magnam repellat cupiditate.lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, repellendus culpa! In impedit dignissimos eveniet quasi quidem provident? Minus vero soluta aut velit itaque expedita cupiditate debitis rerum unde quas? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo doloribus hic reprehenderit nostrum esse accusamus autem maxime perspiciatis amet aperiam deserunt expedita, sapiente dolores, minus est veritatis aspernatur nesciunt distinctio.</p>
      </div>
    </div>
  )
}
