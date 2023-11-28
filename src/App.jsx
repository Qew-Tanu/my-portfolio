import { useState } from 'react'
import './App.css'
import NavigationBar from './Components/Navigationbar/NavigationBar'
import HomeSection from './Components/HomeSection/HomeSection'
import Aboutme from './Components/aboutme/Aboutme'
import Projects from './Components/projects/Projects'
import Contacts from './Components/contact/Contacts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1400px] mx-auto px-10'>
      <div className='flex flex-col text-[10px] sm:text-[12px] md:text-[15px] font-serif relative'>
        <NavigationBar />
        <HomeSection />
        <Aboutme />
        <Projects />
        <Contacts />
      </div>
    </div>
  )
}

export default App
