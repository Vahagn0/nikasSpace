import { Grid } from "@mui/material"
import { Squeeze as Hamburger } from 'hamburger-react'
import { useState,useEffect } from "react"

function Header({showMenu,setShowMenu}){
    const [color,setColor] = useState(true)
    const [headerDivColor,setHeaderDivsColor] = useState("rgba(255, 255, 255, .9)" )
    const [hamburgerIconColor,setHamburgerIconColor] = useState("#EF892E")

    useEffect(()=>{
        if(color){
            setHamburgerIconColor("#EF892E")
            setHeaderDivsColor("rgba(255, 255, 255, .9)" )
        }else{
            setHamburgerIconColor("white")
            setHeaderDivsColor("rgba(239, 137, 46)")
        }
    },[color])

    return(
        <Grid container spacing={1} className="header" sx={{ background: headerDivColor  }}>
            <Grid item md={4} xs={0} className="headerItem"></Grid>
            <Grid item md={1} xs={4} id="logo">
                {!showMenu && 
                    <img src="Logo.png" className="logo"/>
                }
            </Grid>
            <Grid item md={1} xs={0} className="headerItem">
                <span className="headerText">About us</span>
            </Grid>
            <Grid item md={1} xs={0} className="headerItem">
                <span className="headerText">Schedul</span>
            </Grid>
            <Grid item md={1} xs={0} className="headerItem" id="aboutUs">
                <span className="headerText"> trainers</span>
            </Grid>
            <Grid item md={4} xs={0} className="headerItem" ></Grid>
            <Grid item md={0} xs={6.5} className="hamburgerDiv">
                    <div id="hamburgerIcon">
                         <Hamburger color={hamburgerIconColor} duration={0.3} onToggle={()=>{
                        setShowMenu(!showMenu)
                        setColor(!color)
                    }} />
                    </div>
            </Grid>
        </Grid>
    )
}

export default Header