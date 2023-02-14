import { Grid } from "@mui/material"

function HomePageFirstDiv(){

    return(
        <Grid container>
            <Grid item xl={3} lg={3} xs={0}  className='firstDivItem'>
            </Grid>
            <Grid item xl={6} lg={6} xs={12} className='firstDivItem' sx={{ flexDirection: 'column' }}>
                <img src="Logo.png" className='firstPic' />
                <span className="firstDivText" onClick={()=>{
                    alert("a")
                }}>About Us</span>
            </Grid>
            <Grid item xl={3} lg={3} xs={0} className='firstDivItem'> 
            </Grid>
        </Grid>
    )
}

export default HomePageFirstDiv