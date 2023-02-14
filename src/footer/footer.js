import { Grid } from "@mui/material"

function Footer(){
    return(
        <Grid container>
            <Grid item xs={12} lg={4} xl={4} className="footerItem">
                <img src="Logo.png" className='footerPic' />
            </Grid>
            <Grid container xs={12} lg={4} xl={4} className="footerItem"
                justifyContent="center"
                alignItems="center"
            >
                    <Grid item xs={4} lg={3} xl={3} className="footerItem" 
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
                <Grid item xs={4} lg={3} xl={3} className="footerItem" 
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
                <Grid item xs={4} lg={3} xl={3} className="footerItem" 
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
            </Grid>
            <Grid container xs={12} lg={4} xl={4} className="footerItem" direction="column">
                <Grid item xs={6} lg={4} xl={4} className="contactItem" id="contactText">
                    <span>Follow Us</span>
                </Grid>
                <Grid item xs={6} lg={4} xl={4} className="contactItem" 
                     direction="row"
                     justifyContent="space-around"
                     alignItems="center"
                >
                    <img src="contactInstagram.png"id="contactInstagram"/>
                    <img src="contactMail.jpg" id="contactMail"/>
                    <img src="contactFacebook.jpg" id="contactFacebook"/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer