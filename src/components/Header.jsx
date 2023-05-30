import React from 'react'
import { MdOutlineToggleOff, MdOutlineDarkMode } from 'react-icons/md'
import {BiBookAlt} from 'react-icons/bi'
export default function Header() {
  return (
    <>
    <header>
        <div className="container">
            <div className="header-wrap">
                <div className="icon-logo">
                    <a href='#' className="dic-logo"><BiBookAlt className="logo-icon"/></a>
                </div>

                <div className="header-opt-wrap">
                    <div className="font-opt">
                        
                        <select name="font-option" id="" className="font-select">
                            <option>serif</option>    
                            <option>Times New Roman</option>    
                        </select>
                    </div>
                    <div className="drk-mode_icon">
                        <div className="drk-mode-btn">
                            <MdOutlineToggleOff className="header-btn" />
                            {/* MdOutlineToggleOn */}
                        </div>
                        <div className="drk-mode-icon">
                        <MdOutlineDarkMode className="header-btn" />
                        {/* <MdDarkMode /> */}
                        </div>
                    </div>
                </div>
            </div>    
        </div>    
    
    </header>
        
    </>
  )
}
