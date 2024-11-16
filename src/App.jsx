import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
const App = () => {
  const data=[
    {image:'https://images.genius.com/12c1dc3b41ff29f83b5f4954afec343e.984x984x1.jpg',name:'Bandana',artists:'Shubh',added:false},
    {image:'https://i.ytimg.com/vi/Y-HmDGdEHq8/maxresdefault.jpg',name:'Fresh',artists:'Phonk SXID',added:false},
    {image:'https://i.ytimg.com/vi/itjFTRDVgPE/maxresdefault.jpg',name:'Unstoppable',artists:'Sia',added:false},
    {image:'https://i.ytimg.com/vi/6wu7JvZZRVg/maxresdefault.jpg',name:'Gangsta Paradise',artists:'Coolio',added:false},
    {image:'https://www.liveabout.com/thmb/-Ut5gLSbrqtSQQbZ9QaKzP1O0HY=/1470x1257/filters:no_upscale():max_bytes(150000):strip_icc()/maroon-5-animals-579a45bc5f9b589aa92f880f.jpg',name:'Animals Maroon',artists:'J.Cole',added:false},
    {image:'https://th.bing.com/th/id/OIP.iBiCXsAxsaFXtLAEgJkJWgHaEK?rs=1&pid=ImgDetMain',name:'One Dance',artists:'Drake',added:true},
    {image:'https://th.bing.com/th/id/OIP.Ls2NjUVX_GgasVhVmSvuLAHaHa?rs=1&pid=ImgDetMain',name:'Paisa hai Toh',artists:'Sachin-Jigar',added:false},
    {image:'https://th.bing.com/th/id/OIP.n-KA0L82ByeyOmbp5YXS2wAAAA?w=450&h=359&rs=1&pid=ImgDetMain',name:'King Shit',artists:'Shubh',added:false},
    {image:'https://th.bing.com/th/id/OIP.jKcUAbsnQH_ILaPNqfvErgAAAA?rs=1&pid=ImgDetMain',name:'Enemy',artists:'Imagine Dragons',added:false},
    {image:'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/02/17/ce/0217ce34-c2b9-3d3d-1dec-586db3948753/23UMGIM22526.rgb.jpg/1200x1200bf-60.jpg',name:'Starboy',artists:'The Weeknd',added:false},
  ]
  const [songData,setSongData]=useState(data);
  const handleClick=(index)=>{
     setSongData((prev)=>{
     return prev.map((item,itemindex)=>{
        if(itemindex===index) return {...item,added:!item.added};
        return item;
      })
     })
  }
  return (
   <div className=' w-full h-screen bg-zinc-300 overflow-hidden'>
    <Navbar data={songData}/>
     <div className='flex flex-wrap'>
      {songData.map((obj,index)=>
        (<Cards data={obj} handleClick={handleClick} index={index} key={index}/>)
        )}

    
    


    </div>
    
   </div>
   
   
  )
}

export default App