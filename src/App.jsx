import { useState } from 'react'
import mLogo from '/src/assets/lionlogo2.png'
import './index.css'
import './App.css' 
import Content from './Content'
import MButton from './MButton'

function App() {

  return (
    <>
      <div id='Nav' className="flex flex-col Container" >
        <div className='flex flex-col mb-10'>
          <div className='flex '>
            <h1 className='text-7xl mt-auto'>Niklas Granqvist</h1>
            <img src={mLogo} className="logo ms-auto" alt="logo" />
          </div>
          <h1 className='text-3xl text-green-400 font-semibold me-auto mt-0 ms-1'>Portfolio</h1>
        </div>
      </div>
      <div className=''>
        <p className='text-md text-gray-300 mb-5 font-medium '>
          Hello! I'm Niklas Granqvist, a passionate developer with a knack for creating dynamic and responsive web applications. Welcome to my portfolio!
        </p>
        
        <p className='text-xl text-gray-500 mb-10'>Bellow you can find some recent projects i worked on.</p>
        <MButton text="Press me"></MButton>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Content title="React, C#, Tailwind" img="src/assets/image.png" txt="A simple notes app that lets you create new notes with priority and folder, filter by folder, and move them up and down in the list"></Content>
          <Content title="Unity, C#, UIToolkit" img="src/assets/image2.png" txt="This is a inventory system made in unity with c# and uitoolkit, it supports drag and drop operations for items and dragging the inventory itself. "></Content>
          <Content title="React, C#, Python" img="src/assets/image3.png" txt="A twitch chat with channel selector and input box for typing messages, made with React and has a python backend."></Content>
          <Content title="Unity, C#" img="src/assets/image4.png" txt="A little project where i explored the main mechanic of building structures, from the game World of goo (2008)"></Content>
          <Content title="React, C#, Tailwind" img="src/assets/image5.png" txt="A little project where i set out to copy a tailwind template for a sellable product."></Content>
          <Content title="Unity, C#" img="src/assets/image6.png" txt="A little game prototype with a kalevala theme."></Content>
          <Content title="More coming..." img="" txt=""></Content>
        </div>

      </div>
    </>
  )
}

export default App
