import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchVideos from './Search';
import './App.css';
import VideoPlayer from './VideoPlayer';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <div className='main_page'>
                <SideBar />
                <RecommendedVideos />
              </div>
            </>
          } />

          <Route path="/search" element={
            <div className='main_page'>
              <SideBar />
              <br />
              <SearchVideos />
            </div>
          } />

          <Route path="/search/:query" element={
            <div className='main_page'>
              <SideBar />
              <br />
              <SearchVideos />
            </div>
          } />


          <Route path="/details/:id" element={
            <div className='main_page'>
              <SideBar />
              <VideoPlayer />
            </div>
          } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
