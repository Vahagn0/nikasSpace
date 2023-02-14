import './fonts/AQUINO-DEMO.TTF';
import './header/header.css';
import "./homePage/FirstDiv/homePageFirstDiv.css"
import "./homePage/SecondDiv/homePageSecondDiv.css"
import "./footer/footer.css"
import {Grid} from '@mui/material';
import { useState } from 'react';
import Header from './header/Header';
import HomePageSecondDiv from './homePage/SecondDiv/homePageSecondDiv';
import HomePageFirstDiv from './homePage/FirstDiv/homePageFirstDiv';
import { Dropdown } from "./header/dropdown";
import Footer from './footer/footer';

function App() {
  const [showMenu,setShowMenu] = useState(false)

  return (
   <Grid container>
       <Header showMenu={showMenu} setShowMenu={setShowMenu} />
       {showMenu &&
        <Dropdown />
      }
      {!showMenu &&
      <>
        <HomePageFirstDiv />
        <HomePageSecondDiv />
      </>
      }
      <Footer />
   </Grid>
  );
}

export default App;
