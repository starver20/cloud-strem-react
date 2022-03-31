import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { Home } from './pages/home/Home';
import { VideoListing } from './pages/video-listing/VideoListing';
import { SingleVideo } from './pages/single-video/SingleVideo';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { LikedVideo } from './pages/liked-video/LikedVideo';
import { Watchlater } from './pages/watch-later/Watchlater';
import { Playlist } from './pages/playlist/Playlist';
import Mockman from 'mockman-js';

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <aside className="sidebar">
          <Sidebar />
        </aside>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<VideoListing />} />
            <Route path="/video/:videoId" element={<SingleVideo />} />
            <Route path="/likes" element={<LikedVideo />} />
            <Route path="/later" element={<Watchlater />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/m" element={<Mockman />} />
            <Route path="*" element={<VideoListing />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
