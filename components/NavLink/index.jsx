"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navlink({ children, href }) {
   const path = usePathname()
   console.log(path);
   return (
      <Link
         href={href}
         style={{ color: path === href ? 'red' : 'white' }}>{children}</Link>
   )
}
