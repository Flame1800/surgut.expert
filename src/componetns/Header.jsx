import Link from 'next/link'
import classes from '../../styles/main-layout.module.scss'
import Head from 'next/head'
import React from 'react'

import { toggleAuth } from '../actions/auth'
import { connect } from '../store/index'

const mapStateToProps = (state) => ({
    authModal: state.uiElements.authModal
})



function Header(props, { children }) {
    const [categories, setCategories] = React.useState([])
    const { toggleAuth } = props

    React.useEffect(() => {
        const getData = async () => {
            const reqCategories = await fetch(`${process.env.API_URL}/categories`);
            const categoriesData = await reqCategories.json()
            const categories = categoriesData.data

            setCategories(categories);
        }
        getData();
    }, [])

    return (
        <>
            <Head>
                <title>HelloPeople - City.expert</title>
            </Head>
            <nav className={classes.nav}>
                <Link href='/'><div className={classes.logo}></div></Link>
                <div className={classes.navmenu}>
                    <Link href='/'><a>Главная</a></Link>
                    <a>Каталог <div className={classes.drop}></div>
                        <div className={classes.listCategories}>
                            {categories.map(item => (
                                <Link key={item.id} href={`${process.env.BASE_URL}/categories/[id]`} as={`${process.env.BASE_URL}/categories/${item.id}`}>
                                    <div className="item" >
                                        {item.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </a>
                    <div onClick={() => toggleAuth()} className={classes.person}>
                        <div className={classes.icon}></div>
                        <div className="text">
                            Войти
                        </div>
                    </div>
                </div>
            </nav>
            <main className={classes.main} key='header'>
                {children}
            </main>
        </>
    )
}

export default connect(mapStateToProps, { toggleAuth })(Header)