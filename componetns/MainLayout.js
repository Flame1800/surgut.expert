import Link from 'next/link'
import classes from '../styles/main-layout.module.scss'
import Head from 'next/head'

export default function MainLayout ({ children }) {
    return (
        <>
            <Head>
                {/* <title>{props.title}</title> */}
            </Head>
            <nav className={classes.nav}>
                <div className={classes.logo}>
                    
                </div>
                <div className={classes.navmenu}>
                    <Link href='/'><a>Главная</a></Link>
                    <Link href='/places'><a>Каталог</a></Link>
                </div>
            </nav>
            <main className={classes.main}>
                {children}
            </main>
        </>
    )
}