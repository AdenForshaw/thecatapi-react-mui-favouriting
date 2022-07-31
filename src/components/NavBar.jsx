import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

export default function NavBar({onModeChange}) {

    const [mode, setMode] = React.useState(false);

    const handleModeChange = (event) => {
        setMode(event.target.checked);
        onModeChange(event.target.checked);
    }

  return (
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Kitties Tutorial App: Favouriting
          </Typography>
          <FormGroup>
  <FormControlLabel control={<Switch onChange={handleModeChange} defaultValue={false} color="error"/>} label="Show Your Favourites" />
</FormGroup>
        </Toolbar>
      </AppBar>
  );
}
