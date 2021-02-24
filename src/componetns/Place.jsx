import React from 'react'
import Rating from 'react-rating'
import Link from 'next/link'
import Image from 'next/image'

export default function Place({ place }) {
    const [liked, setLiked] = React.useState(false)
    let likedClasses = 'icon like '

    likedClasses = liked ? likedClasses + 'like-active' : likedClasses

    const marks = (width = 14, height = 14) => (
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
        <div className="item-place" key={place.id}>
            <div className='container'>
                <div className="img-cont">
                    <div className="img"></div>
                </div>
                <div className="main">
                    <Link href={`${process.env.BASE_URL}/places/[id]`} as={`${process.env.BASE_URL}/places/${place.id}`}>
                        <div className="sub-container">
                            <div className="name">{place.name}</div>
                            {marks()}
                        </div>
                    </Link>
                    <Link href={`${process.env.BASE_URL}/places/[id]`} as={`${process.env.BASE_URL}/places/${place.id}`}>
                        <div className="type">{place.category}</div>
                    </Link>
                    <Link href={`${process.env.BASE_URL}/places/[id]`} as={`${process.env.BASE_URL}/places/${place.id}`}>
                        <div className="address">
                            <div className="icon-address"></div>
                            {place.location}
                        </div>
                    </Link>
                    <div className="like-cont">
                        <div className="like-item pointer" onClick={() => setLiked(!liked)}>
                            <div className={likedClasses}></div>
                            <div className="count">324</div>
                        </div>
                        <div className="like-item">
                            <div className="icon comment"></div>
                            <div className="count">20</div>
                        </div>
                        <div className="like-item">
                            <div className="icon show"></div>
                            <div className="count">504</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}