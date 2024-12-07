import React from 'react'
import "./Search.css"
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoCameraReverse } from "react-icons/io5";
import { ImLab } from "react-icons/im";
function SearchBar() {
  return (
    <div className='gogoleSeachContainer'>
        <div className='google'>
           <span>Google</span>
        </div>
        <div className='containerSearch'>
            <div className='searchBar'>
                <span className='searchIcon'><CiSearch /></span>
                <input type='text' />
                <span><MdOutlineKeyboardVoice /></span>
                <span><IoCameraReverse /></span>
            </div>
        </div>
    </div>
  )
}

export default SearchBar