import React from 'react'
import Link from 'next/link'

export default ({ place }) => {
    const [liked, setLiked] = React.useState(false)
    let likedClasses = 'like-icon '

    likedClasses = liked ? likedClasses + 'liked' : likedClasses

    return (
        <div className="item-place">
            <div className="like-btn" onClick={() => setLiked(!liked)}>
                <div className={likedClasses}></div>
            </div>
            <Link href={`${process.env.BASE_URL}/places/[id]`} as={`${process.env.BASE_URL}/places/${place.id}`}>
                <div className='container'>
                    <div className="img"></div>
                    <div className="main">
                        <div className="name">{place.name}</div>
                        <div className="type">{place.category}</div>
                        <div className="address">
                            {place.location}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}