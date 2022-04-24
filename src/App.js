
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Search from './page/Search';
import TvShows from './page/TvShows';
import Detail from './page/detail/Detail';
import DetailTv from './page/detail/DetailTv'
import Movies from './page/Movies';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/search' element={<Search />} />
          <Route path='/tvshows' element={<TvShows />} />
          <Route path='/detailMovie' element={<Detail />} />
          <Route path='/detailTvShow' element={<DetailTv />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
