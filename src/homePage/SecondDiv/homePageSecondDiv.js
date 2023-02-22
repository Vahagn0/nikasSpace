import {Grid} from '@mui/material';
import { useNavigate } from "react-router-dom";

function HomePageSecondDiv(){

    const navigate = useNavigate()

    return(
        <Grid container>
            <Grid item xl={4} lg={4} xs={0} className='secondDivItem' id="secondYoga">
                    <Grid item xl={4} lg={4} xs={0} className='secondOrangeCorner'></Grid>
                    <img src="secondYoga.png" className='secondDivPicCorner'/>
            </Grid>
            <Grid item xl={4} lg={4} xs={12} className='secondDivItem'>
                <Grid item xl={4} lg={4} xs={12} className='secondOrange'>
                <span className="secondDivText" onClick={()=>{navigate("/classes")}}> Classes</span>
                </Grid> 
                <img src="secondAnti.png" className='secondDivPic'/>
            </Grid>
            <Grid item xl={4} lg={4} xs={0} className='secondDivItem'> 
                    <Grid item xl={4} lg={4} xs={0} className='secondOrangeCorner'></Grid>
                    <img src="secondChild.png" className='secondDivPicCorner'/>
            </Grid>
        </Grid>
    )
}

export default HomePageSecondDiv