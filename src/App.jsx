import mLogo from '/src/assets/lionlogo2.png'
import './index.css'
import './App.css'
import Content from './Content'
import MButton from './MButton'
import { motion } from 'framer-motion'

import modelUrl1 from '/assets/Barbarian.gltf?url';
import modelUrl2 from '/assets/Ranger.gltf?url';

import image1 from './assets/image.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'
import ThreeDeeScene from './ThreeDeeScene'

function App() {

  const GoTotop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <>

      <div className='px-4 py-4 md:px-10 lg:px-20 max-w-96 md:max-w-screen-2xl lg:max-w-screen-7xl'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          id='Nav' className="flex flex-col">
          <div className='flex flex-col mb-10'>
            <div className='flex '>
              <motion.h1
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, type: 'spring' }}
                className='text-7xl mt-auto'>Niklas Granqvist</motion.h1>
              <img src={mLogo} className="logo ms-auto" alt="logo" />
            </div>
            <motion.h1
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, type: 'spring' }}
              className='text-3xl text-green-400 font-semibold me-auto mt-0 ms-1'>Portfolio</motion.h1>
          </div>
        </motion.div >
        <div className=''>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='flex flex-col mb-10 '>
            <p className='text-md text-gray-300 mb-5 font-medium '>
              Hello! I'm Niklas Granqvist, a passionate developer with a knack for creating dynamic and responsive web applications. Welcome to my portfolio! Bellow you can find some recent projects i worked on.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='flex flex-col gap-2'>
            <h1 className='text-xl text-green-500 font-bold'>Gltf renderer component</h1>
            <p className='text-md text-gray-300 mb-5 font-medium '>A 3d scene renderer react component with animation playing and animation selector and rotation control.</p>
            <div className='flex flex-wrap gap-2 justify-center'>
              <ThreeDeeScene delay={1} modelUrl={modelUrl1} />
              <ThreeDeeScene delay={2} modelUrl={modelUrl2} />
            </div>
          </motion.div>
          <div className='flex flex-col gap-4 my-6 mx-4'>
            <a href='https://munghard.github.io/moodmap_react/index.html'>MoodMap</a>
            <a href='https://munghard.github.io/clipboard-organizer/index.html'>Clipboard-organizer</a>
            {/* <iframe height={600} src='https://munghard.github.io/clipboard-organizer/index.html'></iframe>
            <iframe height={600} src='https://munghard.github.io/moodmap_react/index.html'></iframe> */}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            <Content delay={1} title="React, C#, Tailwind" img={image1} txt="A simple notes app that lets you create new notes with priority and folder, filter by folder, and move them up and down in the list"></Content>
            <Content delay={2} title="Unity, C#, UIToolkit" img={image2} txt="This is a inventory system made in unity with c# and uitoolkit, it supports drag and drop operations for items and dragging the inventory itself. "></Content>
            <Content delay={3} title="React, C#, Python" img={image3} txt="A twitch chat with channel selector and input box for typing messages, made with React and has a python backend."></Content>
            <Content delay={4} title="Unity, C#" img={image4} txt="A little project where i explored the main mechanic of building structures, from the game World of goo (2008)"></Content>
            <Content delay={5} title="React, C#, Tailwind" img={image5} txt="A little project where i set out to copy a tailwind template for a sellable product."></Content>
            <Content delay={6} title="Unity, C#" img={image6} txt="A little game prototype with a kalevala theme."></Content>
            <Content delay={7} title="More coming..." img="" txt=""></Content>
          </motion.div>



          <div className='flex justify-center my-4'>
            <MButton text="Return to top" click={() => GoTotop()}></MButton>
          </div>
        </div>

      </div >

    </>
  )
}

export default App
