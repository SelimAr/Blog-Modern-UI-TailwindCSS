import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div className='flex items-center w-full justify-center'>
        <input className='w-full max-w-sm outline-none rounded-l-md text-md p-2 bg-slate-200 font-medium 
        placeholder:italic dark:bg-slate-900' 
               type="text" 
               placeholder='Rechercher un article...' />
        <button className='p-2 bg-slate-200 hover:bg-slate-300 rounded-r-md flex items-center dark:bg-slate-900
        dark:text-white dark:hover:bg-slate-950'>
            <SearchIcon />
        </button>
    </div>
  )
}

export default Navbar