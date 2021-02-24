import '../styles/globals.scss'
import '../styles/home.scss'
import '../styles/places.scss'
import '../styles/place.scss'
<<<<<<< HEAD
=======
import '../styles/add-place.scss'
>>>>>>> d474bcc751207fbaf57a656757f8ec0a7d1fe455
import '../styles/person.scss'
import '../styles/auth.scss'
import MainLayout from '../src/componetns/MainLayout'
import { Provider } from '../src/store'
import initialState from '../src/store/initialState'
import rootReducer from '../src/reducers'

function MyApp({ Component, pageProps }) {

  return (
    <Provider reducer={rootReducer} initialState={initialState}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>

  )
}

export default MyApp
