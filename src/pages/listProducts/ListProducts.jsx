import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ListProducts.css';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCog, faFolderOpen, faBook, faReceipt, faUser, faHatWizard, faGlasses, faBrain, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';


function ListProducts() {



    const [selectedItem, setSelectItem] = useState('item 5')

    console.log(selectedItem);

    const setNewSelectItem = (event, selectedItem) => {
        setSelectItem( selectedItem )
    }

    return (

        <section>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Livros
                    </Typography>
                <FontAwesomeIcon icon={faUser} style={{display: 'flex', justifyContent: 'flex-end', width: '20px', marginLeft: 'auto'}}/>
                </Toolbar>
            </AppBar>
            <article style={{ width: '25%', height: '100%' }}>
                <VerticalNavigation
                    selectedItem={selectedItem}
                    onSelect={setNewSelectItem}
                >
                    <VerticalSection>
                        <VerticalItem
                            name="item-1"
                            label="Folders"
                            icon={<FontAwesomeIcon icon={faHatWizard} />}
                        />
                        <VerticalItem
                            name="item-2"
                            label="Recents"
                            icon={<FontAwesomeIcon icon={faGlasses} />}
                        />
                        <VerticalItem
                            name="item-3"
                            label="Settings"
                            icon={<FontAwesomeIcon icon={faBrain} />}
                        />
                        <VerticalItem
                            name="item-4"
                            label="Projects"
                            icon={<FontAwesomeIcon icon={faUserAstronaut} />}
                        />
                        <VerticalItem
                            name="item-5"
                            label="Reports"
                            icon={<FontAwesomeIcon icon={faReceipt} />}
                        />
                    </VerticalSection>
                </VerticalNavigation>
            </article>
            <div style={{marginLeft: '25%', width: '100%'}}>
                <div>
                <h1>OLA</h1>
                </div>
                <div>
                    <ul style={{width: '100%'}}>
                        <li>bla bla</li>
                    </ul>
                </div>
            </div>
        </section>


    )
}

export default ListProducts;
