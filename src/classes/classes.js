import { Grid } from "@mui/material";

function Classes(){
    return(
        <Grid container className="classesDiv">
            <Grid container xl={12} lg={12} xs={12} className='classesRow' justifyContent="space-around">
                <Grid item xl={5.8} lg={5.8} xs={12} className="classDiv" >
                    <img src="nika.jpg" className='classesPic' />
                    <span>alslaskadkjaskdhasjdhkasdasjdhaskdhaskdfhasf</span>
                </Grid>
                <Grid item xl={5.8} lg={5.8} xs={12} className="classDiv">
                    <img src="kristina.jpg" className='classesPic' />
                </Grid>
            </Grid>
            <Grid container xl={12} lg={12} xs={12} className='classesRow' justifyContent="space-around">
                <Grid item xl={5.8} lg={5.8} xs={12} className="classDiv" >
                    <img src="nika.jpg" className='classesPic' />
                    <span>alslaskadkjaskdhasjdhkasdasjdhaskdhaskdfhasf</span>
                </Grid>
                <Grid item xl={5.8} lg={5.8} xs={12} className="classDiv">
                    <img src="kristina.jpg" className='classesPic' />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Classes