import Header from '@/components/Header/Header'
import React from 'react'
import Image from 'next/image'
function page() {
  return (
    <div className=''>
      <Header ></Header>

      <div className=' '>
        <h1 className='h-[162] w-[467] top-[300] left-[107] m-12 p-8 text-4xl ' >
        IMPECCABLE <br></br>CRAFTSMANSHIP AND <br></br>FINESSE</h1>
        <p className='w-[798] h-[144] top-[523] left-[107] text-2xl text-gray-600 m-6 p-6'> An example of intricate workmanship and 
          detail, elegant <br></br> necklaces and long and
           short chains form a part of our <br></br>desirable collection.</p>
           <Image className='top-[710] left-[107] p-6 gap-[8.6] m-6 ' src ={"/image/Frame11.png"} alt = "" width={247} height={49}/>
     
       
      <div className="  p-[36] absolute right-0  m-20 transform -translate-y-1/2">
 <Image
          src="/image/pic.png" alt=""  width= {421} height={200}
          className="rounded-tl-[140px] rounded-br-[140px] "
        />
     <Image   
          src="/image/layer.png" alt="" width={471} height={500} className="" /> 
      </div>
    </div>
      </div>

  )
}

export default page
