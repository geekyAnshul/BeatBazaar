import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-full px-10 py-5 flex items-center justify-between'>
        <h1 className=' text-orange-600 text-2xl font-bold '>BeatBazaar</h1>
        <div className=' px-5 py-2 bg-orange-600 text-white font-semibold flex items-center justify-between gap-2 rounded-full' >
            <h1>favourites :</h1>
            <h4>{data.filter( item => item.added ).length}</h4>
            
        </div>
    </div>
  )
}

export default Navbar