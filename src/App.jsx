import React from 'react'
import Demo from './cppmonents/Demo'
import Hero from './cppmonents/Hero'
import './App.css'

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'></div>
      </div>

      <div className='app'>
        <Hero></Hero>
        <Demo></Demo>
      </div>
    </main>
  )
}

export default App