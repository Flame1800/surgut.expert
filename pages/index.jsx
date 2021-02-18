import MainLayout from '../componetns/MainLayout.js'
import Place from '../componetns/Place.jsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home({ places, categories, weather }) {

  const [dropList, setDropList] = React.useState(false)

  const getCategoryById = (id) => {
    const category = categories.filter(item => item.id === id);
    return category[0].name
  }
  return (
    <MainLayout title='Surgut.expert'>
      <div className="main-fon-1">
        <div className="home">
          <div className="header">
            <div className="content">
              <div className="title">Все о Сургуте</div>
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
                  <Link  href='categories/[id]' as={`categories/${item.id}`}>
                    <div className="item" key={item.id}>
                      <Image
                        src={`/img/icons-categories/${item.img}`}
                        alt="icon"
                        className="icon"
                        width="34"
                        height="34" />
                      <div className="name">{item.name}</div>
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
                        {item.name}
                      </div>
                    ))}
                    </div>
                  </div>}
              </div>
            </div>
          </div>
          <div className="place-items">
            <div className="container-items">
              {places.map((place, id) => {
                if (id > 29) {
                  return null;
                }
                const category = getCategoryById(place.category_id);
                place.category = category;
                return (<Place key={place.id} place={place} />)
              })}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}


export async function getStaticProps(context) {

  const reqPalces = await fetch(`${process.env.API_URL}/places`);
  const places = await reqPalces.json()

  const reqCategories = await fetch(`${process.env.API_URL}/categories`);
  const categories = await reqCategories.json()

  const reqWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Surgut&lang=ru&units=metric&appid=2f7917fd00d765dc278d7a97fabd0c41`);
  const weather = await reqWeather.json()

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5)
  }



  shuffle(places);
  return {
    props: {
      places,
      categories,
      weather: weather.main.temp
    },
  }
}