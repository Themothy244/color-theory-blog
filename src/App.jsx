import ColorCategory from './components/ColorCategory/ColorCategory'
import ColorCombination from './components/ColorCombination/ColorCombination'
import ColorEmotion from './components/ColorEmotion/ColorEmotion'
import ColorTheoryIntro from './components/ColorTheoryIntro/ColorTheoryIntro'
import ColorTips from './components/ColorTips/ColorTips'
import ColorWheel from './components/ColorWheel/ColorWheel'
import FinalThoughts from './components/FinalThoughts/FinalThoughts'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import WarmCool from './components/WarmCool/WarmCool'
import './styles/App.css'

function App() {

  return (
    <div className='min-h-screen p-[1px] bg-white text-black dark:bg-gray-900 dark:text-white'>
      <Navbar />
      <HeroSection />
      <ColorTheoryIntro />
      <ColorCategory />
      <ColorCombination />
      <WarmCool />
      <ColorEmotion />
      <ColorTips />
      <FinalThoughts />
    </div>
  )
}

export default App
