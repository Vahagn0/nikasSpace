import { Grid } from "@mui/material"

function Header(){
    return(
        <Grid container spacing={1} className="header">
            <Grid md={4} xs={0} className="headerItem"></Grid>
            <Grid item md={1} xs={4} className="headerItem" id="logo">
                <img src="Logo.png" className="logo"/>
            </Grid>
            <Grid item md={1} xs={4} className="headerItem">
                schedule
            </Grid>
            <Grid item md={1} xs={4} className="headerItem">
                pricing
            </Grid>
            <Grid item md={1} xs={4} className="headerItem" id="aboutUs">
                About us
            </Grid>
            <Grid md={4} xs={0} className="headerItem"></Grid>
        </Grid>
    )
}

export default Header