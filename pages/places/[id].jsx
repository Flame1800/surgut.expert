import Head from 'next/head'
import AliceCarousel from 'react-alice-carousel'
import Rating from 'react-rating'
import Image from 'next/image'

export default function Place({ place }) {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item img" data-value="1">1</div>,
        <div className="item img" data-value="2">2</div>,
        <div className="item img" data-value="3">3</div>,
        <div className="item img" data-value="4">4</div>,
        <div className="item img" data-value="5">5</div>,
    ];

    const carousel = (
        <AliceCarousel
            mouseTracking
            disableButtonsControls
            items={items}
            responsive={responsive}
        />
    )

    const marks = (width = 20, height = 20) => (
        <Rating
            emptySymbol={
                <Image
                    src={`/img/star.png`}
                    alt="icon"
                    className="icon"
                    width={width}
                    height={height} />
            }
            fullSymbol={
                <Image
                    src={`/img/star-active.png`}
                    alt="icon"
                    className="icon"
                    width={width}
                    height={height} />
            }
        />
    )

    return (
        <>
            <Head>
                <title>Surgut Expert</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="place">
                <div className="content">
                    <div className="gallery">
                        {/* <div className="left-btn btn ">
                            <div className="icon-left icon"></div>
                        </div> */}
                        {carousel}
                        {/* <div className="right-btn btn">
                            <div className="icon-right icon"></div>
                        </div> */}
                    </div>
                    <div className="main">
                        <div className="first-block">
                            <div className="name">{place.name}
                                <div className="marks-box">{marks()}</div>
                            </div>
                            {/* <div className="type">Ресторан</div> */}
                            <div className="address">{place.location}</div>
                            <div className="tags">
                                Бар • Кафе • Морепродукты • Гриль • Русская • Европейская
                            </div>
                            <div className="description-block">
                                <div className="item">
                                    <div className="title">Описание:</div>
                                    <div className="text">
                                        {place.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rewiews">
                        <div className="title">Отзывы</div>
                        <div className="send-rewiew-block">
                            <div className="mark-box">
                                <div className="star-icon"></div>
                                <div className="star-icon"></div>
                                <div className="star-icon"></div>
                                <div className="star-icon"></div>
                                <div className="star-icon"></div>
                            </div>
                            <input type="textarea" className="input-text" />
                            <div className="btn btn-send">Отправить</div>
                        </div>
                        <div className="item">
                            <div className="name">Иван Иванов</div>
                            <div className="rewiew">
                                Места для сидения, Обслуживание посетителей за столиками
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


Place.getInitialProps = async (ctx) => {
    const responce = await fetch(`${process.env.API_URL}/places/${ctx.query.id}`);
    const place = await responce.json();

    return { place };
}
