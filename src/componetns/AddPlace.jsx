import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


import { connect } from '../store/index'
import { toggleAddPlace } from '../actions/uiElements'

const mapStateToProps = (state) => {
    return { addPlaceModal: state.uiElements.addPlaceModal }
}

function addPlace(props) {
    const { addPlaceModal, toggleAddPlace } = props

    if (!addPlaceModal) {
        return null;
    }
    return (
        <>
            <Head>
                <title>Добавить место</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="add-place">
                <div className="form">
                    <div className="back-btn" onClick={() => toggleAddPlace()}>
                      +
                    </div>
                    <div className="title">
                        Добавить место
                    </div>
                    <input type="text" className="input" placeholder='Полное название' />
                    <input type="text" className="input" placeholder='Сокращенное название' />
                    <input type="text" className="input" placeholder='Категория' />
                    <input type="phone" className="input" placeholder='Телефон' />
                    <input type="text" className="input" placeholder='Сайт' />
                    <input type="text" className="input" placeholder='Адресс' />
                    <input type="text" className="input" placeholder='Теги (перечислите через запятую)' />
                    <textarea type="textarea" className="input" placeholder='Описание' />
                    <div className="photo-area">
                        <div className="head">
                            Фотографии
                            <div className="add-photo-btn">
                                Загрузить
                            </div>
                        </div>
                        <div className="photos">
                            
                        </div>
                    </div>
                    <div className="btn-reg">
                        Добавить
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, { toggleAddPlace })(addPlace)