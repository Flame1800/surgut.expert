import Place from '../src/componetns/Place'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'

export default function Home({ places, categories, weather }) {
  const [dropList, setDropList] = React.useState(false)
  return (
      <div className="main-fon-1">
        <div className="home">
          <div className="header">
            <div className="content">
              <div className="title">Все о <div className="colors-title">Сургуте</div></div>
              <div className="block">
                <div className="sub-title">
                  Добро пожаловать!
                <br />
                Будьте в курсе мероприятий вашего города
            </div>
                <div className="weather">
                  Погода: {weather} &deg;C
            </div>
              </div>
              <div className="items">
                {categories.map(item => (
                  <Link href='places-by-category/[slug]' key={item.slug} as={`places-by-category/${item.slug}`}>
                    <div className="item">
                      <Image
                        src={`/img/icons-categories/${item.icon}`}
                        alt="icon"
                        className="icon"
                        width="34"
                        height="34" />
                      <div className="name">{item.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="items-plus">
                <div className="btn" onClick={() => setDropList(!dropList)}>
                  <div className="text">Больше напрвавлений</div>
                  <div className="icon"></div>
                </div>
                {dropList &&
                  <div className="drop-box">
                    <div className="list">
                      {categories.map(item => (
                        <div key={item.id} className="item">
                          {item.title}
                        </div>
                      ))}
                    </div>
                  </div>}
              </div>
            </div>
            <div className="people"></div>
          </div>
          <div className="place-items">
            {/* <div className="decorations">
              <div className="fragment spring1"></div>
              <div className="fragment spring2"></div>
              <div className="fragment switch"></div>
              <div className="fragment coubs"></div>
            </div> */}
            <div className="head">
              <div className="title">Интересные места Сургута</div>
              <div className="buttons">
                  <div className="btn-menu"></div>
                  <div className="btn-grid"></div>
              </div>
            </div>
            <div className="container-items">
              {places.map((place, id) => {
                if (id > 29) {
                  return null;
                }
                place.category = place.categories[0].title;
                return (<Place key={place.id} place={place} />)
              })}
            </div>
          </div>
        </div>
      </div>
  )
}


export async function getStaticProps(context) {
  
  const reqPalces = await axios(`${process.env.API_URL}/places`);
  const places = reqPalces.data.data

  const reqCategories = await axios(`${process.env.API_URL}/categories`);
  const categories = reqCategories.data.data

  const reqWeather = await axios(`http://api.openweathermap.org/data/2.5/weather?q=Surgut&lang=ru&units=metric&appid=2f7917fd00d765dc278d7a97fabd0c41`);
  const weather = reqWeather.data.main.temp

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5)
  }
  shuffle(places);
  
  return {
    props: {
      places,
      categories,
      weather
    },
  }
}