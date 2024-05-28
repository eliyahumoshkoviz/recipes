"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navlink({ children, href }) {
   const path = usePathname()

   return (
      <Link
         href={href}
         style={{ display: path === href ? 'none' : 'block' }}>{children}</Link>
   )
}
