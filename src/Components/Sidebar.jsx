import React, {useState} from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import CloseIcon from '@mui/icons-material/Close';

function Sidebar() {

    const [open, setIsOpen] = useState(true);

    const slide = () => {
        setIsOpen(!open)
    }

    const array = [
        {name: "Actualité", icon:<ArticleOutlinedIcon/>},
        {name: "Abonnements", icon:<SubscriptionsOutlinedIcon/>},
        {name: "Messages", icon:<ForumOutlinedIcon/>},
        {name: "Notifications", icon:<NotificationsNoneSharpIcon/>},
        {name: "Profil", icon:<PermIdentitySharpIcon/>},
        {name: "Paramètres", icon:<SettingsOutlinedIcon/>},
        {name: "Déconnexion", icon:<CloseIcon/>}
    ]

    return (
        <div className={`${open ? 'w-96' : 'w-28'} bg-slate-100 h-screen duration-200 dark:bg-slate-800 dark:text-white`}>
            <div className='flex justify-between items-center p-2 border-b border-r border-slate-200 dark:border-slate-600 h-16'>
                <div className='rounded-full p-1 bg-slate-200 hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-950
                bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer mr-1'>
                    {<PermIdentitySharpIcon fontSize='large'/>}
                </div>
                <button className='p-1 bg-slate-200 hover:bg-slate-300 rounded-md flex items-center dark:bg-slate-900
                dark:hover:bg-slate-950' onClick={slide}>
                    {open ? <ArrowBackIcon/> : <ArrowForwardIcon/>}
                </button>
            </div>

            <div className='text-center list-none'>
                {array.map((arr, i) => 
                    <div className={`${!open && 'flex justify-center my-6'} my-5 text-lg font-semibold flex items-center`}>
                        <li key={i} className='p-2 mx-1 rounded-md hover:bg-slate-300 cursor-pointer flex items-center 
                        dark:hover:bg-slate-900'>
                            {arr.icon}
                        </li>
                        <li key={i} className={`${!open && 'hidden'} hover:bg-slate-300 p-2 rounded-md cursor-pointer
                        dark:hover:bg-slate-900`}>
                            {arr.name}
                        </li>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sidebar