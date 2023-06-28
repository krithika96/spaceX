import React from 'react'
import { Link } from 'react-router-dom'
import {SiSpacex} from 'react-icons/si'

export default function Header() {
  return (
    // <div> Header </div>
    <>
        <header className='flex items-center justify-between px-5 w-full'>
            <div>
                <Link to="/">
                    <SiSpacex className='text-8xl'/>
                </Link>
            </div>
            <nav>
               <ul>
                <li>
                    <Link to="/capsules" className="text-sm lg:text-base">Capsules</Link>
                </li>
               </ul>
            </nav>
        </header>
    </>
  )
}
