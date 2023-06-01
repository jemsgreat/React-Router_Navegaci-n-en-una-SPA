import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Page404 from './pages/Page404';
import Header from './Components/Header';
import Post from './pages/Post';

function App() {

 
  return (
    <>
      <Router >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/posts/:id' element={<Post />} />  {/* :id en este caso funciona como param para identificar no puede ser necesariamente id, podria ser otra cosa. */}
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
