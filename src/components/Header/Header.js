import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaEthereum } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { GiTwoCoins } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { Context } from '../../contexts/Contexts';
import './Header.css'

const Header = () => {


    const { currency, setCurrency } = useContext(Context)


    console.log(currency)
    const currencyFunc = coin => {
        setCurrency(coin);
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">

            <Container className='d-flex justify-content-between '>
                <Link to="/"><Navbar.Brand ><span className='fs-3 fw-bold text-color text-decoration-none'>Faucets</span></Navbar.Brand></Link>
                <div className='d-flex align-items-center'>
                    <Nav className='border'>
                        <NavDropdown title={`${currency}`} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" onClick={() => currencyFunc('Arbitrum Rinkby')}>  <GiTwoCoins />  Arbitrum Rinkby</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" onClick={() => currencyFunc('Avalanche Fuji')}> <GiTwoCoins />  Avalanche Fuji</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" onClick={() => currencyFunc('BNB Chain TESTNET')}> <GiTwoCoins />  BNB Chain TESTNET</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" onClick={() => currencyFunc('Ethereum Rinkeby')}> <FaEthereum /> Ethereum Rinkeby</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" onClick={() => currencyFunc('Fantom Testnet')}> <GiTwoCoins />  Fantom Testnet</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" onClick={() => currencyFunc('Harmony Testnet')}> <GiTwoCoins />  Harmony Testnet</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" onClick={() => currencyFunc('POA Network Sokol')}> <GiTwoCoins />  POA Network Sokol</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" onClick={() => currencyFunc('Polygon Mumbai')}> <GiTwoCoins />  Polygon Mumbai</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"> <div className="wallet-btn"> <FaWallet /> Connect Wallet</div></Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Profile" id="collasible-nav-dropdown">
                            <Link to="/login"><NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item></Link>
                            <Link to="/signup"><NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item></Link>
                            <Link to="/faq"><NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item></Link>

                        </NavDropdown>
                    </Nav>
                </div>


            </Container>
        </Navbar >
    );
}

export default Header;