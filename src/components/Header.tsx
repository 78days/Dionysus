import Link from 'next/link'
import React from 'react'
import Logo from './logo'

type Props = {}

const routes = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Events",
        path: "/events/all"
    }
]



const Header = (props: Props) => {
  return (
    <header className='flex justify-between items-center border-b border-white/10  h-14 px-3 md:px-9'>
        <Logo/>
        <nav>
            <ul className='flex gap-x-6 text-sm'>
                {routes.map((route, index) => (
                    <li key={route.path} className='text-white/70 hover:text-white transition'>
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>

        
        
    </header>
  )
}

export default Header