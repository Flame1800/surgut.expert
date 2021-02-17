import MainLayout from '../componetns/MainLayout.js'
import React from 'react'

export default function Home() {

    return (
        <MainLayout title='Surgut.expert'>
            <div className="person">
                <div className="content">
                    <div className="head">
                        <div className="user">
                            <div className="portret"></div>
                            <div className="user-data">
                                <div className="name">Петр Иванов </div>
                                <div className="login">@Petr_033</div>
                                <div className="phone">+7-932-255-68-93</div>
                            </div>
                        </div>
                        <div className="btn-add">
                            Добавить место
                        </div>
                    </div>
                    <div className="card">
                        <div className="nav-card">
                            <div className="item active">
                                <div className="text">Избранное</div>
                                <div className="value">4</div>
                            </div>
                            <div className="item">
                                <div className="text">Отзывы</div>
                                <div className="value">3</div>
                            </div>
                            <div className="item">
                                <div className="text">Оценки</div>
                                <div className="value">3</div>
                            </div>
                        </div>
                        <div className="container-data">
                            <div className="item-place">
                                <div className='container'>
                                    <div className="img"></div>
                                    <div className="main">
                                        <div className="name">place.name</div>
                                        <div className="type">place.category</div>
                                        <div className="address">
                                            place.location
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
