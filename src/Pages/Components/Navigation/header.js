import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Send from '@material-ui/icons/Send';
import { styles } from '../styles';


function Header ({title, handleClickOpen}) {
    const classes = styles();
    return (
        <div className={classes.pageRoot}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.headerMenuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.headerTitle}>
                        {title}
                    </Typography>
                    <IconButton edge="end" className={classes.headerSendButton} color="inherit" aria-label="Menu" onClick={handleClickOpen} >
                        <Send />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;

