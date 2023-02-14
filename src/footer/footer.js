import { Grid } from "@mui/material"

function Footer(){
    return(
        <Grid container>
            <Grid item xs={12} lg={4} xl={4} className="footerItem">
                <img src="Logo.png" className='footerPic' />
            </Grid>
            <Grid item xs={6} lg={2} xl={2} className="footerItem" 
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <span className="footerText"> about us</span>
                <span className="footerText">trainers</span>
                <span className="footerText">schedool</span>
                <span className="footerText">poxos</span>
                <span className="footerText">petros</span>
                <span className="footerText">martiros</span>
            </Grid>
            <Grid item xs={6} lg={2} xl={2} className="footerItem" 
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <span className="footerText"> about us</span>
                <span className="footerText">trainers</span>
                <span className="footerText">schedool</span>
                <span className="footerText">poxos</span>
                <span className="footerText">petros</span>
                <span className="footerText">martiros</span>
            </Grid>
            <Grid item xs={12} lg={4} xl={4} className="footerItem">
                <span>Follow Us</span>
                <img src="contactInstagram.png"id="contactInstagram"/>
                <img src="contactMail.png" id="contactMail"/>
                <img src="contactFacebook.jpg" id="contactFacebook"/>
            </Grid>
        </Grid>
    )
}

export default Footer