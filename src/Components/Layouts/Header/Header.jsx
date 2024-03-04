import React from 'react'
import '../../Layouts/Header/Header.css'
import { Logo } from '../../Logo/Logo'
import { Navbar } from '../../Navbar/Navbar'

export const Header = ({children}) => {
  return (
    <header>{children}</header>
  )
}
