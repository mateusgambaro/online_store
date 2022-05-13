import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AddProducts.css';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { faClock, faCog, faFolderOpen, faBook, faReceipt, faUser, faHatWizard, faGlasses, faBrain, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import axios from "axios";







function AddProducts() {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        let dataObj = {
            name: data.titulo,
            price: data.preco,
            description: data.descricao,
            autor: data.autor,
            grupo: data.categoria,
            img: data.imagem    
        }

        await axios.post('https://online-store-backend-voll.herokuapp.com/insertProducts', dataObj)
        console.log(data)
    };
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

            <Container style={{width: '25%', height: '100%', marginRight: '70%'}}>
                <Box style={{width: '25%', height: '25%'}}>
                    Saldo
                <div>
                <h1>Mateus</h1>
                <p>R$200</p>
                </div>
                </Box>
            </Container>

            <Container maxWidth="sm">

                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Filosofia" value="1" />
                            <Tab label="Ficção Científica" value="2" />
                            <Tab label="Música" value="3" />
                            <Tab label="Biografia" value="4" />

                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <form className='box-form' onSubmit={handleSubmit(onSubmit)}>

                            <div className="box">
                                <TextField
                                    {...register("titulo")}
                                    placeholder='Título da obra'
                                    //onChange={ (e) => setData(e.target.value)}
                                    label="Título" variant="outlined"
                                    size="medium"
                                    type="text"
                                    fullWidth
                                />
                            </div>

                            <div className="box">
                                <TextField
                                    {...register("autor")}
                                    placeholder='Autor'
                                    //onChange={ (e) => setName(e.target.value) }
                                    label="Autor" variant="outlined"
                                    size="large"
                                    type="text"
                                    fullWidth
                                />

                            </div>

                            <div className="box">
                                <TextField
                                    {...register("imagem")}
                                    placeholder='Url da imagem'
                                    //onChange={ (e) => setData(e.target.value)}
                                    label="Imagem" variant="outlined"
                                    size="medium"
                                    type="text"
                                    fullWidth
                                />
                            </div>

                            <div className="box">
                                <TextField
                                    {...register("categoria")}
                                    placeholder='Categoria'
                                    //onChange={ (e) => setName(e.target.value) }
                                    label="Categoria" variant="outlined"
                                    size="large"
                                    value="17"
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 1)
                                    }}
                                    type="number"
                                    fullWidth
                                >
                                      17
                                    </TextField>

                            </div>

                            <div className="box">
                                <TextField
                                    {...register("preco")}
                                    placeholder='Preço'
                                    //onChange={ (e) => setName(e.target.value) }
                                    label="Preço" variant="outlined"
                                    size="large"
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 2)
                                    }}
                                    type="number"
                                    fullWidth
                                />

                            </div>

                            <div className="box">
                                <TextField
                                    {...register("descricao")}
                                    placeholder='Escreva uma descrição'
                                    label="Descrição" variant="outlined"
                                    size="medium"
                                    //                   onChange={ (e) => setText(e.target.value) }
                                    multiline
                                    rows="5"
                                    fullWidth
                                />
                            </div>
                            <Button variant="contained" color="success" type="submit"> Enviar</Button>
                        </form>
                    </TabPanel>
                    <TabPanel value="2">

                        <form className='box-form' onSubmit={handleSubmit(onSubmit)}>

                            <div className="box">
                                <TextField
                                    {...register("titulo")}
                                    placeholder='Título da obra'
                                    //onChange={ (e) => setData(e.target.value)}
                                    label="Título" variant="outlined"
                                    size="medium"
                                    type="text"
                                    fullWidth
                                />
                            </div>

                            <div className="box">
                                <TextField
                                    {...register("autor")}
                                    placeholder='Autor'
                                    //onChange={ (e) => setName(e.target.value) }
                                    label="Autor" variant="outlined"
                                    size="large"
                                    type="text"
                                    fullWidth
                                />

                            </div>

                            <div className="box">
                                <TextField
                                    {...register("categoria")}
                                    placeholder='Categoria'
                                    //onChange={ (e) => setName(e.target.value) }
                                    label="Categoria" variant="outlined"
                                    size="large"
                                    value="18"
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 1)
                                    }}
                                    type="number"
                                    fullWidth
                                >
                                      18
                                    </TextField>

                            </div>

                            <div className="box">
                                <TextField
                                    {...register("preco")}
                                    placeholder='Preço'
                                    //onChange={ (e) => setName(e.target.value) }
                                    label="Preço" variant="outlined"
                                    size="large"
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 2)
                                    }}
                                    type="number"
                                    fullWidth
                                />

                            </div>

                            <div className="box">
                                <TextField
                                    {...register("descricao")}
                                    placeholder='Escreva uma descrição'
                                    label="Descrição" variant="outlined"
                                    size="medium"
                                    //                   onChange={ (e) => setText(e.target.value) }
                                    multiline
                                    rows="5"
                                    fullWidth
                                />
                            </div>
                            <Button variant="contained" color="success" type="submit"> Enviar</Button>
                        </form>
                    </TabPanel>
                    <TabPanel value="3">
                        <form className='box-form' onSubmit={handleSubmit(onSubmit)}>

                            <div className="box">
                                <TextField
                                    {...register("titulo")}
                                    placeholder='Título da obra'
                                    //onChange={ (e) => setData(e.target.value)}
                                    label="Título" variant="outlined"
                                    size="medium"
                                    type="text"
                                    fullWidth
                                />
                            </div>

                            <div className="box">
                                <TextField
                                    {...register("autor")}
                                    placeholder='Autor'
                                    //onChange={ (e) => setName(e.target.value) }
                                    label="Autor" variant="outlined"
                                    size="large"
                                    type="text"
                                    fullWidth
                                />

                            </div>

                            <div className="box">
                                <TextField
                                    {...register("categoria")}
                                    placeholder='Categoria'
                                    //onChange={ (e) => setName(e.target.value) }
                                    label="Categoria" variant="outlined"
                                    size="large"
                                    value="19"
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 1)
                                    }}
                                    type="number"
                                    fullWidth
                                >
                                    19
                                    </TextField>

                            </div>

                            <div className="box">
                                <TextField
                                    {...register("preco")}
                                    placeholder='Preço'
                                    //onChange={ (e) => setName(e.target.value) }
                                    label="Preço" variant="outlined"
                                    size="large"
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 2)
                                    }}
                                    type="number"
                                    fullWidth
                                />

                            </div>

                            <div className="box">
                                <TextField
                                    {...register("descricao")}
                                    placeholder='Escreva uma descrição'
                                    label="Descrição" variant="outlined"
                                    size="medium"
                                    //                   onChange={ (e) => setText(e.target.value) }
                                    multiline
                                    rows="5"
                                    fullWidth
                                />
                            </div>
                            <Button variant="contained" color="success" type="submit"> Enviar</Button>
                        </form>
                    </TabPanel>
                    <TabPanel value="4">
                        <form className='box-form' onSubmit={handleSubmit(onSubmit)}>

                            <div className="box">
                                <TextField
                                    {...register("titulo")}
                                    placeholder='Título da obra'
                                    //onChange={ (e) => setData(e.target.value)}
                                    label="Título" variant="outlined"
                                    size="medium"
                                    type="text"
                                    fullWidth
                                />
                            </div>

                            <div className="box">
                                <TextField
                                    {...register("autor")}
                                    placeholder='Autor'
                                    //onChange={ (e) => setName(e.target.value) }
                                    label="Autor" variant="outlined"
                                    size="large"
                                    type="text"
                                    fullWidth
                                />

                            </div>

                            <div className="box">
                                <TextField
                                    {...register("categoria")}
                                    placeholder='Categoria'
                                    //onChange={ (e) => setName(e.target.value) }
                                    label="Categoria" variant="outlined"
                                    size="large"
                                    value="20"
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 1)
                                    }}
                                    type="number"
                                    fullWidth
                                >
                                    20
                                    </TextField>

                            </div>

                            <div className="box">
                                <TextField
                                    {...register("preco")}
                                    placeholder='Preço'
                                    //onChange={ (e) => setName(e.target.value) }
                                    label="Preço" variant="outlined"
                                    size="large"
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 2)
                                    }}
                                    type="number"
                                    fullWidth
                                />

                            </div>

                            <div className="box">
                                <TextField
                                    {...register("descricao")}
                                    placeholder='Escreva uma descrição'
                                    label="Descrição" variant="outlined"
                                    size="medium"
                                    //                   onChange={ (e) => setText(e.target.value) }
                                    multiline
                                    rows="5"
                                    fullWidth
                                />
                            </div>
                            <Button variant="contained" color="success" type="submit"> Enviar</Button>
                        </form>
                    </TabPanel>
                </TabContext>


            </Container>
        </section>
    )
}

export default AddProducts;
