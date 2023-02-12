import { Grid } from "@mui/material"
import { useEffect, useState } from "react"

let width = window.innerWidth

function HomePageFirstDiv(){

    const [imgHeight,setImageHeight] = useState(290)

    useEffect(()=>{
        if(width < 576){
            setImageHeight(170)   
        }
    })


    return(
        <Grid container>
            <Grid item lg={4} xs={0}  className='firstDivItem'>
            </Grid>
            <Grid item lg={4} xs={12} className='firstDivItem' sx={{ flexDirection: 'column' }}>
                <img src="Logo.png" className='firstPic' height={imgHeight}/>
                <span className="firstDivText" onClick={()=>{
                    alert(width)
                }}>About Us</span>
            </Grid>
            <Grid item lg={4} xs={0} className='firstDivItem'> 
            </Grid>
        </Grid>
    )
}

export default HomePageFirstDiv