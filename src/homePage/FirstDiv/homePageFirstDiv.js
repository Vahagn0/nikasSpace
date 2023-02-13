import { Grid } from "@mui/material"

function HomePageFirstDiv(){

    return(
        <Grid container>
            <Grid item lg={4} xs={0}  className='firstDivItem'>
            </Grid>
            <Grid item lg={4} xs={12} className='firstDivItem' sx={{ flexDirection: 'column' }}>
                <img src="Logo.png" className='firstPic' />
                <span className="firstDivText" onClick={()=>{
                    alert("a")
                }}>About Us</span>
            </Grid>
            <Grid item lg={4} xs={0} className='firstDivItem'> 
            </Grid>
        </Grid>
    )
}

export default HomePageFirstDiv