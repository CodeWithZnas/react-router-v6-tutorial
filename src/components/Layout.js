import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <>
        <header>
            <Navbar />
            Header Section
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <p>Footer text</p>

        </footer>
    </>
  )
}
