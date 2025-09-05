import ColorCategory from './components/ColorCategory/ColorCategory'
import ColorCombination from './components/ColorCombination/ColorCombination'
import ColorEmotion from './components/ColorEmotion/ColorEmotion'
import ColorTheoryIntro from './components/ColorTheoryIntro/ColorTheoryIntro'
import ColorTips from './components/ColorTips/ColorTips'
import ColorWheel from './components/ColorWheel/ColorWheel'
import FinalThoughts from './components/FinalThoughts/FinalThoughts'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import WarmCool from './components/WarmCool/WarmCool'
import './styles/App.css'

function App() {

  return (
    <div className='min-h-screen p-[1px] bg-gray-100 text-black dark:bg-gray-900 dark:text-white'>
      <Navbar />
      <HeroSection />
      <ColorTheoryIntro />
      <ColorCategory />
      <ColorCombination />
      <WarmCool />
      <ColorEmotion />
      <ColorTips />
      <FinalThoughts />
      <Footer />
    </div>
  )
}

export default App
