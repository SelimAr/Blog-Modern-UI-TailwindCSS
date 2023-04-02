import React from 'react'

function Select() {
    return (
        <select className="rounded-full bg-slate-100 cursor-pointer text-md focus:bg-slate-200
        p-3 font-medium dark:bg-slate-800 dark:text-white dark:focus:bg-slate-900
        dark:focus:border-slate-900 outline-none w-full mx-4">
            <option selected>Catégories</option>
            <option value="Culture">Culture</option>
            <option value="Économie">Économie</option>
            <option value="Politique">Politique</option>
            <option value="Sport">Sport</option>
            <option value="Écologie">Écologie</option>
            <option value="Automobile">Automobile</option>
            <option value="Santé">Santé</option>
        </select>
    )
}

export default Select