import './header/header.css';
import "./homePage/FirstDiv/homePageFirstDiv.css"
import "./homePage/SecondDiv/homePageSecondDiv.css"
import {Grid} from '@mui/material';
import Header from './header/Header';
import HomePageSecondDiv from './homePage/SecondDiv/homePageSecondDiv';
import HomePageFirstDiv from './homePage/FirstDiv/homePageFirstDiv';

function App() {
  return (
   <Grid container>
      <Header />
      <HomePageFirstDiv />
      <HomePageSecondDiv />
   </Grid>
  );
}

export default App;