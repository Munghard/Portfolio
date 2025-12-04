import mLogo from '/src/assets/lionlogo2.png'
import './index.css'
import './App.css'
import Content from './Content'
import MButton from './MButton'
import { motion } from 'framer-motion'

import portrait from '/Portrait.jpg';

import modelUrl1 from '/assets/Barbarian.gltf?url';
import modelUrl2 from '/assets/Ranger.gltf?url';

import image1 from './assets/image.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'

import ThreeDeeScene from './ThreeDeeScene'
import PlatformLink from './PlatformLink'


function App() {

  const GoTotop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <>
      {/* Title */}
      <div className='px-4 py-4 sm:max-w-7xl md:max-w-screen-7xl lg:max-w-screen-9xl mx-auto'>
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
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                className='text-7xl mt-auto'>Niklas Granqvist</motion.h1>
              <img src={mLogo} className="logo ms-auto" alt="logo" />
            </div>
            <motion.h1
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, type: 'spring' }}
              className='text-3xl text-green-500 font-semibold me-auto mt-0 ms-1'>Portfolio</motion.h1>
          </div>
        </motion.div >

        {/* Portrait with pulsing shadow */}
        <div className='relative'>
          <div className='absolute inset-0 mb-10 mx-auto w-48 h-48 rounded-full shadow-[0_0_64px_rgba(34,197,94,0.4)] animate-[pulse_2s_ease-in-out_infinite]'>
          </div>
          <img className='w-48 h-48 mb-10 mx-auto rounded-full object-cover border-2 border-green-800'
            src={portrait}></img>
        </div>
        {/*  description */}
        <div className=''>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='flex flex-col mb-10 '>
            <div className='text-md text-gray-300 mb-5 font-medium flex gap-2'>
              <div className='flex flex-col gap-2'>
                <span className='text-4xl'>Hello!</span>
                <span className='text-2xl'> I'm Niklas Granqvist</span>
                <span className='lg:w-2xl md:w-xl'>a passionate developer with a knack for creating dynamic and responsive web applications.
                </span>
                <span>
                  Welcome to my portfolio! Bellow you can find some recent projects i worked on.</span>
              </div>
            </div>
          </motion.div>
          {/*  platform links */}
          <div className='flex flex-col gap-2 mt-10 section'>
            <h1 className='heading'>Platform link components</h1>
            <div className='flex gap-4 flex-wrap justify-center'>
              <PlatformLink title={'Instagram'} description={"Photo and video sharing app."} Url={'https://instagram.com'} iconUrl={'https://www.instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png'} color={'pink'} ></PlatformLink>
              <PlatformLink title={'Spotify'} description={"Music streaming service."} Url={'https://spotify.com'} iconUrl={'https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green-300x300.png'} color={'green'} ></PlatformLink>
              <PlatformLink title={'Facebook'} description={"Social networking platform."} Url={'https://facebook.com'} iconUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png'} color={'cyan'} ></PlatformLink>
            </div>
          </div>
          {/*  gltf components */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='flex flex-col gap-2 mt-10 section'>
            <h1 className='heading'>Gltf renderer component</h1>
            <p className='text-md text-gray-300 mb-5 font-medium '>A 3d scene renderer react component with animation playing and animation selector and rotation control.</p>
            <div className='flex flex-wrap gap-2 justify-center'>
              <ThreeDeeScene delay={1} modelUrl={modelUrl1} />
              <ThreeDeeScene delay={2} modelUrl={modelUrl2} />
            </div>
          </motion.div>
          {/*  Project links */}
          <div className='flex flex-col my-6 section'>
            <h1 className='heading'>Completed personal projects</h1>
            <div className=' p-4 flex flex-col gap-2'>
              <div className='flex flex-col mb-4'>
                <h1 className="text-2xl  text-green-400/80 font-bold mb-2">MoodMap</h1>
                <p className='text-zinc-300'>Moodmap is a mood tracking app that lets you view your mood history and shows you a quick analysis of the trend.</p>
                <a className='w-fit' target='_blank' href='https://munghard.github.io/moodmap_react/index.html'>Check it out</a>
              </div>
              <div className='flex flex-col mb-4'>
                <h1 className="text-2xl  text-green-400/80 font-bold mb-2">Pasteboard</h1>
                <p className='text-zinc-300'>Pasteboard is a kind of note taking app where you can sort your notes by folder and using tags, it also has a pin system for important notes.</p>
                <a className='w-fit' target='_blank' href='https://munghard.github.io/clipboard-organizer/index.html'>Check it out</a>
              </div>
              <div className='flex flex-col mb-4'>
                <h1 className="text-2xl  text-green-400/80 font-bold  mb-2">Relic of myth</h1>
                <p className='text-zinc-300'>Relic of myth is a simple web based role playing game. Fight monsters, find relics and go on adventures to gain experience and gold and climb the leaderboards.</p>
                <a className='w-fit' target='_blank' href='https://munghard.github.io/react_rpg/index.html'>Check it out</a>
              </div>
            </div>
            {/* <iframe height={600} src='https://munghard.github.io/clipboard-organizer/index.html'></iframe>
            <iframe height={600} src='https://munghard.github.io/moodmap_react/index.html'></iframe> */}
          </div>
          {/*  Gallery */}
          <div className='flex flex-col gap-4 section'>
            <h1 className='heading'>Gallery</h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>

              <Content delay={1} title="React, Javascript, Tailwind" img={image1} txt="A simple notes app that lets you create new notes with priority and folder, filter by folder, and move them up and down in the list"></Content>
              <Content delay={2} title="Unity, C#, UIToolkit" img={image2} txt="This is a inventory system made in unity with c# and uitoolkit, it supports drag and drop operations for items and dragging the inventory itself. "></Content>
              <Content delay={3} title="React, Javascript, Python" img={image3} txt="A twitch chat with channel selector and input box for typing messages, made with React and has a python backend."></Content>
              <Content delay={4} title="Godot, gdscript" img={image4} txt="A little project where i explored the main mechanic of building structures, from the game World of goo (2008)"></Content>
              <Content delay={5} title="React, Javascript, Tailwind" img={image5} txt="A little project where i set out to copy a tailwind template for a sellable product."></Content>
              <Content delay={6} title="Unity, C#" img={image6} txt="A little game prototype with a kalevala theme."></Content>
              <Content delay={7} title="More coming..." img="" txt=""></Content>
            </motion.div>
          </div>


          <div className='flex justify-center my-4'>
            <MButton text="Return to top" click={() => GoTotop()}></MButton>
          </div>
        </div>

      </div >

    </>
  )
}

export default App
