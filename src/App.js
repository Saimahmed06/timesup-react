import logo from './logo.svg';
import './App.css';
// import img1 from "../src/images/one.jpg"
// import img from "../src/images/two.jpg"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/home"
import Contact from "./components/contact"
import About from "./components/about"

function App() {
  return (
    <Router>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Timesup_closet
            </Typography>
            <Button color="inherit"><Link to="/">Home</Link></Button>
            <Button color="inherit"><Link to="/about">About</Link></Button>
            <Button color="inherit"> <Link to="/contact">Contact</Link></Button>
          </Toolbar>
        </AppBar>
      </Box>

     <br /> <br />





      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </Router>









  );
  
}


export default App;
