  
import Head from 'next/head'
import Link from 'next/link';
import MainLayout from '../../src/componetns/MainLayout';
import Place from '../../src/componetns/Place.jsx'

export default function Catalog({ places }) {
    return (
        <MainLayout>
            <Head>
                <title>Places -</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="places">
                <div className="content">
                    <div className="head">
                        <div className="title">Интересные места города</div>
                        <div className="filter-items">
                            <div className="item">Недорого</div>
                            <div className="item">Большой зал</div>
                            <div className="item">Ресторан/клуб</div>
                            <div className="item">Кухня</div>
                        </div>
                    </div>
                    <div className="items">
                        {places.length === 0 && <div className="empty">Нету мест по данной категории. <br /> <br />
                            <Link href={process.env.BASE_URL}><a className='back'>Назад</a></Link></div>}
                        {places.map((place) => {
                            return (<Place key={place.id} place={place} />)
                        })}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

Catalog.getInitialProps = async ({ query }) => {
    const responce = await fetch(`${process.env.API_URL}/places`);
    const places = await responce.json();
    const currPlaces = places.filter(item => item.name === Number(query.slug));
    return { places: currPlaces };
}