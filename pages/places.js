import Head from 'next/head'
import MainLayout from '../componetns/MainLayout.js';
import Link from 'next/link'

export default function Catalog({ places }) {
    return (
        <MainLayout>
            <Head>
                <title>Surgut Expert</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="places">
                <div className="content">
                    <div className="head">
                        <div className="title">Рестораны</div>
                        <div className="filter-items">
                            <div className="item">Недорого</div>
                            <div className="item">Большой зал</div>
                            <div className="item">Ресторан/клуб</div>
                            <div className="item">Кухня</div>
                        </div>
                    </div>
                    <div className="items">
                        {places.map(place => (
                            <div className="item">
                                <div className="like-btn"></div>
                                <Link href='place/[id]' as={`place/${place.id}`}>
                                    <div className='container'>
                                        <div className="img"></div>
                                        <div className="main">

                                            <div className="name">{place.title}</div>

                                            <div className="address">
                                                {place.body}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

Catalog.getInitialProps = async () => {
    const responce = await fetch('http://jsonplaceholder.typicode.com/posts');
    const places = await responce.json();

    return { places };
}