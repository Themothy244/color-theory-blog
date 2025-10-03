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
import { useRef, useState, useEffect } from 'react'

function App() {
  const homeRef = useRef(null);
  const basicsRef = useRef(null);
  const harmoniesRef = useRef(null);
  const emotionRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '10px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = [
      { id: "home", ref: homeRef },
      { id: "basics", ref: basicsRef },
      { id: "harmonies", ref: harmoniesRef },
      { id: "emotion", ref: emotionRef }
    ];

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className='min-h-screen p-[1px] bg-gray-100 text-black dark:bg-gray-900 dark:text-white'>
      <Navbar 
        onHomeClick={() => scrollTo(homeRef)}
        onBasicsClick={() => scrollTo(basicsRef)}
        onHarmoniesClick={() => scrollTo(harmoniesRef)}
        onEmotionClick={() => scrollTo(emotionRef)}
        activeSection={activeSection}
      />
      
      <div id="home" ref={homeRef}></div>
      <HeroSection />
      <ColorTheoryIntro />
      <div id="basics" ref={basicsRef}></div>
      <ColorCategory />
      <div id="harmonies" ref={harmoniesRef}></div>
      <ColorCombination />
      <WarmCool />
      <div id="emotion" ref={emotionRef}></div>
      <ColorEmotion />
      <ColorTips />
      <FinalThoughts />
      <Footer />
    </div>
  )
}

export default App
