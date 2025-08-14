import ColorTheoryIntro from './components/ColorTheoryIntro/ColorTheoryIntro'
import ColorWheel from './components/ColorWheel/ColorWheel'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import './styles/App.css'

function App() {

  return (
    <div className='min-h-screen p-[1px] bg-white text-black dark:bg-gray-900 dark:text-white'>
      <Navbar />
      <HeroSection />
      <ColorTheoryIntro />
      <ColorWheel />
    </div>
  )
}

export default App
