import './header/header.css';
import "./homePage/FirstDiv/homePageFirstDiv.css"
import "./homePage/SecondDiv/homePageSecondDiv.css"
import "./footer/footer.css"
import "./classes/classes.css"
import {Grid} from '@mui/material';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './header/Header';
import HomePageSecondDiv from './homePage/SecondDiv/homePageSecondDiv';
import HomePageFirstDiv from './homePage/FirstDiv/homePageFirstDiv';
import { Dropdown } from "./header/dropdown";
import Classes from "./classes/classes"
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
   <Routes>
     <Route path='/' element={
       <>
         <HomePageFirstDiv />
         <HomePageSecondDiv />
       </>
     } />
     <Route path='/classes' element={<Classes />} />
   </Routes>
   }
   <Footer />
</Grid>
  );
}

export default App;
