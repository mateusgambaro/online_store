import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AddProducts.css';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { faClock, faCog, faFolderOpen, faBook, faReceipt, faUser, faHatWizard, faGlasses, faBrain, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import Container from '@mui/material/Container';






function AddProducts() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Adicionar Livro
                    </Typography>
                    <FontAwesomeIcon icon={faUser} style={{ display: 'flex', justifyContent: 'flex-end', width: '20px', marginLeft: 'auto' }} />
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
            <form className='box-form' onSubmit={handleSubmit(onSubmit)}>
            <div className="box">
                    <TextField  placeholder='Escreva um comentário (opcional)'
                    label="Comentário" variant="outlined" 
                    size="medium"
 //                   onChange={ (e) => setText(e.target.value) }
                    multiline
                    rows="5"
                    fullWidth
                    />
                </div>

                <div className="box">
                    <TextField  placeholder='Quando você visitou este estabelecimento?' 
                    //onChange={ (e) => setData(e.target.value)}
                    label="Quando você visitou este estabelecimento?" variant="outlined" 
                    size="medium"
                    type="date"
                    fullWidth
                    />
                </div>

                <div className="box">
                    <TextField  placeholder='Informe seu nome' 
                    //onChange={ (e) => setName(e.target.value) }
                    label="Nome Completo" variant="outlined" 
                    size="large"
                    fullWidth
                    />

                </div>
                <TextField {...register("firstName")} />
                <TextField {...register("gender")}/>
                <input type="submit" />
            </form>
            </Container>
        </section>
    )
}

export default AddProducts;
