import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


export default function Auth() {

    const [mode, setMode] = React.useState('reg')

    return (
        <>
            <Head>
                <title>Авторизация</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="auth">
                <div className="form">
                    <Link href={`${process.env.BASE_URL}`}>
                        <div className="back-btn">
                            <div className='icon'>
                            </div>
                        </div>
                    </Link>
                    <div className="title">
                        {mode === 'reg' ? 'Регистрация' : 'Вход'}
                    </div>
                    {mode === 'reg' && <input type="text" className="input" placeholder='Логин' />}
                    <input type="phone" className="input" placeholder='Телефон' />
                    <input type="password" className="input" placeholder='Пароль' />
                    <Link href={`${process.env.BASE_URL}/person`}>
                        <div className="btn-reg">
                            {mode === 'reg' ? 'Зарегистрироватся' : 'Войти'}
                        </div>
                    </Link>
                    {mode === 'reg' ?
                        <div className="btn-mode"
                            onClick={() => setMode('log')} >
                            Уже зарегистрованны?
                            </div>
                        :
                        <div className="btn-mode"
                            onClick={() => setMode('reg')} >
                            Не зарегистрованны?
                            </div>
                    }
                </div>
            </div>
        </>
    )
}