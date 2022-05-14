import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ListProducts.css';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';
import { faClock, faCog, faFolderOpen, faBook, faReceipt, faUser, faHatWizard, faGlasses, faBrain, faUserAstronaut, faMoneyBill, faGuitar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";


function ListProducts() {

    const [selectedItem, setSelectItem] = useState('filosofia')
    const [addcart, setaddcart] = useState(1);

    const AddCart = async (bookPrice) => {
        
        let novoSaldo = users[0]?.saldo - bookPrice
        
        if(novoSaldo < 0) {
            novoSaldo = 0
        }

        const itemCopy = Array.from(users)

        itemCopy[1].saldo = novoSaldo

        let dataObj = {
            saldo: novoSaldo
        }
        await axios.put(`https://online-store-backend-voll.herokuapp.com/updateUser/${users[1].id}`, dataObj)
    }; 
    

    const [users, setUsers] = useState([]);
    const [books, setBooks] = useState([]);
    const [groups, setGroups] = useState([]);

   console.log('cart', addcart)
   console.log('cart', users)




    useEffect(() => {
        getUsers();
        getGroups();
        getBooks();

    }, []);

    const getUsers = async () => {
        const response = await axios.get('https://online-store-backend-voll.herokuapp.com/getUser');
        setUsers(response.data);
        getBooks()
    }

    const getBooks = async () => {
        const response = await axios.get('https://online-store-backend-voll.herokuapp.com/getProducts');
        setBooks(response.data);
        getGroups()
    }

    const getGroups = async () => {
        const response = await axios.get('https://online-store-backend-voll.herokuapp.com/getGroups');
        setGroups(response.data);
    }


    const setNewSelectItem = (event, selectedItem) => {
        setSelectItem(selectedItem)
    }

    return (

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AppBar position="static">
                <Toolbar  variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Livros
                    </Typography>
                    <FontAwesomeIcon icon={faMoneyBill} style={{ display: 'flex', justifyContent: 'space-around', width: '20px', marginLeft: 'auto' }} /> &nbsp;<h4>{users[1]?.saldo}</h4>
                    <FontAwesomeIcon icon={faUser} style={{ display: 'flex', justifyContent: 'flex-end', width: '20px', marginLeft: 'auto' }} /> &nbsp; <h4>{users[1]?.email}</h4>
                </Toolbar>
            </AppBar>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                width: '100%', height: '100%',
                marginRight: 'auto',
                backgroundColor: 'white'
            }}>
                <VerticalNavigation
                    selectedItem={selectedItem}
                    onSelect={setNewSelectItem}
                    style={{ position: 'fixed',backgroundColor: 'white', height: '100%', marginRight: '20px' }}
                >
                    <VerticalSection>
                        <VerticalItem
                            name="filosofia"
                            label="Filosofia"
                            icon={<FontAwesomeIcon icon={faBrain} />}

                        />
                        <VerticalItem
                            name="scifi"
                            label="Ficção Científica"
                            icon={<FontAwesomeIcon icon={faHatWizard} />}
                        />
                        <VerticalItem
                            name="musica"
                            label="Música"
                            icon={<FontAwesomeIcon icon={faGuitar} />}
                        />
                        <VerticalItem
                            name="biografia"
                            label="Biografia"
                            icon={<FontAwesomeIcon icon={faGlasses} />}

                        />
                    </VerticalSection>
                </VerticalNavigation>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '90%', height: '100%',
                position: 'relative',
                // marginTop: '-15.5%',
                overflowX: 'hidden'
            }}>
                <div className="container">
                    {selectedItem === 'filosofia' ? books
                        .filter((books) => books.grupo === 17)
                        .map((book) => (
                            <div className="card">
                                <i className="fa fa-long-arrow-left"></i>
                                <div className="image">
                                    <img src={book.img} />

                                </div>
                                <div className="text">
                                    <h5>{book.autor}</h5>
                                    <h3>{book.name}</h3>
                                    <div className="price">
                                        <h3>R${book.price}</h3>
                                    </div>
                                    <div className="description">
                                        <h5>Descrição</h5>
                                        <p>{book.description}</p>
                                    </div>
                                    <div className="last_section">
                                        <button onClick={() => AddCart(book.price)}>Adicionar ao carrinho</button>

                                    </div>
                                </div>
                            </div>
                        ))
            : selectedItem === 'scifi' ? books
            .filter((books) => books.grupo === 18)
            .map((book) => (
                <div className="card">
                    <i className="fa fa-long-arrow-left"></i>
                    <div className="image">
                        <img src={book.img}  />

                    </div>
                    <div className="text">
                        <h5>{book.autor}</h5>
                        <h3>{book.name}</h3>
                        <div className="price">
                            <h3>R${book.price}</h3>
                        </div>
                        <div className="description">
                            <h5>Descrição</h5>
                            <p>{book.description}</p>
                        </div>
                        <div className="last_section">
                            <button onClick={() => AddCart(book.price)}>Adicionar ao carrinho</button>

                        </div>
                    </div>
                </div>
            )) : selectedItem === 'musica' ? books
            .filter((books) => books.grupo === 19)
            .map((book) => (
                <div className="card">
                    <i className="fa fa-long-arrow-left"></i>
                    <div className="image">
                        <img src={book.img}  />

                    </div>
                    <div className="text">
                        <h5>{book.autor}</h5>
                        <h3>{book.name}</h3>
                        <div className="price">
                            <h3>R${book.price}</h3>
                        </div>
                        <div className="description">
                            <h5>Descrição</h5>
                            <p>{book.description}</p>
                        </div>
                        <div className="last_section">
                            <button onClick={() => () => AddCart(book.price)}>Adicionar ao carrinho</button>

                        </div>
                    </div>
                </div>
            )) : selectedItem === 'biografia' ? books
            .filter((books) => books.grupo === 20)
            .map((book) => (
                <div className="card">
                    <i className="fa fa-long-arrow-left"></i>
                    <div className="image">
                        <img src={book.img}  />

                    </div>
                    <div className="text">
                        <h5>{book.autor}</h5>
                        <h3>{book.name}</h3>
                        <div className="price">
                            <h3>R${book.price}</h3>
                        </div>
                        <div className="description">
                            <h5>Descrição</h5>
                            <p>{book.description}</p>
                        </div>
                        <div className="last_section">
                            <button onClick={() => AddCart(book.price)}>Adicionar ao carrinho</button>

                        </div>
                    </div>
                </div>
            )) : null}


                </div>
            </div>
        </div>


    )
}

export default ListProducts;
