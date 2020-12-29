import Link from 'next/link'
import classes from '../styles/main-layout.module.scss'

export default function ({ children }) {
    return (
        <>
            <nav className={classes.nav}>
                <div className="logo">
                    LOGO
                </div>
                <div className={classes.navmenu}>
                    <Link href='/'><a>Главная</a></Link>
                    <Link href='/catalog'><a>Каталог</a></Link>
                </div>
            </nav>
            <main className={classes.main}>
                {children}
            </main>
        </>
    )
}