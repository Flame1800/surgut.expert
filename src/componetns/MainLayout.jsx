import Link from 'next/link'
import Header from './Header'
import React from 'react'
import Auth from './Auth'
import AddPlace from './AddPlace'

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <Auth />
            <AddPlace />
            {children}
        </>
    )
}