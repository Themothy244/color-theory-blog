import ColorCategory from './components/ColorCategory/ColorCategory'
import ColorCombination from './components/ColorCombination/ColorCombination'
import ColorEmotion from './components/ColorEmotion/ColorEmotion'
import ColorTheoryIntro from './components/ColorTheoryIntro/ColorTheoryIntro'
import ColorTips from './components/ColorTips/ColorTips'
import FinalThoughts from './components/FinalThoughts/FinalThoughts'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import WarmCool from './components/WarmCool/WarmCool'
import './styles/App.css'
import { useRef } from 'react'

function App() {
  const homeRef = useRef(null);
  const basicsRef = useRef(null);
  const harmoniesRef = useRef(null);
  const emotionRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='min-h-screen p-[1px] bg-gray-100 text-black dark:bg-gray-900 dark:text-white'>
      <Navbar 
        onHomeClick={() => scrollTo(homeRef)}
        onBasicsClick={() => scrollTo(basicsRef)}
        onHarmoniesClick={() => scrollTo(harmoniesRef)}
        onEmotionClick={() => scrollTo(emotionRef)}/>
      
      <div ref={homeRef}></div>
      <HeroSection />
      <ColorTheoryIntro />
      <div ref={basicsRef}></div>
      <ColorCategory />
      <div ref={harmoniesRef}></div>
      <ColorCombination />
      <WarmCool />
      <div ref={emotionRef}></div>
      <ColorEmotion />
      <ColorTips />
      <FinalThoughts />
      <Footer />
    </div>
  )
}

export default App
