import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './Topbar.css'

export default class Topbar extends Component {
    render() {
        return (
            <div id="Topbar">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" >
                            Team7
                        </Typography>
                        <div className="menu">
                            <a href="#About"><Button color="inherit">About Us</Button></a>
                            <a href="#Services"><Button color="inherit">Services</Button></a>
                            <a href="#Projects"><Button color="inherit">Projects</Button></a>
                            <a href="#Contact"><Button color="inherit">Contact</Button></a>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}