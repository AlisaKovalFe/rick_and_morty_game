import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Main from './views/Main/Main'
import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Main/>
      <Footer/>
    </Provider>
  )
}

export default App;
