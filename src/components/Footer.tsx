import Link from 'next/link'
import path from 'path'
import React from 'react'

type Props = {}


const routes = [
    {
        path : "/terms-conditions",
        name : "Terms & Conditions"
    },
    {
        path : "/privacy-policy",
        name : "Privacy Policy"
    }
]
const Footer = (props: Props) => {
  return (
    <footer className='mt-auto flex flex-col items-center justify-center py-16 border-white/10 px-3 sm:px-9 text-xs  text-white/25' >
        Footer

        <ul className='flex gap-x-5 flex-wrap justify-center'>
            {
                routes.map((route) => (
                    <li key={route.path}>
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                ))
            }
        </ul>




</footer>
  )
}

export default Footer