import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AddProducts.css';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


function AddProducts () {
    return (
        <section>
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    Admin
                </Typography>
            <FontAwesomeIcon icon={faUserCircle} style={{display: 'flex', justifyContent: 'flex-end', width: '20px', marginLeft: 'auto'}}/>
            </Toolbar>
        </AppBar>
    </section>
    )
}

export default AddProducts;
