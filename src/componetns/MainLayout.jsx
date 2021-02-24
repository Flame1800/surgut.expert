import Link from 'next/link'
import Header from './Header'
import React from 'react'
import Auth from './Auth'
<<<<<<< HEAD
=======
import AddPlace from './AddPlace'
>>>>>>> d474bcc751207fbaf57a656757f8ec0a7d1fe455

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <Auth />
<<<<<<< HEAD
=======
            <AddPlace />
>>>>>>> d474bcc751207fbaf57a656757f8ec0a7d1fe455
            {children}
        </>
    )
}