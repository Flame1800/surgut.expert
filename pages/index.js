import MainLayout from '../componetns/MainLayout.js';

export default function Home(props) {
  return (
    <MainLayout title='Surgut.expert'>
      <div className="home">
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

            {/* {props.items.map(item => (
                <div className='item' key={item.id}>
                  <div className="icon"></div>
                  <div className="name">{item.title}</div>
                </div>
              ))} */}
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
          <div className="news-block">
            <div className="title">Новости</div>
            <div className="news">
              <div className="item">
                The React Framework
                for Production
              </div>
              <div className="item">
                Next.js need for production:
              </div>
              <div className="item">
                experience with all the features you
              </div>
              <div className="item">
                features you
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

// export async function getStaticProps(context) {

//   const items = [
//     {
//       id: 1,
//       icon: '../public/img/icons-categories/eat.png',
//       title: 'Доставка еды'
//     },
//     {
//       id: 2,
//       icon: '../public/img/icons-categories/eat.png',
//       title: 'Доставка еды'
//     },
//     {
//       id: 3,
//       icon: '../public/img/icons-categories/eat.png',
//       title: 'Доставка еды'
//     },
//     {
//       id: 4,
//       icon: '../public/img/icons-categories/eat.png',
//       title: 'Доставка еды'
//     },
//     {
//       id: 5,
//       icon: '../public/img/icons-categories/eat.png',
//       title: 'Доставка еды'
//     },
//   ]

//   return {
//     props: {
//       items
//     }, // will be passed to the page component as props
//   }
// }
