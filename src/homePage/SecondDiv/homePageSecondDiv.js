import {Grid} from '@mui/material';

function HomePageSecondDiv(){

    return(
        <Grid container>
            <Grid item xl={4} lg={4} xs={0} className='secondDivItem' id="secondYoga">
                    <Grid item xl={4} lg={4} xs={0} className='secondOrangeCorner'></Grid>
                    <img src="secondYoga.png" className='secondDivPicCorner'/>
            </Grid>
            <Grid item xl={4} lg={4} xs={12} className='secondDivItem'>
                <Grid item xl={4} lg={4} xs={12} className='secondOrange'>
                    <span className="secondDivText" onClick={()=>{
                    alert("a")
                }}> Classes</span>
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