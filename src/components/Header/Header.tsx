
import Image from 'next/image'

import React from 'react'

function Header() {
  return (
    <div >
      <div className='flex justify items-end '>
        <Image className='' src = {"/image/Rectangle2.png"} alt = '' width={1741} height={135}/>
        <Image  className = ' p-6 absolute left-2' src = "/image/purity.png" alt ="" width={250} height={200}/>
        
          </div>
      
    </div>
  )
}

export default Header

