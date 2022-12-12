import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaEthereum } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import './Header.css'
import { FaWallet } from 'react-icons/fa';


const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">

            <Container className='d-flex justify-content-between '>
                <Navbar.Brand href="#home" className='fs-3 text-primary'>Faucets</Navbar.Brand>
                <div className='d-flex align-items-center'>
                    <Nav>
                        <NavDropdown title=" Ethereum Kovan" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Arbitrum Rinkby</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Avalanche Fuji</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">BNB Chain TESTNET</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" selected> <FaEthereum /> Ethereum Rinkeby</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Fantom Testnet</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Harmony Testnet</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">POA Network Sokol</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Polygon Mumbai</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"> <Button className="wallet-btn"> <FaWallet /> Connect Wallet</Button></Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Profile" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </div>


            </Container>
        </Navbar >
    );
}

export default Header;