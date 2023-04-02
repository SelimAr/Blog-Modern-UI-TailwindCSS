import React,{useEffect, useState} from 'react'
import Input from './Input'
import Select from './Select';
import Card from './Card'; 
import data from '../Data/data.json'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import NightlightIcon from '@mui/icons-material/Nightlight';

function Main() {

    const menus = ["Culture","Économie","Politique","Sport","Écologie","Automobile","Santé"];
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if(theme === "dark") {
            document.documentElement.classList.add('dark');            
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const themeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <div className='w-full dark:bg-slate-950'>
            <div className='flex h-16 border-b border-slate-200 items-center px-5 bg-slate-100 dark:bg-slate-800
            dark:border-slate-600'>
                <Input />
                <div className='flex'>
                    <button className='p-1 ml-3 bg-slate-200 hover:bg-slate-300 rounded-md flex items-center
                    dark:bg-slate-900 dark:text-white dark:hover:bg-slate-950'>
                        <AddOutlinedIcon />
                    </button>
                    <button className='p-1 ml-3 bg-slate-200 hover:bg-slate-300 rounded-md flex items-center
                    dark:bg-slate-900 dark:text-white dark:hover:bg-slate-950'>
                        <ShareOutlinedIcon />
                    </button>
                    <button className='p-1 ml-3 bg-slate-200 hover:bg-slate-300 rounded-md flex items-center
                    dark:bg-slate-900 dark:text-white dark:hover:bg-slate-950' onClick={themeSwitch}>
                        {theme === "dark" ? <NightlightIcon /> : <NightlightOutlinedIcon /> }
                    </button>
                </div>
            </div>

            {/* View +1024px */}
            <div className='bg-slate-100 mx-auto my-4 rounded-full list-none p-1 flex justify-center max-w-fit max-lg:hidden
            dark:bg-slate-800'>
                {menus.map((menu, i) =>
                    <li key={i} className='mx-5 font-medium cursor-pointer hover:bg-slate-300 p-2 rounded-full
                    dark:hover:bg-slate-900 dark:text-white'>
                        {menu}
                    </li>
                )}
            </div>

            {/* View -1024px */}           
            <div className='mx-auto my-3 list-none p-1 flex justify-center min-w-min max-w-xs lg:hidden dark:bg-slate-95000'>
                <Select />
            </div>
            
            <div className='w-auto h-auto m-5 flex justify-center flex-wrap rounded-md bg-slate-100 dark:bg-slate-800'>
                {data.map((d) => 
                    <Card key={d.id} 
                        src={d.src}
                        title={d.title}
                        description={d.description}
                        date={d.date}
                    />
                )}
            </div>
        </div>
    )
}

export default Main