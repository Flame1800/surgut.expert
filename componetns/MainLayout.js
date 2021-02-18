import Link from 'next/link'
import classes from '../styles/main-layout.module.scss'
import Head from 'next/head'
import React from 'react'

export default function MainLayout({ children }) {
    const [categories, setCategories] = React.useState([])
    React.useEffect(() => {
        const getData = async () => {
            const reqCategories = await fetch(`${process.env.API_URL}/categories`);
            const categoriesData = await reqCategories.json()
    
            setCategories(categoriesData);
        }
        getData();
    }, [])

    return (
        <>
            <Head>
                {/* <title>{props.title}</title> */}
            </Head>
            <nav className={classes.nav}>
                <Link href='/'><div className={classes.logo}></div></Link>
                <div className={classes.navmenu}>
                    <Link href='/'><a>Главная</a></Link>
                    <a>Каталог <div className={classes.drop}></div>
                        <div className={classes.listCategories}>
                            {categories.map(item => (
                                <Link href={`${process.env.BASE_URL}/categories/[id]`} as={`${process.env.BASE_URL}/categories/${item.id}`}>
                                    <div className="item" key={item.id}>
                                        {item.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </a>
                    <Link href={`${process.env.BASE_URL}/auth`}>
                        <div className={classes.person}>
                            <div className={classes.icon}></div>
                            <div className="text">
                                Войти
                        </div>
                        </div>
                    </Link>
                </div>
            </nav>
            <main className={classes.main}>
                {children}
            </main>
        </>
    )
}