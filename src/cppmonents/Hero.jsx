import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
<nav className='flex justify-between item-center w-full mb-10 pt-3'>
<img src={logo} alt='sumz_logo' className='w-28 object-contain'></img>

<button type='button'  onClick={()=>window.open("https://github.com/DEVESH1709/AI_Summarizer.git")} className='black_btn'>Github </button>

</nav>

<h1 className='head_text'>
Summarize Article with <br className='max-md:hidden'></br>
<span className='orange_gradient'>OPEN AI</span>

</h1>
<h2 className='desc'>
Summarize any article in seconds with our AI-powered tool. <br className='max-md:hidden'></br>

</h2>
    </header>
  )
}

export default Hero