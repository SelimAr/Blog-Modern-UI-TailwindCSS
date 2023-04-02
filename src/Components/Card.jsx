import React from 'react'

function Card({ src, title, description, date }) {

    const cut = (string, n) => {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }


    return (
        <div className='w-64 m-5 h-96 bg-white rounded-md cursor-pointer shadow-lg max-lg:m-2
        dark:bg-slate-900 dark:text-white'>
            <img className='w-full h-48 object-cover object-center rounded-t-md' 
            src={src} alt="picture" />
            <p className='px-2 font-medium'>{cut(`${title}`,55)}</p>
            <p className='px-2 text-slate-600 dark:text-slate-300'>{cut(`${description}`,140)}</p>
            <p className='px-2'>{date}</p>
        </div>
    )
}

export default Card