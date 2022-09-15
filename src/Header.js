import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { VideoCall,Search,Apps,Notifications } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    header : {
        display : "flex",
        alignItems : "center",
        justifyContent : "space-between",
        padding : "10px",
        position : "sticky",
        top : "0",
        backgroundColor : "white"
    },
    header_logo : {
        height : "40px",
        objectFit : "contain",
        marginLeft : "20px",
    },
    header_left : {
        display : "flex",
        alignItems : "center"

    },
    header_search : {
        display : "flex",
        alignItems : "center",
        width : "40%",
        border : "1px solid lightGrey",
        '& input' : {
            flex : "1",
            border : "none"
        }

    },
    header_icons : {
        display : "flex",
        alignItems : "center"

    },
    search_icon : {
        width : "50px",
        background : "#fafafa",
        borderLeft : "1px solid lightGrey",
        color : "grey",

    },
    icon : {
        marginRight : "20px"
    }
})

function Header() {

    const classes = useStyles();
    const [query,setQuery] = useState("");

  return (
    <div className={classes.header}>
        <div className={classes.header_left}>
            <MenuIcon />
            <Link to="/">
                <img className={classes.header_logo} src='/youtubeLogo.jpg' alt='youtube'/>
            </Link>
        </div>

        <div className={classes.header_search}>
            <input 
            onChange={(e) => {setQuery(e.target.value)}}
            value={query}
            placeholder='Search' 
            type="text" />

            <Link to={`/search/${query}`}>
                <Search className={classes.search_icon} />
            </Link>
        </div>

        <div className={classes.header_icons}>
            <VideoCall className={classes.icon}/>
            <Apps className={classes.icon}/>
            <Notifications className={classes.icon}/>
            <Avatar className={classes.icon}/>
        </div>


        
    </div>
  )
}

export default Header
