import MainLayout from '../componetns/MainLayout.js';

export default function Home({ places }) {
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
                  Погода: -24 C
            </div>
              </div>
              <div className="items">
                <div className="item">
                  <div className="icon"></div>
                  <div className="name">Доставка еды</div>
                </div>
                <div className="item">
                  <div className="icon"></div>
                  <div className="name">Доставка еды</div>
                </div>
                <div className="item">
                  <div className="icon"></div>
                  <div className="name">Доставка еды</div>
                </div>
                <div className="item">
                  <div className="icon"></div>
                  <div className="name">Доставка еды</div>
                </div>
                <div className="item">
                  <div className="icon"></div>
                  <div className="name">Доставка еды</div>
                </div>
                <div className="item">
                  <div className="icon"></div>
                  <div className="name">Доставка еды</div>
                </div>
                <div className="item">
                  <div className="icon"></div>
                  <div className="name">Доставка еды</div>
                </div>
                <div className="item">
                  <div className="icon"></div>
                  <div className="name">Доставка еды</div>
                </div>
                <div className="item">
                  <div className="icon"></div>
                  <div className="name">Доставка еды</div>
                </div>
                <div className="item">
                  <div className="icon"></div>
                  <div className="name">Доставка еды</div>
                </div>
              </div>
              <div className="items-plus">
                <div className="btn">
                  <div className="text">Больше напрвавлений</div>
                  <div className="icon"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="place-items">
            <div className="container-items">
              {places.map((place) => (
                <div className="item" key={place}>
                  <div className="like-btn"></div>
                  <div className='container'>
                    <div className="img"></div>
                    <div className="main">
                      <div className="name">Сургут СИТИ-МОЛЛ</div>
                      <div className="type">Торгово-развлекательный центр</div>
                      <div className="address">
                        Югорский тракт, 38
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}


export async function getStaticProps(context) {
  return {
    props: {
      places: [1, 2, 3, 4, 5, 6, 7, 8, 9, 44,534,43,23,13,3132,2123,123]
    }, 
  }
}