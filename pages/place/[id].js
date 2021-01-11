import MainLayout from '../../componetns/MainLayout.js';
import Head from 'next/head'
import Link from 'next/link';

export default function Place({ place }) {
    return (
        <MainLayout>
            <Head>
                <title>Surgut Expert</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="place">
                <div className="content">
                    <div className="gallery">
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                    </div>
                    <div className="main">
                        <div className="first-block">
                            <div className="name">{place.title}</div>
                            <div className="type">Ресторан</div>
                            <div className="address">ул. Ленина, 43 3-ий этаж ТРЦ Сити Центр</div>
                            <div className="marks">
                                <div className="title">Оценки</div>
                                <div className="items">
                                    <div className="item">
                                        <div className="name">Питание</div>
                                        <div className="icons"></div>
                                    </div>
                                    <div className="item">
                                        <div className="name">Обслуживание</div>
                                        <div className="icons"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="second-block">
                            <div className="item">
                                <div className="title">Тип кухни:</div>
                                <div className="text">
                                    Бар, Кафе, Морепродукты, Гриль, Русская, Европейская
                                </div>
                            </div>
                            <div className="item">
                                <div className="title">Услуги:</div>
                                <div className="text">
                                    Места для сидения, Обслуживание посетителей за столиками
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rewiews">
                        <div className="item">
                            <div className="name">Иван Иванов</div>
                            <div className="rewiew">
                                Места для сидения, Обслуживание посетителей за столиками
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3>{place.title}</h3>
            <hr />
            <p>{place.body}</p>
            <Link href={`/places`}><a>Назад</a></Link>
        </MainLayout>
    )
}


Place.getInitialProps = async (ctx) => {
    const responce = await fetch(`http://jsonplaceholder.typicode.com/posts/${ctx.query.id}`);
    const place = await responce.json();

    return { place };
}
