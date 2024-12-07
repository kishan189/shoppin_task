import React from 'react'
import "./header.css"
import { ImLab } from "react-icons/im";
import { IoApps } from "react-icons/io5";
import { TbBrandGmail } from "react-icons/tb";
function Header() {

  return (
    <div className='myheader'>
        <ul>
            <li>
                About
            </li>
            <li>
               store
            </li>
        </ul>
        <ul>
            <li>
                Gmail
            </li>
            <li>
                Imgaes
            </li>
            <li>
            <ImLab />
            </li>
            <li>
                <IoApps />
            </li>
            <li><TbBrandGmail />
            </li>
        </ul>
    </div>
  )
}

export default Header