import { Routes, Route } from 'react-router-dom'
import React from 'react';
import AllMeetupsPage from './pages/AllMeetups'
import FavoritesPage from './pages/Favorites'
import NewMeetupPage from './pages/NewMeetup'
import Layout from './components/layout/Layout'
import { FavoritesContextProvider } from './store/favorites-context'
function App() {
  return (
    <div>
      <FavoritesContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/new" element={<NewMeetupPage />} />
          </Routes>
        </Layout>
      </FavoritesContextProvider>


    </div>
  );
}

export default App;
