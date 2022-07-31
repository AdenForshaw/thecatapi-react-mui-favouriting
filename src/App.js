
import { Box } from '@mui/material';
import { useState } from 'react';
import './App.css';
import FavouritesFeed from './components/FavouritesFeed';
import NavBar from './components/NavBar';
import Feed from './components/RandomFeed';

function App() {

  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <Box>
      <NavBar onModeChange={setShowFavorites}></NavBar>
      {!!showFavorites? <FavouritesFeed/> : <Feed></Feed>}
      </Box>)
}

export default App;
