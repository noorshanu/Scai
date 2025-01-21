import React from 'react'
import MarketAnalysis from './MarketAynal'

function Hero() {
  return (
    <div className=' px-10 pt-10 pb-2 '>
        <div className='flex justify-between flex-col sm:flex-row sm:gap-1 gap-4'>

            <div>
                <img src="images/chat.png" alt="" />
            </div>
<div>
    <MarketAnalysis/>
</div>
        </div>

    </div>
  )
}

export default Hero