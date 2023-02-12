import {Grid} from '@mui/material';
import { useEffect, useState } from "react"

let width = window.innerWidth


function HomePageSecondDiv(){

    const [xs,setXs] = useState(false)

    useEffect(()=>{
        if(width < 576){
            setXs(true)  
        }
    })

    return(
        <Grid container>
            <Grid item lg={4} xs={0} className='secondDivItem' id="secondYoga">
                {!xs &&
                <>
                    <Grid item lg={4} xs={0} className='secondOrange'></Grid>
                    <img src="secondYoga.png" className='secondDivPic'/>
                </>
                }
            </Grid>
            <Grid item lg={4} xs={12} className='secondDivItem'>
                <>
                <Grid item lg={4} xs={12} className='secondOrange'>
                    <span className="secondDivText" onClick={()=>{
                    alert("a")
                }}> Classes</span>
                </Grid> 
                <img src="secondAnti.png" className='secondDivPic' id='secondAnti'/>
                </>
            </Grid>
            <Grid item lg={4} xs={0} className='secondDivItem'> 
                {!xs &&
                <>
                    <Grid item lg={4} xs={0} className='secondOrange'></Grid>
                    <img src="secondChild.png" className='secondDivPic'/>
                </>
                }
            </Grid>
        </Grid>
    )
}

export default HomePageSecondDiv