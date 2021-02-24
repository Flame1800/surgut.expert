import Link from 'next/link'
import classes from '../../styles/main-layout.module.scss'
import Head from 'next/head'
import React from 'react'
<<<<<<< HEAD
import { toggleAuth } from '../actions/auth'
import { connect } from '../store/index'

const mapStateToProps = (state) => ({
    openAuthModal: state.auth.open
=======
import { toggleAuth } from '../actions/uiElements'
import { connect } from '../store/index'

const mapStateToProps = (state) => ({
    authModal: state.uiElements.authModal
>>>>>>> d474bcc751207fbaf57a656757f8ec0a7d1fe455
})



function Header(props, { children }) {
    const [categories, setCategories] = React.useState([])
    const { toggleAuth } = props

    React.useEffect(() => {
        const getData = async () => {
            const reqCategories = await fetch(`${process.env.API_URL}/categories`);
            const categoriesData = await reqCategories.json()

            setCategories(categoriesData);
        }
        getData();
    }, [])

<<<<<<< HEAD
    const toggleAuthModal = (e) => {
        e.preventDefault();
        console.log(toggleAuth)
    }

=======
>>>>>>> d474bcc751207fbaf57a656757f8ec0a7d1fe455
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
                                        {item.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </a>
<<<<<<< HEAD
                    <div onClick={(e) => toggleAuthModal(e)} className={classes.person}>
=======
                    <div onClick={() => toggleAuth()} className={classes.person}>
>>>>>>> d474bcc751207fbaf57a656757f8ec0a7d1fe455
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